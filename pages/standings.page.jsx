import React, { useEffect, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import Layout from "./Layout";

export { Page };

function Page() {
  const data = useData();

  return (
    <Layout>
      <div className="my-12 gap-12 flex w-full px-4 flex-col">
        <div className="text-2xl sm:text-3xl font-bold text-center">
          Current Standings
        </div>
        <Table data={data} />
      </div>
    </Layout>
  );
}

const Table = ({ data }) => {
  if (data === undefined) {
    return (
      <div className="w-full flex flex-col gap-3 animate-pulse">
        {Array.from({ length: 9 }).map((v, i) => (
          <div key={i} style={{ opacity: `calc(100% - ${(i + 1) * 10}%)` }}>
            <Row name={`\u200B`} />
          </div>
        ))}
      </div>
    );
  }
  if (data?.message) {
    return (
      <div className="w-full flex flex-col gap-3">
        <div className="max-w-2xl w-full rounded-lg p-5 mx-auto text-xl text-center text-red-400 bg-red-400/20">
          Something went wrong, try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-3">
      {data.map((v, i) => (
        <Row
          placement={i + 1}
          key={i}
          name={
            <div className="flex items-center gap-3">
              <span>{v.splashtag}</span>
              <div className="flex shrink-0 items-center gap-2">
                {v.weapons.map((weapon) => (
                  <img
                    key={weapon.id}
                    src={`https://raw.githubusercontent.com/Sendouc/sendou.ink/rewrite/public/static-assets/img/main-weapons-outlined/${weapon.id}.png`}
                    className="h-7 w-7 sm:h-8 sm:w-8 shrink-0"
                  />
                ))}
              </div>
            </div>
          }
          points={v.points}
        />
      ))}
    </div>
  );
};

const Row = ({ placement, name, points }) => {
  const [open, setOpen] = useState(false);
  const totalPoints = points
    ? Object.values(points).reduce((a, b) => a + b, 0)
    : null;
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen} asChild>
      <div className="flex items-center text-xl sm:text-2xl max-w-3xl mx-auto w-full">
        {placement && (
          <div
            className={`shrink-0 font-mono pr-4 sm:pr-0 sm:w-16 sm:text-center font-black text-fabl-indigo-light ${
              placement <= 1
                ? "!text-fabl-gold"
                : placement <= 3
                ? "!text-fabl-pink"
                : ""
            }`}
          >
            {placement}
          </div>
        )}
        <Collapsible.Trigger asChild>
          <button className="flex flex-col items-stretch gap-3 w-full text-xl py-3 px-4 rounded-md font-medium overflow-hidden bg-fabl-indigo-700 hover:bg-fabl-indigo-600 transition-colors">
            <div className="flex-1 gap-4 flex items-center justify-between">
              <div className="flex-1 truncate">{name}</div>
              {points && (
                <div className="font-mono shrink-0">
                  <span className="font-bold">{totalPoints}</span>{" "}
                  <span className="hidden sm:inline">
                    {open ? "total points" : "points"}
                  </span>
                </div>
              )}
            </div>
            <Collapsible.Content asChild>
              <div className="flex flex-col gap-3">
                <div className="h-0.5 rounded-full bg-fabl-indigo-500" />
                {points &&
                  Object.entries(points).map(([eventName, p]) => (
                    <EventPoints name={eventName} points={p} />
                  ))}
              </div>
            </Collapsible.Content>
          </button>
        </Collapsible.Trigger>
        {placement && <div className="sm:w-16"></div>}
      </div>
    </Collapsible.Root>
  );
};

const EventPoints = ({ name, points }) => (
  <div
    className={`flex-1 gap-4 flex items-center justify-between text-lg ${
      points === 0
        ? "text-fabl-indigo-400 line-through"
        : "text-fabl-indigo-200"
    }`}
  >
    <div className="truncate text-left">{name}</div>
    <div className="flex-1 border-t-2 border-dotted border-fabl-indigo-500/50" />
    {points !== 0 ? (
      <div className="font-mono shrink-0">
        <span className="font-bold">+{points}</span>{" "}
        <span className="hidden sm:inline"> points</span>
      </div>
    ) : (
      <div className="font-mono shrink-0">dropped out</div>
    )}
  </div>
);

const useData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://us-central1-off-the-dial-26e93.cloudfunctions.net/fabl-standings"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return data;
};
