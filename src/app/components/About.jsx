import React from "react";
import "../globals.css";

function About() {
  return (
    <div className="lg:pt-16">
      <h2 className="CustomPara1 sm:text-[16px] text-[14px] font-normal   ">
        Back in 2021, I made the switch from nuts and bolts as a freshly
        graduated Mechanical Engineer to weaving digital wonders in the realm of
        web development.
      </h2>
      <h2 className="CustomPara1 sm:text-[16px] text-[14px]  mt-5">
        My inaugural year with{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          React
        </button>{" "}
        was all about creating web designs that could make pixels jealous. The
        sequel brought a new role—designing API implementations and diving into
        the magic of{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          Next.js.
        </button>{" "}
        Meanwhile, I traded my mechanical toolbox for{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          Node.js and Express.Js
        </button>{" "}
        to sculpt robust end-to-end solutions. Recently, I’ve expanded my
        expertise to include Docker, Linux, Python, and Bash scripting,
        enhancing my{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#5CBE2E] cursor-none ">
          DevOps
        </button>{" "}
        capabilities.
      </h2>
      <h2 className="CustomPara1 sm:text-[16px] text-[14px]  mt-5">
        Beyond the keyboard, I’m the{" "}
        <span className="text-white  font-semibold CustomCarpanterCursor capitalize pb-[3px]  barDown hover:text-[#5CBE2E] ">
          carpenter
        </span>{" "}
        who can code and the{" "}
        <span className=" inline-flex CustomGymCursor  barDown text-white pb-[2px]  font-semibold capitalize  hover:text-[#5CBE2E] ">
          gym enthusiast
        </span>{" "}
        who can debug. Join me as I build digital wonders and navigate the
        evolving landscape of DevOps and AWS!
      </h2>
      <h2 className="CustomPara1 sm:text-[16px] text-[14px]  mt-5">
        Ready for a laugh, a chat, or the next big project? Let’s connect and
        embark on some tech-infused hilarity together!
      </h2>
    </div>
  );
}

export default About;
