import React from 'react';
import Image from 'next/image';

const features = [
  { 
    title: 'Privacy Protection', 
    description: 'Keep your data safe and secure with our end-to-end encryption.',
    image: '/privacy.png', // Replace with the path to your image
  },
  { 
    title: 'High-Speed Connection', 
    description: 'Enjoy fast and reliable connections with unlimited bandwidth.',
    image: '/internet.png', // Replace with the path to your image
  },
  { 
    title: 'Global Server Access', 
    description: 'Connect from anywhere in the world with our vast network of servers.',
    image: '/data-server-security.png', // Replace with the path to your image
  },
  // Add more features as needed
];

const FeaturesComponent = () => {
  return (
    <section className="bg-neutral-950 text-white body-font mt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xl font-medium text-blue-200 title-font">Amazing Features</h2>
          <p className="text-6xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Why Use Cypher?</p>
          <p className="text-xl text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            We are offering a range of cutting-edge features that set us apart
          </p>
          <p className="text-xl text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">in the world of online security and privacy.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-teal-400/80 h-96 backdrop-brightness-200 p-8 rounded-lg flex flex-col items-center text-center backdrop-blur-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={128} // Adjust based on your actual image size
                  height={128} // Adjust based on your actual image size
                  objectFit="contain"
                  className="mb-8"
                />
                <h3 className="text-xl font-medium text-gray-200 mb-3">{feature.title}</h3>
                <p className="leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
