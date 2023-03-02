import React, { useRef } from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import { addDays, format, isPast } from "date-fns";
import data from "../data.js";

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
  console.log(Object.entries(data));

  return (
    <Layout>
      <motion.div
        className="p-8 w-full flex flex-col items-center justify-center bg-fixed min-h-[calc(100vh-8rem)]"
        style={{
          backgroundPosition: "center",
          backgroundSize: "auto 75%",
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
        <DownArrow />
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
      <div className="text-center font-medium p-6 sm:p-12 flex flex-col items-center justify-evenly min-h-[calc(100vh-8rem)] text-xl sm:text-2xl gap-6 sm:gap-12">
        <div>
          <h2 className="font-bold text-3xl sm:text-4xl text-center" id="play">
            Ready to play?
          </h2>
          <p className="text-fabl-indigo-100">
            Check the status of upcoming qualifiers, and see whether you can
            sign up, don't be late!
          </p>
        </div>
        <div className="flex flex-col gap-2 max-w-lg w-full">
          <QualifierStatus />
        </div>
        <div className="flex flex-col gap-2 max-w-lg w-full">
          <h3 className="text-xl font-semibold text-fabl-indigo-200 uppercase tracking-wider">
            All Qualifiers
          </h3>
          <div className="w-full flex flex-col">
            {Object.entries(data).map(([key, value]) => (
              <Qualifer key={key} name={key} data={value} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const DownArrow = () => {
  const ref = useRef();

  return (
    <motion.button
      className="w-12 h-12 text-white absolute inset-0 mx-auto my-auto hover:cursor-pointer"
      onClick={() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }}
      whileHover={{
        scale: 1.15,
      }}
      transition={{
        type: "spring",
        duration: 0.8,
      }}
    >
      <motion.svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        animate={{ y: [4, -4] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 2,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </motion.svg>
    </motion.button>
  );
};

const QualifierStatus = () => {
  const current = Object.entries(data).reduce((p, c) => {
    const s = getStatus(p[1]);
    if (s !== "past") {
      return p;
    }
    return c;
  });
  const status = getStatus(current[1]);

  return (
    <>
      <h3 className="text-xl font-semibold text-fabl-indigo-200 uppercase tracking-wider">
        {status === "now" ? "Current" : "Upcoming"} Qualifier
      </h3>
      <a
        href={status === "now" ? "https://otd.ink/signup" : undefined}
        className={`w-full p-4 rounded-lg flex flex-col group gap-3 ${
          status === "now" &&
          "bg-green-400/20 hover:bg-green-400/25 text-green-400"
        } ${status === "future" && "bg-blue-400/20 text-blue-400"} ${
          status === "past" && "bg-fabl-indigo-700"
        }`}
      >
        <div className="flex items-center justify-between gap-3 text-xl font-semibold flex-wrap">
          {status !== "past" && (
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p>{current[0]}</p>
            </div>
          )}
          {status === "now" ? (
            <div className="flex items-center gap-3">
              <p>Registration is open!</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <>
              {status === "future" && <p>Registration opens soon</p>}
              {status === "past" && (
                <p className="text-center w-full">
                  All events have concluded, thanks for playing!
                </p>
              )}
            </>
          )}
        </div>
      </a>
    </>
  );
};

const Qualifer = ({ name, data }) => {
  const status = getStatus(data);

  return (
    <div
      className={`rounded-md text-xl px-3 py-2 flex flex-1 w-full items-center justify-between ${
        status === "now" && "font-semibold text-green-400"
      } ${status === "past" && "text-fabl-indigo-400"} ${
        status === "future" && "text-fabl-indigo-100"
      }`}
    >
      <div className="flex items-center gap-3">
        {status === "past" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-fabl-indigo-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        {status === "now" && (
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
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        )}
        {status === "future" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-fabl-indigo-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <span>{name}</span>
      </div>
      <div>{format(data.date, "MMM do")}</div>
    </div>
  );
};

const getStatus = (data) => {
  if (isPast(addDays(data.date, 1))) {
    return "past";
  } else if (data.open) {
    return "now";
  } else {
    return "future";
  }
};
