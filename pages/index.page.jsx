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
      damping: 20,
      mass: 1.5,
      delay,
    },
  });
  return (
    <Layout>
      <motion.div
        className="p-8 w-full flex flex-col items-center justify-center bg-fixed min-h-[calc(100vh-8rem)]"
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
          {...motionProps(0.55)}
          className="text-2xl sm:text-3xl text-center mb-16 text-fabl-indigo-50"
        >
          The first ever{" "}
          <i className="font-semibold text-fabl-pink">free agent major</i>.
        </motion.div>
        <div className="flex items-center gap-6 sm:gap-8 justify-center">
          <motion.img
            {...motionProps(1.05)}
            src="/otd.svg"
            className="rounded-full h-20 sm:h-24 w-20 sm:w-24"
            alt="OTD"
          />
          <motion.svg
            {...motionProps(1.1)}
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
            {...motionProps(1.15)}
            src="/mit.webp"
            className="rounded-full h-20 sm:h-24 w-20 sm:w-24"
            alt="MIT"
          />
        </div>
      </motion.div>
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
            fill="currentColor"
            className="text-fabl-pink-dark"
            stroke="none"
          />
          <path
            d="M0 73.5L900 39.5L900 0L0 13.5L0 73.5Z"
            id="Shape"
            fill="currentColor"
            className="text-fabl-pink"
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
      <div className="text-center font-medium p-6 sm:p-12 flex flex-col items-center justify-evenly min-h-[calc(100vh-8rem)] text-xl sm:text-2xl gap-6 sm:gap-12">
        <div>
          <div className="font-bold text-3xl sm:text-4xl">How it Works</div>
          <div className="text-fabl-indigo-100">
            Welcome to FABL, the Free Agent Battle League.
          </div>
        </div>
        <div className="flex items-stretch flex-wrap gap-6 sm:gap-12 w-full justify-evenly text-fabl-indigo-100">
          <div className="flex-1 max-w-xs min-w-[12rem] flex flex-col items-center gap-6">
            <img className="w-32 sm:w-40" src="/game.png" />
            <p>
              Battle it out over six qualifiers to be one of the top 32 players
              who make the cut for the two-day FABL Finals.
            </p>
          </div>
          <div className="flex-1 max-w-xs min-w-[12rem] flex flex-col items-center gap-6">
            <img className="w-32 sm:w-40" src="/coin.png" />
            <p>
              In each qualifier, you'll earn the same points you make in the
              Swiss stage, plus some bonus points if you progress into the top
              cut.
            </p>
          </div>
          <div className="flex-1 max-w-xs min-w-[12rem] flex flex-col items-center gap-6">
            <img className="w-32 sm:w-40" src="/win.png" />
            <p>
              Your three highest-scoring qualifiers will place you on the
              leaderboard, but playing in more may yield you better results!
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 absolute inset-0 -translate-y-2 rotate-180"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="none"
          viewBox="0 0 900 82.5"
          version="1.1"
        >
          <path
            d="M0 55.5L900 82.5L900 13.5L0 0L0 55.5Z"
            id="Shape"
            fill="currentColor"
            className="text-fabl-indigo-700"
            stroke="none"
          />
          <path
            d="M0 73.5L900 39.5L900 0L0 13.5L0 73.5Z"
            id="Shape"
            fill="currentColor"
            className="text-fabl-indigo-600"
            stroke="none"
          />
        </svg>
      </div>
      <div className="text-center font-medium p-6 sm:p-12 flex flex-col items-center justify-evenly min-h-[calc(100vh-8rem)] text-xl sm:text-2xl">
        <div>
          <div className="font-bold text-3xl sm:text-4xl text-center">
            Ready to play?
          </div>
          <p className="text-fabl-indigo-100 ">
            Check the status of upcoming qualifiers, and see whether you can
            sign up, don't be late!
          </p>
        </div>
        <div className="w-full mx-auto max-w-lg p-4 bg-green-400/20 rounded-lg flex flex-col gap-3">
          <div className="flex items-center gap-3 text-lg uppercase font-semibold tracking-wider text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p>Qualifer 2</p>
          </div>
          <div className="flex items-center gap-3">Open for registration!</div>
        </div>
        <div className="w-full mx-auto max-w-lg flex flex-col gap-4">
          <Qualifer name="Qualifer 1" status="concluded" />
          <Qualifer name="Qualifer 2" status="concluded" />
          <Qualifer name="Qualifer 3" status="open" />
          <Qualifer name="Qualifer 4" status="future" />
          <Qualifer name="Qualifer 5" status="future" />
          <Qualifer name="Qualifer 6" status="future" />
        </div>
      </div>
    </Layout>
  );
}

const Qualifer = ({ name, status }) => (
  <a
    className={`rounded-md flex flex-1 w-full items-center justify-between ${
      status === "open" &&
      "font-semibold text-green-400 hover:bg-fabl-indigo-700"
    } ${status === "future" && "text-fabl-indigo-200"}`}
  >
    <div>{name}</div>
    <div>{status}</div>
  </a>
);
