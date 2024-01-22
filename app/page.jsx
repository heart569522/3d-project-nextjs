"use client";
import Model from "@/app/components/model/model";
import EboxData from "./components/data/eboxData";
import BpsData from "./components/data/bpsData";
import ChartView from "./components/charts/chart-view";
import { useState } from "react";

export default function Home() {
  const [lastData, setLastData] = useState({
    lastData1: [{}],
    lastData2: [{}],
    lastData3: [{}],
    lastData4: [{}],
    lastData5: [{}],
    lastData6: [{}],
  });
  console.log("🚀 ~ Home ~ lastData:", lastData)

  const updateChartData = (
    newLastData1,
    newLastData2,
    newLastData3,
    newLastData4,
    newLastData5,
    newLastData6
  ) => {
    setLastData({
      lastData1: newLastData1,
      lastData2: newLastData2,
      lastData3: newLastData3,
      lastData4: newLastData4,
      lastData5: newLastData5,
      lastData6: newLastData6,
    });
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 h-screen">
        <div className="relative">
          <Model lastData={lastData} />
          <ChartView isLastData={updateChartData} />
        </div>
      </div>
      {/* <div className="my-4 px-4">
        <h2 className="text-2xl underline text-white mb-2">
          Data from Ebox API
        </h2>
        <div className="grid grid-cols-3 text-white border-2 p-4">
          <EboxData />
        </div>
      </div> */}
      {/* <div className="my-4 px-4">
        <h2 className="text-2xl underline text-white mb-2">
          Data from BPS Backend
        </h2>
        <div className="grid grid-cols-3 text-white border-2 p-4">
          <BpsData />
        </div>
      </div> */}
    </div>
  );
}
