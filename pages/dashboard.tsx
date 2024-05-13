import React, { useState } from 'react';
import Header from '../components/Header';
import worldMapImage from '../public/world-map-306338_1280.png'; // Ensure this path is correct
import Image from 'next/image';

const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState('Germany');
  const [loading, setLoading] = useState(false);

  const servers = {
    Germany: { ping: '35ms' },
    USA: { ping: '120ms' },
    UK: { ping: '50ms' },
    Japan: { ping: '180ms' },
    Brazil: { ping: '160ms' },
    // Add more servers as needed
  };

  const handleServerChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedServer(event.target.value);
  };

  const toggleVpnConnection = () => {
    setLoading(true);
    setTimeout(() => {
      setIsConnected(!isConnected);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full h-full bg-black"
    style={{
      "--gap": "5em",
      "--line": "1px",
      "--color": "rgba(255, 255, 255, 0.2)",
      "backgroundImage": `linear-gradient(-90deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap)), linear-gradient(0deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap))`,
      "backgroundSize": "var(--gap) var(--gap)"
    } as React.CSSProperties}
  >
      <Header />
      <main className="container mx-auto p-4 ">
        <h1 className="text-2xl font-bold text-center text-white mb-4">VPN Dashboard</h1>
        
        <div className="text-center mb-6">
          <label htmlFor="server-select" className="text-green-500 block mb-2">Choose a server:</label>
          <select id="server-select" onChange={handleServerChange} value={selectedServer} className="border border-gray-300 bg-slate-950 rounded p-2">
            {Object.entries(servers).map(([country, data]) => (
              <option key={country} value={country}>{country} - {data.ping}</option>
            ))}
          </select>
        </div>

        <div className="relative w-full" style={{ height: '600px' }}>
          <Image src={worldMapImage} alt="World Map" layout="fill" objectFit="contain" />
        </div>

        <div className="mt-6 text-center text-white">
          <h2 className="text-xl text-white font-semibold">Connection Details</h2>
          <p>Server Location: {selectedServer}</p>
          <p>Status: <span className={isConnected ? 'text-green-500' : 'text-red-500'}>{isConnected ? 'Connected' : 'Disconnected'}</span></p>
          <button
            onClick={toggleVpnConnection}
            className={`mt-4 px-4 py-2 rounded-md font-bold ${isConnected ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
            disabled={loading}
          >
            {loading ? 'Processing...' : isConnected ? 'Disconnect' : 'Connect'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
