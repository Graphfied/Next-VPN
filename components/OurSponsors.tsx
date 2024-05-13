import Image from 'next/image';
import React from 'react';


const sponsors = [
    { name: 'Slack', src: '/slack.png' }, // Removed 'public' from the path
    { name: 'Stripe', src: '/paypal.png' }, // Assuming you meant 'Stripe' logo, changed to 'paypal.png' to match the 'src'
    { name: 'Airwallex', src: '/airwallex.png' },
    { name: 'Spotify', src: '/spotify.png' },
    { name: 'Booking.com', src: '/booking.png' },
    { name: 'Gusto', src: '/gusto.png' },
  ];

const OurSponsors = () => {
  return (
    <div className=" text-white py-8">
      <div className="bg-neutral-100 container mx-auto px-10 text-center rounded-xl">
        <p className="mb-4 text-xl pb-10 pt-10 font-semibold text-black">Our trusted partners and companies, relying on our safe services.</p>
        <div className="flex justify-center items-center space-x-16 pb-10">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="inline-flex items-center justify-center">
              {/* Make sure the sizes are adjusted to fit your actual logo dimensions */}
              <Image
                src={sponsor.src}
                alt={`${sponsor.name} Logo`}
                width={100}
                height={50} 
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
