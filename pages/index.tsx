import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import dotMapPicture from '../public/earth.png'; // Make sure the path to your image is correct
import OurSponsors from '../components/OurSponsors';
import FeaturesComponent from '../components/FeaturesComponent';
import SecurityTips from '../components/SecurityTips';
import PricingComponent from '../components/PricingComponent';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cypher VPN</title>
      </Head>
      <Header />
      <section 
  className="w-full h-full bg-black"
  style={{
    "--gap": "5em",
    "--line": "1px",
    "--color": "rgba(255, 255, 255, 0.2)",
    "backgroundImage": `linear-gradient(-90deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap)), linear-gradient(0deg, transparent calc(var(--gap) - var(--line)), var(--color) calc(var(--gap) - var(--line) + 1px), var(--color) var(--gap))`,
    "backgroundSize": "var(--gap) var(--gap)"
  } as React.CSSProperties}
>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-8xl text-6xl mb-4 font-bold">Protect Your Digital Footprint.</h1>
            <span className="text-2xl mt-8 mb-8 leading-relaxed text-blue-200">
            <p>Safeguard your online privacy and secure your</p>
              <p>internet connection with our powerful VPN service,</p>
              <p>encrypting your data for worry-free browsing.</p>
            </span>
            {/* Dot map image */}
            <div className="mt-20 relative w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 duration-300" style={{ height: '410px' }}> {/* Adjust width and height as needed */}
              <Image 
                src={dotMapPicture} 
                alt="Dot Map" 
                layout="none" 
                objectFit="contain" 
                objectPosition="center" 
              />
            </div>
          </div>
        </div>
        <OurSponsors />
        <FeaturesComponent />
        <SecurityTips />
        <PricingComponent />
        <FAQAccordion />
        <Footer />
      </section>
      {/* Add additional sections as needed */}
    </>
  );
}