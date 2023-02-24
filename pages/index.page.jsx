import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

export { Page };

function Page() {
  const motionProps = (delay) => ({
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
      type: "spring",
      delay,
    },
  });
  return (
    <Layout>
      <div
        className="p-8 w-full flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]"
        style={{
          backgroundSize: "auto 75%",
          backgroundPosition: "center",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='40' viewBox='0 0 50 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232e225c' fill-opacity='0.33'%3E%3Cpath d='M40 10L36.67 0h-2.11l3.33 10H20l-2.28 6.84L12.11 0H10l6.67 20H10l-2.28 6.84L2.11 10 5.44 0h-2.1L0 10l6.67 20-3.34 10h2.11l2.28-6.84L10 40h20l2.28-6.84L34.56 40h2.1l-3.33-10H40l2.28-6.84L47.89 40H50l-6.67-20L50 0h-2.1l-5.62 16.84L40 10zm1.23 10l-2.28-6.84L34 28h4.56l2.67-8zm-10.67 8l-2-6h-9.12l2 6h9.12zm-12.84-4.84L12.77 38h15.79l2.67-8H20l-2.28-6.84zM18.77 20H30l2.28 6.84L37.23 12H21.44l-2.67 8zm-7.33 2H16l-4.95 14.84L8.77 30l2.67-8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <motion.img
          {...motionProps()}
          src="/FABL_IconLogo.svg"
          alt="FABL"
          className="max-h-40 shrink-0 aspect-square"
        />
        <motion.div
          {...motionProps(0.5)}
          className="text-4xl sm:text-6xl mt-4 mb-2 font-bold flex-wrap text-center justify-center flex items-center gap-2 sm:gap-4"
        >
          <span>Welcome to</span>
          <img src="/FABL_TextLogo.svg" alt="FABL" className="h-7 sm:h-11" />
        </motion.div>
        <motion.div
          {...motionProps(0.6)}
          className="text-2xl sm:text-3xl text-center mb-16"
        >
          The first ever{" "}
          <i className="font-semibold text-fabl-pink">free agent major</i>.
        </motion.div>
        <div className="flex items-center gap-6 sm:gap-8 justify-center">
          <motion.img
            {...motionProps(1.1)}
            src="/otd.svg"
            className="rounded-full h-20 sm:h-24 w-20 sm:w-24"
            alt="OTD"
          />
          <motion.svg
            {...motionProps(1.15)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-6 sm:w-9 h-6 sm:h-9 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </motion.svg>
          <motion.img
            {...motionProps(1.2)}
            src="/mit.webp"
            className="rounded-full h-20 sm:h-24 w-20 sm:w-24"
            alt="MIT"
          />
        </div>
      </div>
      <div className="relative h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 absolute inset-0 -translate-y-2"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="none"
          viewBox="0 0 900 82.5"
          version="1.1"
        >
          <path
            d="M0 55.5L900 82.5L900 13.5L0 0L0 55.5Z"
            id="Shape"
            fill="#E20084"
            stroke="none"
          />
          <path
            d="M0 73.5L900 39.5L900 0L0 13.5L0 73.5Z"
            id="Shape"
            fill="#FF298F"
            stroke="none"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 text-white absolute inset-0 mx-auto my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="p-12 w-full flex flex-col gap-12 items-center justify-evenly min-h-[calc(100vh-8rem)]">
        <div
          {...motionProps()}
          className="font-bold text-3xl sm:text-4xl text-center"
        >
          How it Works
        </div>
        <div className="flex items-stretch flex-wrap gap-12 w-full justify-evenly">
          <div
            {...motionProps(0.5)}
            className="flex-1 max-w-xs min-w-[12rem] flex flex-col items-center gap-3"
          >
            <div className="w-full h-48 rounded-sm bg-fabl-indigo-700" />
            <div className="text-center text-xl">
              Fabl is a league sort of tournament where you have to do multiple
              events
            </div>
          </div>
          <div
            {...motionProps(0.6)}
            className="flex-1 max-w-xs min-w-[12rem] flex flex-col items-center gap-3"
          >
            <div className="w-full h-48 rounded-sm bg-fabl-indigo-700" />
            <div className="text-center text-xl">
              Fabl is a league sort of tournament where you have to do multiple
              events
            </div>
          </div>
          <div
            {...motionProps(0.7)}
            className="flex-1 max-w-xs min-w-[12rem] flex flex-col items-center gap-3"
          >
            <div className="w-full h-48 rounded-sm bg-fabl-indigo-700" />
            <div className="text-center text-xl">
              Fabl is a league sort of tournament where you have to do multiple
              events
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 h-16" />
      <div className="p-8 w-full flex flex-col items-center justify-evenly min-h-[calc(100vh-8rem)]">
        <div {...motionProps()}>
          <div className="font-bold text-3xl sm:text-4xl text-center" id="play">
            Ready to play?
          </div>
          <div className="font-medium text-xl text-center">
            Here are the current ongoing qualifiers and whether u can sigunp
          </div>
        </div>
        <div
          {...motionProps(0.5)}
          className="w-full max-w-2xl max-auto p-4 text-2xl flex flex-col gap-4"
        >
          <div className="border-2 border-fabl-indigo-400 rounded-md p-4 flex items-center justify-between">
            <div>Qualifer 1</div>
            <div>concluded</div>
          </div>
          <div className="border-2 border-fabl-indigo-400 rounded-md p-4 flex items-center justify-between">
            <div>Qualifer 1</div>
            <div className="ml-auto pr-2 font-bold text-green-400">
              signup now!
            </div>
            <div>open</div>
          </div>
          <div className="border-2 border-fabl-indigo-400 rounded-md p-4 flex items-center justify-between">
            <div>Qualifer 1</div>
            <div>future</div>
          </div>
        </div>
      </div>
      <div className="bg-fabl-indigo-900/50 h-16">
        <div className="px-4 max-w-5xl mx-auto flex h-full text-fabl-indigo-300/60 items-center justify-between">
          <div>
            A collaboration between{" "}
            <a
              className="text-fabl-indigo-300 hover:underline"
              href="https://otd.ink"
            >
              Off the Dial
            </a>{" "}
            and{" "}
            <a
              className="text-fabl-indigo-300 hover:underline"
              href="https://discord.gg/p69RF6jRcg"
            >
              Mulloway Institute of Turfing
            </a>
            , website built by cyrulean.
          </div>
          <a className="hover:underline" href="https://otd.ink/legal">
            Terms of Service
          </a>
        </div>
      </div>
    </Layout>
  );
}
