import Link from "next/link";
import React from "react";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiTwotoneApi } from "react-icons/ai";

function Experience() {
  return (
    <>
      <div className="lg:mx-0 sm:mx-4 group/list mt-10   [&>div]:mb-4 ">
        <div
          className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100 w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0)] lg:!shadow-none ![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px]"
          key={2}
        >
          <h3 className="  text-[14px]  text-[#cac0b3c0]">2022-Present</h3>
          <div className="flex gap-1 items-center justify-start my-2">
            <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
              Full-Stack Engineer
            </h2>
            <h2 className=" sm:text-[14px] text-[12px] whitespace-nowrap  text-[#cac0b3c0]  ">
              ( CointBitSolutions )
            </h2>
            <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
          </div>
          <p className="  text-[#CAC0B3]  sm:text-[15px] text-[13px] ">
            Successfully developed and deployed several web applications
            showcasing a deep understanding of user experience and modern design
            principles. Implemented Redux for state management, enhancing
            application responsiveness and user engagement. Proficiently
            integrated RESTful APIs to enable seamless data exchange between
            front-end and back-end systems.
          </p>

          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              css <FaCss3Alt />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Javascript <IoLogoJavascript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              typescript <SiTypescript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              ReactJs <FaReact />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              NextJs <TbBrandNextjs />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              Node.Js/Express.Js <IoLogoJavascript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              mysql <SiMysql />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              postgresql <BiLogoPostgresql />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              restful api
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              Web Sockets <AiTwotoneApi />
            </span>
          </div>
        </div>
        {/* <div
          className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100    w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:backdrop-saturate-150 hover:[box-shadow:0_8px_32px_0_rgba(0,0,0,0.3)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0.1)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px] "
          key={1}
        >
          <h3 className="  text-[14px]  text-[#cac0b3c0]">2021-2022</h3>
          <div className="flex gap-3 items-center my-2">
            <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear">
              Front-End Engineer
            </h2>
            <h2 className=" sm:text-[14px] text-[12px] whitespace-nowrap  text-[#cac0b3c0]  ">
              ( CointBitSolutions )
            </h2>
            <MdOutlineArrowOutward className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-[all_0.1s] ease-linear  " />
          </div>
          <p className="  text-[#CAC0B3]  sm:text-[15px] text-[13px]  ">
            Build, style, and ship high-quality websites, design digital
            experiences for a diverse array of projects for clients including
            Harvard Business School, Everytown for Gun Safety, Pratt Institute,
            Koala Health, Vanderbilt University, The 19th News, and more.
            Provide leadership within engineering department through close
            collaboration, knowledge shares, and spearheading the development of
            internal tools.
          </p>
          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#ff5959]  bg-[#ff59591f] px-3 py-[6px] rounded-[18px]  ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#ff5959]  bg-[#ff59591f] px-3 py-[6px] rounded-[18px]  ">
              css <FaCss3Alt />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#ff5959]  bg-[#ff59591f] px-3 py-[6px] rounded-[18px]  ">
              Javascript <IoLogoJavascript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#ff5959]  bg-[#ff59591f] px-3 py-[6px] rounded-[18px]  ">
              ReactJs <FaReact />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#ff5959]  bg-[#ff59591f] px-3 py-[6px] rounded-[18px]  ">
              NextJs <TbBrandNextjs />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#ff5959]  bg-[#ff59591f] px-3 py-[6px] rounded-[18px]  ">
              restful api <BiLogoPostgresql />
            </span>
          </div>
        </div> */}
      </div>

      <Link
        className="flex gap-1 group mt-[4rem] sm:mb-0 mb-[4rem] "
        href={"/pdf/MUsmanResume.pdf"}
        download
        target="_blank"
        rel="noreferrer"
      >
        <span className="font-bold capitalize">View Full Résumé</span>
        <MdOutlineArrowOutward className=" group-hover:rotate-45 translate-y-1 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
      </Link>
    </>
  );
}

export default Experience;
