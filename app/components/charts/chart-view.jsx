"use client";
import { useState, useEffect } from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { getAllData } from "../../lib/bpsDataActions";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  addDays,
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfYear,
} from "date-fns";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    mode: "dark",
  },
});

const data1 = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
];

const data2 = [
  { label: "Label 1", value: 65 },
  { label: "Label 2", value: 30 },
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

const testData = [
  { id: 0, value: 50, label: "test 1" },
  { id: 1, value: 20, label: "test 2" },
  { id: 2, value: 60, label: "test 3" },
];

export default function ChartView() {
  const [selectedOption, setSelectedOption] = useState("daily");

  const [chartData5, setChartData5] = useState([{}]);
  const [chartData6, setChartData6] = useState([{}]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [data, setData] = useState({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
    data6: [],
  });
  console.log("🚀 ~ ChartView ~ data:", data)

  const fetchData = async () => {
    try {
      console.log(`Fetching ${selectedOption} data...`);

      const [res1, res2, res3, res4, res5, res6] = await Promise.all([
        getAllData("api1"),
        getAllData("api2"),
        getAllData("api3"),
        getAllData("api4"),
        getAllData("api5"),
        getAllData("api6"),
      ]);

      const filteredData1 = filterDataByTime(res1, selectedOption);
      const filteredData2 = filterDataByTime(res2, selectedOption);
      const filteredData3 = filterDataByTime(res3, selectedOption);
      const filteredData4 = filterDataByTime(res4, selectedOption);
      const filteredData5 = filterDataByTime(res5, selectedOption);
      const filteredData6 = filterDataByTime(res6, selectedOption);

      setData({
        data1: filteredData1,
        data2: filteredData2,
        data3: filteredData3,
        data4: filteredData4,
        data5: filteredData5,
        data6: filteredData6,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const filterDataByTime = (data, timeRange) => {
    const currentDate = new Date();

    switch (timeRange) {
      case "daily":
        return data.filter((item) => {
          const recordDate = new Date(item.record_at);
          // console.log("🚀 ~ returndata.filter ~ recordDate:", recordDate);
          const resultRecordDate = `${recordDate.getDate() + 1}/${
            recordDate.getMonth() + 1
          }/${recordDate.getFullYear()}`;
          const resultCurrentDate = `${currentDate.getDate()}/${
            currentDate.getMonth() + 1
          }/${currentDate.getFullYear()}`;
          return resultRecordDate === resultCurrentDate;
        });

      case "weekly":
        const lastWeekDate = addDays(startOfWeek(currentDate), -7);
        return data.filter((item) => new Date(item.record_at) >= lastWeekDate);

      case "monthly":
        const startOfMonthDate = startOfMonth(currentDate);
        return data.filter(
          (item) => new Date(item.record_at) >= startOfMonthDate
        );

      case "yearly":
        const startOfYearDate = startOfYear(currentDate);
        return data.filter(
          (item) => new Date(item.record_at) >= startOfYearDate
        );

      case "all":
        return data;

      default:
        return data;
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 100000);

    return () => clearInterval(interval);
  }, [selectedOption]);

  const calculateMean = (type, data, dataLength) => {
    let sValues;

    switch (type) {
      case "api5":
        sValues = Array.from({ length: dataLength }, (_, index) =>
          data.map((entry) => entry[`p${String(index + 1).padStart(3, '0')}`])
        );
        break;

      case "api6":
        sValues = Array.from({ length: dataLength }, (_, index) =>
          data.map((entry) => entry[`s${201 + index}`])
        );
        break;

      default:
        // Handle a default case if necessary
        break;
    }

    const meanValues = sValues.map((values) => {
      const filteredValues = values
        .filter((value) => typeof value === "number" && !isNaN(value))
        .filter((value) => value !== null); // Filter out null values

      if (filteredValues.length === 0) {
        return "0.00"; // or any default value if there are no valid values
      }

      const sum = filteredValues.reduce((acc, value) => acc + value, 0);
      const mean = sum / filteredValues.length || 0;
      return mean.toFixed(2);
    });

    return meanValues;
  };

  useEffect(() => {
    // Recalculate chartData6 when data changes
    const meanData5 = calculateMean("api5", data.data5, 20);
    const meanData6 = calculateMean("api6", data.data6, 10);
    const updatedChartData5 = meanData5.map((value, index) => ({
      label: `p${String(index + 1).padStart(3, '0')}`,
      value: Number(value),
    }));
    const updatedChartData6 = meanData6.map((value, index) => ({
      label: `s${201 + index}`,
      value: Number(value),
    }));

    // Update the chart data
    setChartData5(updatedChartData5);
    setChartData6(updatedChartData6);
  }, [data]);

  const TOTAL = chartData6.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(2)}%`;
  };

  return (
    <ThemeProvider theme={theme}>
      {/* header */}
      <div className="header-container top-0 h-[100px]">
        <div className="bg-[#00000080] p-2 rounded-sm">
          <div className="flex justify-center items-center">
            <h1 className="text-center py-6 text-white font-semibold text-2xl">
              BPS
            </h1>
          </div>
        </div>
      </div>

      {/* left side */}
      {/* <div className="chart-container-ltr top-[100px] h-[450px]">
        <div className="chart-content-ltr">
          <div className="bg-[#00000080] p-2 rounded-sm">
            <label className="text-xl font-bold text-white">Pie Chart</label>
            <div className="contents">
              <PieChart
                series={[
                  {
                    data: data1,
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
                    data: data2,
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
                    data: data1,
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
      <div className="chart-container-ltr top-[540px] h-[520px]">
        <div className="chart-content-ltr">
          <div className="bg-[#00000080] p-2 rounded-sm">
            <label className="text-xl font-bold text-white">Line Chart</label>
            <div className="contents">
              <LineChart
                // sx={{}}
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
      </div> */}

      {/* right side */}
      <div className="chart-container-rtl top-[100px] h-[900px]">
        <div className="chart-content-rtl">
          <div className="content-ltr bg-[#00000080] p-2 rounded-sm">
            <div className="flex justify-between items-center">
              <label className="text-xl font-bold text-white">Test Chart</label>
              <div>
                <select
                  id="countries"
                  className="bg-[#00000050] border border-translate text-white text-sm rounded-sm block p-2.5"
                  name="dayType"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option className="bg-gray-800" value="daily" selected>
                    รายวัน
                  </option>
                  <option className="bg-gray-800" value="weekly">
                    รายสัปดาห์
                  </option>
                  <option className="bg-gray-800" value="monthly">
                    รายเดือน
                  </option>
                  <option className="bg-gray-800" value="yearly">
                    รายปี
                  </option>
                  <option className="bg-gray-800" value="all">
                    ทั้งหมด
                  </option>
                </select>
              </div>
            </div>

            <div className="contents">
              <BarChart
                dataset={chartData5}
                xAxis={[
                  {
                    label: "API Length",
                  },
                ]}
                yAxis={[{ scaleType: "band", dataKey: "label" }]}
                series={[
                  {
                    dataKey: "value",
                    label: "label",
                  },
                ]}
                layout="horizontal"
                width={300}
                height={320}
              />
            </div>
            <div className="contents">
              <PieChart
                series={[
                  {
                    data: chartData5,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontSize: 16,
                  },
                }}
                width={350}
                height={280}
                slotProps={{
                  legend: { hidden: true },
                }}
                margin={{ left: 15 }}
              />
            </div>
            <div className="contents">
              <LineChart
                dataset={chartData5}
                width={290}
                height={180}
                series={[{ dataKey: "value" }]}
                xAxis={[{ dataKey: "label", scaleType: "point" }]}
                margin={{ top: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="chart-container-rtl top-[450px] h-[320px]">
        <div className="chart-content-rtl">
          <div className="content-ltr bg-[#00000080] p-2 rounded-sm">
            <label className="text-xl font-bold text-white">Pie Chart</label>
            <div className="contents">
              <PieChart
                series={[
                  {
                    data: testData,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontSize: 16,
                  },
                }}
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
      <div className="chart-container-rtl top-[760px] h-[230px]">
        <div className="chart-content-rtl">
          <div className="content-ltr bg-[#00000080] p-2 rounded-sm">
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
      </div> */}
    </ThemeProvider>
  );
}
