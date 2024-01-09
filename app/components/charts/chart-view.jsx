"use client";
import { useState, useEffect } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  GetAPI1,
  GetAPI2,
  GetAPI3,
  GetAPI4,
  GetAPI5,
  GetAPI6,
} from "../../lib/bpsDataActions";

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

const chartSetting = {
  xAxis: [
    {
      label: "API Length",
    },
  ],
  width: 300,
  height: 300,
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Jan",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Fev",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Mar",
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Apr",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "May",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: "June",
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: "July",
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: "Aug",
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: "Sept",
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: "Oct",
  },
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

export default function ChartView() {
  const [chartData, setChartData] = useState({
    data1: 0,
    data2: 0,
    data3: 0,
    data4: 0,
    data5: 0,
    data6: 0,
  });

  const fetchData = async () => {
    try {
      const [res1, res2, res3, res4, res5, res6] = await Promise.all([
        GetAPI1(),
        GetAPI2(),
        GetAPI3(),
        GetAPI4(),
        GetAPI5(),
        GetAPI6(),
      ]);
      setChartData({
        data1: res1.length,
        data2: res2.length,
        data3: res3.length,
        data4: res4.length,
        data5: res5.length,
        data6: res6.length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 20000);

    return () => clearInterval(interval);
  }, []);

  const testData = [
    { id: 0, value: chartData.data1, label: "API 1" },
    { id: 1, value: chartData.data2, label: "API 2" },
    { id: 2, value: chartData.data3, label: "API 3" },
    { id: 3, value: chartData.data4, label: "API 4" },
    { id: 4, value: chartData.data5, label: "API 5" },
    { id: 5, value: chartData.data6, label: "API 6" },
  ];

  return (
    <div>
      {/* left side */}
      <div className="chart-container-ltr top-0 h-[400px]">
        <div className="chart-content-ltr">
          <div className="bg-[#ffffff70] p-2 rounded-sm">
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
      </div>
      <div className="chart-container-ltr top-[390px] h-[460px]">
        <div className="chart-content-ltr">
          <div className="bg-[#ffffff70] p-2 rounded-sm">
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

      {/* right side */}
      <div className="chart-container-rtl top-0 h-[360px]">
        <div className="chart-content-rtl">
          <div className="content-ltr bg-[#ffffff70] p-2 rounded-sm">
            <label className="text-xl font-bold text-white">Bar Chart</label>
            <div className="contents">
              <BarChart
                dataset={testData}
                yAxis={[{ scaleType: "band", dataKey: "label" }]}
                series={[
                  {
                    dataKey: "value",
                    label: "label",
                  }
                ]}
                layout="horizontal"
                {...chartSetting}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="chart-container-rtl top-[350px] h-[320px]">
        <div className="chart-content-rtl">
          <div className="content-ltr bg-[#ffffff70] p-2 rounded-sm">
            <label className="text-xl font-bold text-white">Pie Chart</label>
            <div className="contents">
              <PieChart
                series={[
                  {
                    data: testData,
                  },
                ]}
                width={350}
                height={260}
                slotProps={{
                  legend: { hidden: true },
                }}
                margin={{ left: 15 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="chart-container-rtl top-[660px] h-[190px]">
        <div className="chart-content-rtl">
          <div className="content-ltr bg-[#ffffff70] p-2 rounded-sm">
            <label className="text-xl font-bold text-white">Line Chart</label>
            <div className="contents">
              <LineChart
                dataset={testData}
                width={290}
                height={160}
                series={[{ dataKey: "value" }]}
                xAxis={[{ dataKey: "label", scaleType: "point" }]}
                margin={{ top: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
