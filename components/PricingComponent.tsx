import React from 'react';
import Link from 'next/link';

const pricingPlans = [
  {
    title: 'Basic',
    price: 'Free',
    features: [
      '10 GB Data',
      '1 Connected Device',
      'Basic Security Features',
      'Limited Support',
    ],
  },
  {
    title: 'Premium',
    price: '$9.99/month',
    features: [
      '100 GB Data',
      '5 Connected Devices',
      'Advanced Security Features',
      'Priority Support',
    ],
  },
  {
    title: 'Pro',
    price: '$19.99/month',
    features: [
      'Unlimited Data',
      '10 Connected Devices',
      'Highest Security Features',
      '24/7 Support',
    ],
  },
  // Add more plans as needed
];

const PricingComponent = () => {
    return (
      <section className="text-white bg-gradient-to-r bg-neutral-950 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 mt-44">
            <h1 className="text-6xl font-medium title-font mb-4 text-white">Pricing Plans</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-500 text-xl">Choose the perfect plan that fits your needs.</p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center space-x-14">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="card flex flex-col items-center justify-around w-[360px] p-20 my-2.5 text-center relative cursor-pointer rounded-lg bg-blue-700 shadow-lg
                bg-gradient-to-r from-blue-900 to-blue-500"
                     style={{ 
                       boxShadow: "0 10px 15px -3px rgba(33,150,243,.4), 0 4px 6px -4px rgba(33,150,243,.4)",
                       backgroundImage: "linear-gradient(45deg, #04051dea 0%, #2b566e 100%)"
                     }}>
                  <div className="content p-5">
                    <div className="title font-extrabold uppercase text-white text-opacity-60 mt-2.5 text-xl tracking-wide">
                      {plan.title}
                    </div>
                    <div className="price text-white font-extrabold text-[50px]"
                         style={{ textShadow: "0px 0px 10px rgba(0, 0, 0, 0.42)" }}>
                      {plan.price}
                    </div>
                    <ul className="description text-white text-opacity-60 mt-2.5 text-xl">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/quote">
                   <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10%
                   via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[5px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] 
                   before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r 
                   before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[5px] 
                   before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                     style={{ textShadow: "0px 4px 18px #2c3442" }}>
                       Choose Plan
                          </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingComponent;