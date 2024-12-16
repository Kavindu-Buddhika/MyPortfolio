import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { resumeLink } from "../constants";
import { CgFileDocument } from "react-icons/cg";
import { MdCall } from "react-icons/md";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 sm:!flex-row`}
    >
      <div className={` ${layout.sectionInfo} items-center sm:items-start`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
          {/* Add telephone details separately */}
          <div className="flex items-center text-white text-[25px] ml-1">
            <MdCall /> {/* Import and use the phone icon */}
            <span className="ml-3 text-[14px]">+94 70 451 2641</span>{" "}
            {/* Telephone number */}
          </div>
        </div>

        <div className="flex items-center">
          {/* styles is a prop */}
          <a
            href={resumeLink}
            target="_blank"
            className="mt-8 mr-2 px-4 rounded-md py-2 inline-flex items-center justify-center text-[14px] font-poppins font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
          >
            <CgFileDocument className="mr-2 text-[18px]" />
            Resume
          </a>
        </div>
      </div>

      <div className="flex justify-center md:ml-auto mt-10 md:mt-0">
        <img
          src={profilePic}
          alt="Kavindu Buddhika"
          className="w-[150px] h-[150px] border-2 object-cover border-teal-200 relative z-[5] rounded-full"
        />
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
      <p>Made with 💙 by Kavindu Buddhika</p>
    </div>
  </footer>
);

export default Footer;
