import React from "react";
import "../globals.css";

function About() {
  return (
    <div className="lg:pt-16">
      <h2 className="CustomPara1 sm:text-[16px] text-[14px] font-normal   ">
        Back In 2021, I made the switch from nuts and bolts as a freshly
        graduated Mechanical Engineer to weaving digital wonders in the realm of
        web development.
      </h2>
      <h2 className="CustomPara1 sm:text-[16px] text-[14px]  mt-5">
        My inaugural year with{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
          React
        </button>{" "}
        was all about creating web designs that could make pixels jealous. The
        sequel brought a new role—designing API implementations and diving into
        the magic of{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
          Next.js.
        </button>{" "}
        Meanwhile, I traded my mechanical toolbox for{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
          Node.js and Express
        </button>{" "}
        to sculpt robust end-to-end solutions. Oh, and did I mention? My coding
        adventures now unfold in the intriguing domain of{" "}
        <button className="text-white  font-semibold capitalize barDown hover:text-[#ff595a] cursor-none ">
          cryptocurrency.
        </button>{" "}
      </h2>
      <h2 className="CustomPara1 sm:text-[16px] text-[14px]  mt-5">
        Beyond the keyboard, I’m the{" "}
        <span className="text-white  font-semibold CustomCarpanterCursor capitalize pb-[3px]  barDown hover:text-[#ff595a] ">
          carpenter
        </span>{" "}
        who can code and the{" "}
        <span className=" inline-flex CustomGymCursor  barDown text-white pb-[2px]  font-semibold capitalize  hover:text-[#ff595a] ">
          gym enthusiast
        </span>{" "}
        who can debug. Join me as I navigate the crypto currents and build
        digital wonders!
      </h2>
      <h2 className="CustomPara1 sm:text-[16px] text-[14px]  mt-5">
        Ready for a laugh, a chat, or the next big project? Let’s connect and
        embark on some tech-infused hilarity together!
      </h2>
    </div>
  );
}

export default About;
