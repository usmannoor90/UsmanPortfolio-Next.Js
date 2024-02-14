import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Element, Link as ScrollLinks } from "react-scroll";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

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
        className="font-bold ml-4 text-2xl  fixed bottom-8 lg:block hidden left-0 [writing-mode:vertical-rl] [text-orientation:upright]   "
      >
        <span className="  relative uppercase hover:text-[white]  ContactMeText  ">
          contact me
        </span>
      </Link>

      <div className="mx-auto min-h-screen max-w-screen-xl  py-12  md:py-20 lg:py-0">
        <div className="relative z-40 lg:flex lg:justify-between lg:gap-4">
          <header className=" lg:sticky lg:top-0 lg:flex max-h-[700px] lg:w-1/2 lg:flex-col lg:justify-between lg:py-20  lg:px-20 md:px-12  px-6  ">
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
                <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
                  Full-Stack Engineer
                </button>{" "}
                at CointBitSolutions
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
                      activeClass="before:[transition:100ms_ease-out] before:scale-y-[0.18] before:!bg-[rgba(255,89,90,1)] after:[transition:50ms_ease-out_100ms] after:transform-none !text-[rgba(255,89,90,1)]  !bg-transparent  "
                      className=" uppercase text-xl text-white cursor-pointer
                        my-2 inline-block relative z-20 no-underline px-[12px] after:content-[''] after:z-[9] before:z-[8] after:block after:absolute before:content-[''] before:block before:absolute  before:[transition:100ms_ease-out_50ms] before:origin-[0_30px] before:top-[0] before:left-[0] before:w-full before:h-full bg-[rgba(255,89,90,0.6)]  after:[transition:50ms_ease-out] after:scale-x-0 after:origin-[left_center] after:bottom-[-7px] after:-right-[12px] after:border-[8px] after:border-solid after:border-[transparent] after:[border-left-color:rgba(255,89,90,1)]  hover:before:[transition:100ms_ease-out] hover:before:scale-y-[0.18] hover:before:bg-[rgba(255,89,90,0.7)] hover:after:[transition:50ms_ease-out_100ms] hover:after:transform-none   active:before:[transition:100ms_ease-in] active:before:bg-[rgba(255,89,90,1)] active:after:[border-left-color:rgba(255,89,90,1)]    active:after:[transition:100ms_ease-in] hover:after:[border-left-color:rgba(255,89,90,0.7)] hover:bg-transparent   hover:text-[rgba(255,89,90,0.5)]     "
                    >
                      {item.name}
                    </ScrollLinks>
                  </li>
                );
              })}
            </ul>
            <ul className="footerLinks flex gap-6 pt-10 pb-6 list-none [&>li_a]:w-[45px] [&>li_a]:h-[45px] [&>li_a]:bg-[#CAC0B3] [&>li_a]:text-center [&>li_a]:leading-[80px] [&>li_a]:text-[35px]  [&>li_a]:my-[0] [&>li_a]:rounded-[50%] [&>li_a]:relative [&>li_a]:overflow-hidden  [&>li_a]:flex [&>li_a]:items-center [&>li_a]:justify-center ">
              <li>
                <Link href="https://github.com/usmannoor90" target="_blank">
                  <FaGithub
                    className="icon  relative text-[#262626] [transition:0.5s]  z-10 "
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
                    className="icon  relative text-[#262626] [transition:0.5s]  z-10 "
                    size={30}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/USMAN35355507" target="_blank">
                  <FaXTwitter
                    className="icon  relative text-[#262626] [transition:0.5s] z-10"
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
                    className="icon  relative text-[#262626] [transition:0.5s] z-10"
                    size={30}
                  />
                </Link>
              </li>
            </ul>
            <div className="mb-10">
              <h4 className="max-w-[500px] font-normal text-[#CAC0B3] capitalize">
                Thank You For Exploring My Portfolio! I{"'"}m Excited To Connect
                With You. Whether You Have A{" "}
                <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
                  Project
                </button>{" "}
                In Mind,{" "}
                <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
                  A Collaboration Proposal,
                </button>{" "}
                Or Just Want To Say{" "}
                <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
                  Hello,
                </button>{" "}
                I{"'"}d Love To Hear From You.
              </h4>
              <Link
                href="mailto:m.usmannoor90@gmail.com"
                className="font-bold mt-6 uppercase py-4 px-7   lg:hidden inline-block rounded-md bg-[#FF595A] text-[white]  "
              >
                {" "}
                contact me{" "}
              </Link>
              {/* <ContactModal />   */}
            </div>
          </header>
          <div className=" pt-10 lg:w-1/2 lg:py-12  ">
            {list.map((item) => {
              return (
                <Element
                  className=" relative  "
                  name={item.name}
                  key={item.name}
                >
                  <div>
                    <div className="sticky lg:hidden text-[#CAC0B3] bg-[rgba(0,18,51,0.5)] shadow-xl  mb-5  top-0 text-left w-full  py-4 sm:px-10 px-2 backdrop-filter backdrop-blur-[5px] text-xl  font-bold  uppercase  z-[222] ">
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
      </div>
    </div>
  );
}

export default Sections;
