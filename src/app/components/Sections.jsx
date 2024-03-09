import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Element, Link as ScrollLinks } from "react-scroll";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { TracingBeam } from "./Line";

function Sections() {
  const list = [
    { link: "about", name: "about" },
    { link: "experience", name: "experience" },
    { link: "projects", name: "projects" },
  ];

  return (
    <div className="relative">
      <Link
        href="mailto:m.usmannoor90@gmail.com"
        className="font-bold  text-2xl z-[250]   fixed bottom-8 lg:block hidden left-5 [writing-mode:vertical-rl] [text-orientation:upright]   "
      >
        <span className="relative uppercase text-[white] hover:text-[#5CBE2E]  ContactMeText  ">
          contact me
        </span>
      </Link>

      <div className="mx-auto min-h-screen max-w-screen-xl  py-12  md:py-20 lg:py-0">
        <TracingBeam>
          <div className="relative z-40 lg:flex lg:justify-between lg:gap-4">
            <header className=" lg:sticky lg:top-0 lg:flex max-h-[600px] lg:w-1/2 lg:flex-col lg:justify-between lg:py-20  lg:px-20 md:px-12  px-6  ">
              <div>
                <ScrollLinks
                  to="about"
                  spy={true}
                  offset={-200}
                  smooth={"easeInOutElastic"}
                  hashSpy={true}
                  duration={1500}
                  spyThrottle={500}
                  isDynamic={true}
                  className="text-4xl font-bold tracking-tight CustomHeading sm:text-5xl cursor-pointer "
                >
                  M Usman Noor
                </ScrollLinks>
                <h2 className="mt-3 text-lg font-bold tracking-tight CustomPara sm:text-xl">
                  Hi! I{"'"}m a{" "}
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "React.js/Next.js Developer",
                      1000,
                      "Node.js/Express.js Enthusiast",
                      1000,
                      "Database Maestro",
                      1000,
                    ]}
                    speed={50}
                    className="text-white type  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none"
                    repeat={Infinity}
                    cursor={10}
                  />
                </h2>
                <p className="mt-4 font-light leading-normal CustomPara">
                  I build pixel-perfect, engaging, and accessible digital
                  experiences.
                </p>
              </div>
              <ul className="   list-none lg:block hidden  mt-10 ">
                {list.map((item, index) => {
                  return (
                    <li key={index} className="  ">
                      <ScrollLinks
                        to={item.name}
                        spy={true}
                        defaultValue={"about"}
                        defaultChecked={"about"}
                        default={"about"}
                        offset={index === 0 ? -250 : 0}
                        smooth={"easeInOutElastic"}
                        hashSpy={true}
                        duration={1500}
                        spyThrottle={500}
                        isDynamic={true}
                        activeClass="before:[transition:100ms_ease-out] before:scale-y-[0.18] before:!bg-[rgba(92,190,46,1)] after:[transition:50ms_ease-out_100ms] after:transform-none !text-[rgba(92,190,46,1)]  !bg-transparent  "
                        className=" uppercase text-xl text-white cursor-pointer
                        my-2 inline-block relative z-20 no-underline px-[12px] after:content-[''] after:z-[9] before:z-[8] after:block after:absolute before:content-[''] before:block before:absolute  before:[transition:100ms_ease-out_50ms] before:origin-[0_30px] before:top-[0] before:left-[0] before:w-full before:h-full bg-[rgba(92,190,46,0.2)]  after:[transition:50ms_ease-out] after:scale-x-0 after:origin-[left_center] after:bottom-[-7px] after:-right-[12px] after:border-[8px] after:border-solid after:border-[transparent] after:[border-left-color:rgba(92,190,46,1)]  hover:before:[transition:100ms_ease-out] hover:before:scale-y-[0.18] hover:before:bg-[rgba(92,190,46,1)] hover:after:[transition:50ms_ease-out_100ms] hover:after:transform-none   active:before:[transition:100ms_ease-in] active:before:bg-[rgba(92,190,46,1)] active:after:[border-left-color:rgba(92,190,46,1)]    active:after:[transition:100ms_ease-in] hover:after:[border-left-color:rgba(92,190,46,1)] hover:bg-transparent   hover:text-[rgba(92,190,46,0.5)]     "
                      >
                        {item.name}
                      </ScrollLinks>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex gap-6 pt-10 pb-6 list-none [&>li_a]:w-[45px] [&>li_a]:h-[45px]  [&>li_a]:text-white  ">
                <li>
                  <Link href="https://github.com/usmannoor90" target="_blank">
                    <FaGithub
                      className=" [transition:0.2s] ease-linear hover:text-[#5CBE2E]   "
                      size={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ctrl_c_ctrl_v_usman/"
                    target="_blank"
                  >
                    <FaInstagram
                      className=" [transition:0.2s] ease-linear hover:text-[#5CBE2E]   "
                      size={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/USMAN35355507"
                    target="_blank"
                  >
                    <FaXTwitter
                      className=" [transition:0.2s] ease-linear hover:text-[#5CBE2E] "
                      size={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/muhammadusman1122/"
                    target="_blank"
                  >
                    <FaLinkedin
                      className=" [transition:0.2s] ease-linear hover:text-[#5CBE2E] "
                      size={30}
                    />
                  </Link>
                </li>
              </ul>
              <div className="sm:mb-10">
                <h4 className="max-w-[500px] font-normal text-[#CAC0B3] capitalize">
                  Thank You For Exploring My Portfolio! I{"'"}m Excited To
                  Connect With You. Whether You Have A{" "}
                  <button className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
                    Project
                  </button>{" "}
                  In Mind,{" "}
                  <button className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
                    A Collaboration Proposal,
                  </button>{" "}
                  Or Just Want To Say{" "}
                  <button className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
                    Hello,
                  </button>{" "}
                  I{"'"}d Love To Hear From You.
                </h4>

                <Link
                  className=" gap-1 group mt-[4rem] lg:hidden inline-flex sm:mb-0 mb-[4rem] "
                  href="mailto:m.usmannoor90@gmail.com"
                >
                  <span className="font-bold capitalize"> contact me </span>
                  <MdOutlineArrowOutward className=" group-hover:rotate-45 translate-y-1 group-hover:translate-x-2  transition-[all_0.1s] ease-linear  " />
                </Link>

                {/* <ContactModal />   */}
              </div>
            </header>
            <div className=" pt-10 lg:w-1/2 lg:pt-12  ">
              {list.map((item) => {
                return (
                  <Element
                    className=" relative  "
                    name={item.name}
                    key={item.name}
                  >
                    <div>
                      <div className="sticky lg:hidden text-[#CAC0B3] bg-[rgba(92,190,46,0.1)] shadow-xl  mb-5  top-0 text-left w-full  py-4 sm:px-10 px-2 backdrop-filter backdrop-blur-[5px] text-xl  font-bold  uppercase  z-[222] ">
                        {item.name}
                      </div>
                      <div className="md:px-12   sm:px-6 px-2  sm:py-[4rem] py-[2rem] ">
                        {item.name === "about" && <About />}
                        {item.name === "experience" && <Experience />}
                        {item.name === "projects" && <Projects />}
                      </div>
                    </div>
                  </Element>
                );
              })}
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}

export default Sections;
