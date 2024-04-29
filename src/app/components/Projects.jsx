import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import NHImage from "../../../public/newhorizon.png";
import sponsa2 from "../../../public/Sponsa2.png";
import sponsa from "../../../public/sponsa.png";
import traderaai from "../../../public/traderaAi.png";
import maincore from "../../../public/maincoreproject.png";
import Portfolio from "../../../public/MUsmanPortfolio.png";
import ProjectsModel from "./ProjectsModel";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaShield,
} from "react-icons/fa6";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql, SiTailwindcss, SiTypescript, SiNext } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";

function Projects() {
  return (
    <>
      <div className="lg:mx-0 sm:mx-4 group/list mt-10   [&>div]:mb-4 ">
        <div className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100 w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0)] lg:!shadow-none ![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px] ">
          <div className="flex gap-5 sm:flex-nowrap  flex-wrap  ">
            <Image
              src={maincore}
              alt=""
              className="w-[100px] h-[80px]   rounded-md border-[1px] border-solid border-[#cac0b33d] group-hover:border-[#cac0b3]  transition-[all_0.1s] ease-linear "
            />
            <div>
              <div
                className="flex gap-1 items-center mb-2  cursor-pointer "
                onClick={() =>
                  window.open("http://maincore.beweb3.com/", "_blank")
                }
              >
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  Maincore Blockchain
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" text-[#CAC0B3]  sm:text-[15px] text-[13px] ">
                Maincore Merging Revolutionary ZK-Layer2 Blockchain, Advanced AI
                Platform to Generate AI&apos;s and Token&apos;s Creation, and
                Innovative AI Powered EdTech Solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              css <FaCss3Alt />
            </span>
            <span className="inline-flex gap-[2px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              tailwind <SiTailwindcss />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              TypeScript <SiTypescript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              ReactJs <FaReact />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              NextJs <TbBrandNextjs />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              NextAuth <FaShield />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              MS SQL <DiMsqlServer />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              restful api <AiFillApi />
            </span>
          </div>
        </div>
        <div className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100 w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0)] lg:!shadow-none ![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px] ">
          <div className="flex gap-5 sm:flex-nowrap  flex-wrap  ">
            <Image
              src={traderaai}
              alt=""
              className="w-[100px] h-[80px]   rounded-md border-[1px] border-solid border-[#cac0b33d] group-hover:border-[#cac0b3]  transition-[all_0.1s] ease-linear "
            />
            <div>
              <div
                className="flex gap-1 items-center mb-2  cursor-pointer "
                onClick={() =>
                  window.open("https://traderaai.beweb3.com/", "_blank")
                }
              >
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  TraderGPT Clone
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" text-[#CAC0B3]  sm:text-[15px] text-[13px] ">
                Tradera.ai, innovative trading platform powered by artificial
                intelligence. Utilizing advanced algorithms and machine
                learning, it provides real-time insights and predictions by
                analyzing market data.
              </p>
            </div>
          </div>
          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              css <FaCss3Alt />
            </span>
            <span className="inline-flex gap-[2px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              tailwind <SiTailwindcss />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Javascript <IoLogoJavascript />
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
              restful api <AiFillApi />
            </span>
          </div>
        </div>
        <div className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100 w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0)] lg:!shadow-none ![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px]  ">
          <div className="flex gap-5 sm:flex-nowrap  flex-wrap  ">
            <Image
              src={NHImage}
              alt=""
              className="w-[100px] h-[80px]  rounded-md border-[1px] border-solid border-[#cac0b33d] group-hover:border-[#cac0b3]   transition-[all_0.1s] ease-linear "
            />
            <div>
              <div
                className="flex gap-1 items-center mb-2  cursor-pointer  "
                onClick={() =>
                  window.open("https://newhorizonhm.com", "_blank")
                }
              >
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  NewHorizon
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" text-[#CAC0B3]  sm:text-[15px] text-[13px] ">
                At New Horizon Healthcare Management, It provide unique,
                state-of-the-art solutions. These innovations place your
                practice at the forefront, ensuring optimal efficiency for your
                business and, most importantly, optimal patient outcomes.
              </p>
            </div>
          </div>
          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              css <FaCss3Alt />
            </span>
            <span className="inline-flex gap-[2px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Bootstrap <FaBootstrap />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Javascript <IoLogoJavascript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              ReactJs <FaReact />
            </span>

            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              .net framework
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              mysql <SiMysql />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              restful api <AiFillApi />
            </span>
          </div>
        </div>

        <div className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100 w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0)] lg:!shadow-none ![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px]  ">
          <div className="flex gap-5 sm:flex-nowrap  flex-wrap  ">
            <Image
              src={sponsa2}
              alt=""
              className="w-[100px] h-[80px]   rounded-md border-[1px] border-solid border-[#cac0b33d] group-hover:border-[#cac0b3]   transition-[all_0.1s] ease-linear "
            />
            <div>
              <div
                className="flex gap-1 items-center mb-2  cursor-pointer "
                onClick={() =>
                  window.open("https://velocityv1.beweb3.com/", "_blank")
                }
              >
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  Ko-Fi Clone
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" text-[#CAC0B3]  sm:text-[15px] text-[13px] ">
                A replica of Ko-Fi with design and functionality. Explore the
                only platform where you can crowdfund multiple projects
                simultaneously. Discover a crowdfunding experience designed with
                creators in mind.
              </p>
            </div>
          </div>
          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              css <FaCss3Alt />
            </span>
            <span className="inline-flex gap-[2px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              tailwind <SiTailwindcss />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Javascript <IoLogoJavascript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              .net framework
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              ReactJs <FaReact />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              mysql <SiMysql />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px]  ">
              restful api <AiFillApi />
            </span>
          </div>
        </div>
        <div className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100 w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0)] lg:!shadow-none ![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px]  ">
          <div className="flex gap-5 sm:flex-nowrap  flex-wrap  ">
            <Image
              src={sponsa}
              alt=""
              className="w-[100px] h-[80px]   rounded-md border-[1px] border-solid border-[#cac0b33d] group-hover:border-[#cac0b3]   transition-[all_0.1s] ease-linear "
            />
            <div>
              <div
                className="flex gap-1 items-center mb-2   cursor-pointer  "
                onClick={() =>
                  window.open("https://velocity.beweb3.com/", "_blank")
                }
              >
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  Sponsa
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" text-[#CAC0B3]  sm:text-[15px] text-[13px] ">
                A replica of Ko-Fi with design and functionality. Explore the
                only platform where you can crowdfund multiple projects
                simultaneously. Discover a crowdfunding experience designed with
                creators in mind.
              </p>
            </div>
          </div>
          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              css <FaCss3Alt />
            </span>
            <span className="inline-flex gap-[2px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Bootstrap <FaBootstrap />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Javascript <IoLogoJavascript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              ReactJs <FaReact />
            </span>
          </div>
        </div>
        <div className="  rounded-[6px] lg:group-hover/list:opacity-50 hover:!opacity-100 w-full border-[1px] border-transparent  hover:border-[1px] hover:border-[rgba(0,0,0,.2)] hover:bg-[rgba(0,0,0,0.1)]  hover:![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] hover:backdrop-filter hover:backdrop-blur-[5px] transition-[all_0.1s] ease-linear sm:px-6 sm:py-6 p-2  group lg:bg-transparent bg-[rgba(0,0,0,0)] lg:!shadow-none ![box-shadow:0_0px_10px_0_rgba(92,190,46,0.2)] lg:backdrop-filter-none   backdrop-filter backdrop-blur-[5px]  ">
          <div className="flex gap-5 sm:flex-nowrap  flex-wrap  ">
            <Image
              src={Portfolio}
              alt=""
              className="w-[100px] h-[80px]   rounded-md border-[1px] border-solid border-[#cac0b33d] group-hover:border-[#cac0b3]   transition-[all_0.1s] ease-linear "
            />
            <div>
              <div
                className="flex gap-1 items-center mb-2 cursor-pointer  "
                onClick={() =>
                  window.open("https://musmannoor.vercel.app", "_blank")
                }
              >
                <h2 className="lg:text-white font-bold text-[#5CBE2E] group-hover:text-[#5CBE2E] sm:text-xl text-[14px] whitespace-nowrap  transition-[all_0.1s] ease-linear ">
                  M Usman Portfolio v1
                </h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
              </div>
              <p className=" text-[#CAC0B3]  sm:text-[15px] text-[13px] ">
                After two years of dedicated learning and project creation, I
                present Version 1 of my portfolio. Explore my curated projects
                showcasing continuous growth and innovation. Find the
                open-source project on my GitHub - feel free to explore, clone,
                or integrate it into your work.
              </p>
            </div>
          </div>
          <div className="flex gap-1 flex-wrap items-center mt-3">
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              html <FaHtml5 />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              css <FaCss3Alt />
            </span>
            <span className="inline-flex gap-[2px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              tailwind <SiTailwindcss />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              Javascript <IoLogoJavascript />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              ReactJs <FaReact />
            </span>
            <span className=" inline-flex gap-[1px] items-center text-xs uppercase font-[500] text-[#5CBE2E]  bg-[#5CBE2E1f] px-3 py-[6px] rounded-[18px] ">
              NextJs <TbBrandNextjs />
            </span>
          </div>
        </div>
      </div>

      <div className=" mb-16 mt-[8rem]">
        <ProjectsModel />
      </div>

      <h4 className=" max-w-[500px] font-normal  text-[#CAC0B3] capitalize ">
        Loosely designed in{" "}
        <span className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          Figma
        </span>{" "}
        and coded in{" "}
        <span className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          Visual Studio Code{" "}
        </span>
        by yours truly. Built with{" "}
        <span className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          Next.js
        </span>{" "}
        and{" "}
        <span className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          Tailwind CSS
        </span>
        , deployed with Vercel. All text is set in the{" "}
        <span className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          Inter
        </span>{" "}
        typeface.
      </h4>
    </>
  );
}

export default Projects;
