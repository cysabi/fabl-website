import React from "react";
import Layout from "./Layout";

export { Page };

function Page() {
  const data = false;

  return (
    <Layout>
      <div className="mx-auto my-12 gap-12 flex w-full max-w-3xl px-4 flex-col">
        <div className="text-3xl font-bold text-center">Current Standings</div>
        {!data ? (
          <div className="w-full flex flex-col gap-3">
            <Row
              username={
                <div className="text-center w-full">
                  No qualifiers have completed yet, so no standings are
                  avaliable. Check back soon!
                </div>
              }
            />
            {Array.from({ length: 9 }).map((v, i) => (
              <div style={{ opacity: `calc(100% - ${(i + 1) * 10}%)` }}>
                <Row username={`\u200B`} />
              </div>
            ))}
          </div>
        ) : (
          <Table />
        )}
      </div>
    </Layout>
  );
}

const Table = () => (
  <div className="w-full flex flex-col gap-3">
    {Array.from({ length: 20 }).map((v, i) => (
      <Row placement={i + 1} username="Maria Anders" points={8274 - i * 435} />
    ))}
  </div>
);

const Row = ({ placement, username, points }) => (
  <div className="flex items-center text-2xl">
    <div
      className={`w-20 shrink-0 text-center font-black text-fabl-indigo-light ${
        placement <= 1
          ? "!text-fabl-gold"
          : placement <= 3
          ? "!text-fabl-pink"
          : ""
      }`}
    >
      {placement}
    </div>
    <div
      className={`flex-1 text-xl rounded-md font-medium py-3 px-4 flex items-center justify-between ${
        placement % 2 === 0 ? "bg-fabl-indigo-700/50" : "bg-fabl-indigo-700"
      }`}
    >
      <div className="flex-1">{username}</div>
      {points && (
        <div className="font-mono shrink-0">
          <span className="font-bold">{points}</span> points
        </div>
      )}
    </div>
    <div className="w-20"></div>
  </div>
);
