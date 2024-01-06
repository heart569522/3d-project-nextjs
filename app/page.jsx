"use client";
import Model from "@/app/components/model/model";
import EboxData from "./components/data/eboxData";
import BpsData from "./components/data/bpsData";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";

const data = [
  { id: 0, value: 100, label: "series A" },
  { id: 1, value: 100, label: "series B" },
];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const dataLine = [90, 20, 50, 40, 80, 10];
const xData = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];

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

          <div className="absolute top-0 left-0 w-[300px] h-[400px] z-10 p-2 overflow-x-hidden overflow-y-auto">
            <div className="bg-[#ffffff6a] p-2 rounded-sm">
              <label className="text-xl font-bold text-white">Pie Chart</label>
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
                  colors={["#ff3030", "#6e30ff"]}
                >
                  <PieCenterLabel>50</PieCenterLabel>
                </PieChart>
                <div className="flex justify-around mb-4 text-white font-semibold">
                  <p>test</p>
                  <p>HELLO</p>
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
                  colors={["green", "yellow"]}
                >
                  <PieCenterLabel>50</PieCenterLabel>
                </PieChart>
                <div className="flex justify-around mb-2 text-white font-semibold">
                  <p>test</p>
                  <p>HELLO</p>
                  <p>test</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[405px] left-0 w-[300px] h-[440px] z-10 p-2 overflow-x-hidden overflow-y-auto">
            <div className="bg-[#ffffff6a] p-2 rounded-sm">
              <label className="text-xl font-bold text-white">Line Chart</label>
              <div className="contents">
                <LineChart
                  width={290}
                  height={200}
                  series={[
                    { data: pData, label: "pv" },
                    { data: uData, label: "uv" },
                  ]}
                  xAxis={[{ scaleType: "point", data: xLabels }]}
                />
              </div>
              <div className="contents">
                <LineChart
                  width={290}
                  height={160}
                  series={[{ data: dataLine }]}
                  xAxis={[{ data: xData, scaleType: "point" }]}
                  margin={{ top: 10 }}
                />
              </div>
              <div className="contents">
                <LineChart
                  width={290}
                  height={160}
                  series={[{ data: dataLine }]}
                  xAxis={[{ data: xData, scaleType: "point" }]}
                  margin={{ top: 10 }}
                />
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
