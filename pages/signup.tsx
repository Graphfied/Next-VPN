import { useState } from 'react';
import Header from '../components/Header';
import Link from 'next/link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log('Signup response:', data);
    // Handle post-signup logic (e.g., redirect to login page or dashboard)
  };

  return (
    <div>
      <Header />
      <main 
  className="w-full min-h-screen bg-black"
  style={{
    "--gap": "5em",
    "--line": "1px",
    "--color": "rgba(255, 255, 255, 0.2)",
    "backgroundImage": `linear-gradient(-90deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap)), linear-gradient(0deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap))`,
    "backgroundSize": "var(--gap) var(--gap)"
  } as React.CSSProperties}
>
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required
                   className="mt-1 block w-full border border-gray-300 bg-slate-600 rounded-md shadow-sm"
                   onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required
                   className="mt-1 block w-full border border-gray-300 bg-slate-600 rounded-md shadow-sm"
                   onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required
                   className="mt-1 block w-full border border-gray-300 bg-slate-600 rounded-md shadow-sm"
                   onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Sign Up</button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </main>
    </div>
  );
};

export default Signup;
