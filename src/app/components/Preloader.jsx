import React from "react";
import { motion } from "framer-motion";
import EncryptButton from "./ChangeTextButton";

import MaskContainer from "../utils/MaskContainer";

function Preloader({ OnClose }) {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center  overflow-hidden">
        <MaskContainer
          revealText={
            <div>
              <p className="max-w-4xl mx-auto text-white text-center  text-4xl font-bold ">
                HOVER ME{" "}
              </p>
              <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold invisible">
                Usman Noor Web Development Usman Noor Web Development Usman Noor
                Web DevelopmentUsman Noor Web Development Usman Noor Web
                Development.
              </p>
            </div>
          }
          className="h-[40rem] border rounded-md"
        >
          <div className="sm:text-6xl text-4xl font-bold text-center z-40 mb-16 pb-10  ">
            <h2 className="sm:mb-3  mb-1 ">M Usman Noor</h2>
            <h2> Web Developer</h2>{" "}
          </div>
          <div className="  flex mx-auto justify-center " onClick={OnClose}>
            <EncryptButton />{" "}
          </div>
        </MaskContainer>
      </div>
    </>
  );
}

export default Preloader;
