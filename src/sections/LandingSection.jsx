import React from 'react';
import hero from '../assets/hero.png';
import { logos } from '../utils/data';

const LandingSection = () => {
  return (
    <section>
      <div className="flex flex-col sm:pb-10 sm:flex-row justify-center items-center gap-5 ">
        <div className="mt-3 sm:mt-0">
          <div className="">
            <h3 className="text-sm text-teal font-bold">
              your e-learning partner
            </h3>
            <p className="text-[1.875rem] font-bold mt-2">
              This is <br /> the new way <br /> to learn online
            </p>
            <p className="text-sm text-gray mt-2 leading-7 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              provident? Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-teal px-5 py-3 md:py-2 md:px-3 lg:px-5 lg:py-3 font-bold text-white rounded-lg text-sm">
              Get Started
            </button>
            <button className="px-5 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover More
            </button>
          </div>
        </div>
        <div className="md:max-w-[60%]">
          <img src={hero} alt="" className="h-auto w-full object-cover" />
        </div>
      </div>
      <div className="mt-5">
        <p className="text-center text-gray text-lg md:text-xl">
          We collaborate with{' '}
          <span className="text-teal">
            100+ leading universities and companies
          </span>
        </p>
        <div>
          <ul className="flex items-center justify-center flex-wrap gap-8 mt-5">
            {logos.map((logo, index) => (
              <li key={index} className="w-28 md:w-40 lg:w-32">
                <img src={logo} alt="" className="w-full object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
