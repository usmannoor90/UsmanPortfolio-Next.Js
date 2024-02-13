import React from "react";
import { motion } from "framer-motion";
import EncryptButton from "./ChangeTextButton";

function Preloader({ OnClose, open }) {
  return (
    <motion.div
      initial={{ width: "100%" }}
      whileInView="show"
      viewport={{ once: true }} //here
      transition={{ duration: 0.1, bounce: true }}
      animate={{
        width: "100%",
      }}
      exit={{ width: "0%" }}
      className=" w-screen h-screen flex items-start flex-col justify-center relative overflow-hidden grainyBg "
      key={"preloader"}
    >
      <div className=" w-screen flex flex-col items-center  px-4  absolute z-40 left-[50%] top-[50%] text-4xl text-white translate-x-[-50%] translate-y-[-50%]   ">
        <motion.div
          onClick={OnClose}
          initial={{ opacity: 0 }}
          viewport={{ once: true }} //here
          transition={{ duration: 0.5 }}
          animate={{
            opacity: [0, 0, 0, 1],
            scale: [0, 0, 0, 1],
          }}
        >
          <div className="sm:text-6xl text-4xl font-bold text-center z-40 mb-16 pb-16  ">
            <h2 className="sm:mb-3  mb-1 ">M Usman Noor</h2>
            <h2> Web Developer</h2>
          </div>
          <div className="  flex mx-auto justify-center ">
            <EncryptButton />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Preloader;