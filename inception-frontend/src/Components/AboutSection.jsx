import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:gap-10">
    <div className="md:w-1/2">
    <div className=" w-full sm:h-[510px] h-[222px] bg-slate-200 rounded-[20px] shrink-0">
          {/* Add your image or any other content here */}
        </div>
    </div>
    <div className="md:w-1/2 md:text-left mt-6 md:mt-0">
      <h2 className="text-3xl font-bold mb-4">Welcome to Our Project Review System</h2>
      <p className="text-lg">
        Our Project Review System is designed to streamline project management and review processes. Whether you're a team lead, project manager, or stakeholder, our platform provides intuitive tools to track project progress, manage tasks, and facilitate seamless collaboration.
      </p>
      <p className="text-lg mt-4">
        With features like detailed project dashboards, real-time updates, and customizable reporting, you can ensure transparency and efficiency across all projects. Join us in enhancing project management experiences and achieving project success with ease.
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutSection;
