"use client";
import Model from "@/app/components/model/model";
import EboxData from "./components/data/eboxData";
import BpsData from "./components/data/bpsData";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { id: 0, value: 100, label: "series A" },
  { id: 1, value: 100, label: "series B" },
];

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  const textStyle = {
    textAnchor: "middle",
    dominantBaseline: "auto",
    fontSize: 20,
    fontWeight: "bold",
    fill: "white",
  };
  return (
    <text x={left + width / 2} y={top + height / 1} style={textStyle}>
      {children}
    </text>
  );
}

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 h-[850px] mb-2">
        <div className="relative">
          {/* Model */}
          <Model />

          <div className="flex">
            <div className="absolute top-0 left-0 w-[280px] h-full z-10 p-2">
              <div className=" bg-[#ffffff6a] p-2 rounded-sm">
                <label className="text-xl font-bold text-white">
                  Pie Chart
                </label>
                <div className="contents">
                  <PieChart
                    series={[
                      {
                        data,
                        innerRadius: 60,
                        outerRadius: 100,
                        paddingAngle: 0,
                        cornerRadius: 0,
                        startAngle: -90,
                        endAngle: 90,
                        cy: 100,
                      },
                    ]}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                    height={100}
                    margin={{ left: 95 }}
                  >
                    <PieCenterLabel>25</PieCenterLabel>
                  </PieChart>
                  <div className="flex justify-around mb-4 text-white font-semibold">
                    <p>test</p>
                    <p>HAHAHA</p>
                    <p>test</p>
                  </div>
                </div>
                <div className="contents">
                  <PieChart
                    series={[
                      {
                        data,
                        innerRadius: 60,
                        outerRadius: 100,
                        paddingAngle: 0,
                        cornerRadius: 0,
                        startAngle: -90,
                        endAngle: 90,
                        cy: 100,
                      },
                    ]}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                    height={100}
                    margin={{ left: 95 }}
                  >
                    <PieCenterLabel>25</PieCenterLabel>
                  </PieChart>
                  <div className="flex justify-around mb-4 text-white font-semibold">
                    <p>test</p>
                    <p>HAHAHA</p>
                    <p>test</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 px-4">
        <h2 className="text-2xl underline text-white mb-2">
          Data from Ebox API
        </h2>
        <div className="grid grid-cols-3 text-white border-2 p-4">
          <EboxData />
        </div>
      </div>
      <div className="my-4 px-4">
        <h2 className="text-2xl underline text-white mb-2">
          Data from BPS Backend
        </h2>
        <div className="grid grid-cols-3 text-white border-2 p-4">
          <BpsData />
        </div>
      </div>
    </div>
  );
}
