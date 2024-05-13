import React from 'react';
import Image from 'next/image';

const securityTips = [
  {
    title: 'Use Strong Passwords',
    description: 'Make sure your passwords are difficult to guess and use a mix of characters, numbers, and symbols.',
    icon: '/locked.png', // Replace with your icon path
  },
  {
    title: 'Update Regularly',
    description: 'Keep your software updated to protect against the latest security threats.',
    icon: '/updated.png', // Replace with your icon path
  },
  {
    title: 'Enable Two-Factor Authentication',
    description: 'Add an extra layer of security to your accounts by enabling two-factor authentication.',
    icon: '/biometric-authentication.png', // Replace with your icon path
  },
  // Add more security tips as needed
];

const SecurityTips = () => {
  return (
    <section className="bg-neutral-950 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto text-center">
        <h2 className="text-6xl text-white title-font mb-5">Security Tips!</h2>
        <p className="text-xl text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Stay safe online with these essential security tips.
        </p>
        
        {/* Central Image */}
        <div className="flex flex-auto my-10 items-center justify-center">
          <Image
            src="/datasecurtitymap.png" // Replace with the path to your central image
            alt="Security Central"
            width={900} // Adjust based on your actual image size
            height={500} // Adjust based on your actual image size
            objectFit="contain"
          />
        </div>
        
        {/* List of Security Tips */}
        <div className="flex items-center justify-center space-y-6">
          {securityTips.map((tip, index) => (
            <div key={index} className="flex items-center">
              <div className="w-16 h-16 mr-4">
                <Image
                  src={tip.icon}
                  alt={tip.title}
                  width={64} // Adjust based on your actual icon size
                  height={64} // Adjust based on your actual icon size
                  objectFit="contain"
                />
              </div>
              <div className="flex-col items-start text-left">
                <h3 className="text-xl font-semibold text-gray-500">{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityTips;
