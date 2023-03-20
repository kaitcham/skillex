import React from 'react';
import about from '../assets/about.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        <div className="border-2 border-teal rounded-lg p-4">
          <img src={about} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h3 className=" text-2xl font-bold my-4 md:text-3xl md:leading-10">
            We provide the <br />{' '}
            <span className="text-teal"> best online courses </span>
          </h3>
          <p className="text-base text-gray leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            magnam velit provident. Accusamus ullam cupiditate, eveniet beatae
            odit possimus nihil necessitatibus! Placeat.
          </p>
          <button className="border border-solid rounded-md px-4 py-3 mt-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
