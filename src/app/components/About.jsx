import React from "react";
import "../globals.css";

function About() {
  return (
    <div className="lg:pt-16">
      <h2 className="CustomPara1 sm:text-[16px] text-[14px] font-normal   ">
        Seasoned Full Stack Software Engineer with 3+ years of experience
        specializing in React.js, Next.js, Node.js, PostgreSQL, MongoDB, and AWS
        serverless architectures. Proven expertise in transforming creative
        concepts into practical, high-performance solutions. Excels in front-end
        development using React.js/Next.js and backend engineering with
        Node.js/Express.js.
      </h2>
      <h2 className="CustomPara1 sm:text-[16px] text-[14px] font-normal   ">
        Proficient in AWS, Docker, Linux, Python, and Bash scripting, with a
        strong focus on enhancing DevOps capabilities. Committed to staying
        informed about industry advancements and continuously honing skills to
        consistently deliver exceptional results.
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
