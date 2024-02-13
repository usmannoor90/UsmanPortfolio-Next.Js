"use client";

import "./style.css";
import "./style1.css";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import CursorPointer from "./components/CursorPointer";
import Preloader from "./components/Preloader";
import Sections from "./components/Sections";
import { useRouter } from "next/navigation";
import CustomHead from "./components/CustomHead";

const getRandomMessage = () => {
  const messages = [
    "I'm feeling lonely :-( ",
    "Don't you love me anymore? :-(",
    "Please come back! :-( ",
    "Hey, where did you go?",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

export default function Home() {
  const router = useRouter();
  const [LoadingScreen, setLoadingScreen] = useState(true);

  const OnClose = () => {
    setLoadingScreen(false);
  };

  useEffect(() => {
    if (!LoadingScreen) {
      router.push("#about", { scroll: true });
    }
  }, [LoadingScreen, router]);

  const [pageTitle, setPageTitle] = useState("M Usman Noor Portfolio");

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPageTitle(
        document.hidden ? getRandomMessage() : "M Usman Noor Portfolio"
      );
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <CustomHead title={pageTitle} />
      <AnimatePresence mode="wait">
        {LoadingScreen ? (
          <Preloader OnClose={OnClose} open={LoadingScreen} />
        ) : (
          <>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 1, transition: 2 }}
            >
              <CursorPointer />
              <Sections />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
