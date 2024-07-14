import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full md:px-[80px] px-[20px] md:pt-[67px] pt-[30px] ">
      <div className="w-full flex items-center justify-center md:gap-[50px] gap-[18px] xl:flex-nowrap flex-wrap-reverse">
        <div className="flex flex-col md:gap-[31px] gap-[12px]">
          <div className="flex justify-start items-center">
            <h1 className="md:text-[60px] text-[22px] md:leading-[83px] md:max-w-[573px] font-bold max-w-full text-start">
              Welcome to the Inception, A Project Review System
            </h1>
          </div>
          <div className="flex justify-start items-start">
            <div className="flex flex-col gap-[35px]">
              <p className="md:text-[24px] text-[12px] md:opacity-100 opacity-50 max-w-[523px]">
                Manage your projects efficiently and track reviews seamlessly.
              </p>
              <div className="flex md:gap-[30px] gap-[14px] items-center text-[12px] md:text-[16px]">
                <Link to="/projects">
                  <a
                    href="/projects"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold"
                  >
                    View Projects
                  </a>
                </Link>
                <Link to="/know-more" className="flex justify-center items-center gap-[15.5px] md:px-[18px] px-[14px] py-[8px] md:py-[10px] rounded-full border-blue-600 border-[1px] text-blue-600">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div 
            style={{backgroundImage: "url('https://res.cloudinary.com/dx0dgujbj/image/upload/v1707888470/CerviCare/Homepage/5_ukg3xj.png')", backgroundSize: "cover", backgroundPosition: "center"}}
             className="md:w-[657px] w-full sm:h-[510px] h-[222px] bg-slate-200 rounded-[20px] shrink-0">
          {/* Add your image or any other content here */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
