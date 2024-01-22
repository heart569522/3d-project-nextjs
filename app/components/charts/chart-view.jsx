"use client";
import React from "react";
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
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import ToggleOffTwoToneIcon from "@mui/icons-material/ToggleOffTwoTone";
import ToggleOnTwoToneIcon from "@mui/icons-material/ToggleOnTwoTone";
import CloudOffTwoToneIcon from "@mui/icons-material/CloudOffTwoTone";

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

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 300 }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const fieldData2Labels = ["IN1", "IN2", "IN3", "IN4"];
const fieldData3Labels = ["IN1", "IN2", "IN3", "IN4", "OUT4"];
const fieldData4Labels = ["IN1", "IN2", "IN3", "IN4"];

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

export function DataNULL({ iconSize }) {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <p className="underline font-semibold text-sm">Error!</p>
          {"Can not get data or Data is NULL"}
        </React.Fragment>
      }
      placement="right"
    >
      <CloudOffTwoToneIcon className={`w-${iconSize} h-${iconSize}  text-red-500`} />
    </HtmlTooltip>
  );
}

export default function ChartView({ isLastData }) {
  const [data, setData] = useState({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
    data6: [],
  });

  const [selectedOption, setSelectedOption] = useState("daily");

  const [lastData, setLastData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });

  const filterLastData = (data) => {
    const filteredData = {};

    for (const key in data) {
      if (data[key].length > 0) {
        filteredData[key] = data[key][data[key].length - 1];
      }
    }

    return filteredData;
  };

  const [chartData5, setChartData5] = useState([{}]);
  const [chartData6, setChartData6] = useState([{}]);

  useEffect(() => {
    console.log("lastData: ", lastData);
    isLastData(
      lastData.data1,
      lastData.data2,
      lastData.data3,
      lastData.data4,
      lastData.data5,
      lastData.data6
    );
  }, [lastData]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const fetchData = async () => {
    try {
      console.log(`Fetching data...`);

      const [res1, res2, res3, res4, res5, res6] = await Promise.all([
        getAllData("api1"),
        getAllData("api2"),
        getAllData("api3"),
        getAllData("api4"),
        getAllData("api5"),
        getAllData("api6"),
      ]);

      // const filteredData1 = filterDataByTime(res1, selectedOption);
      // const filteredData2 = filterDataByTime(res2, selectedOption);
      // const filteredData3 = filterDataByTime(res3, selectedOption);
      // const filteredData4 = filterDataByTime(res4, selectedOption);
      // const filteredData5 = filterDataByTime(res5, selectedOption);
      // const filteredData6 = filterDataByTime(res6, selectedOption);

      // setData({
      //   data1: filteredData1,
      //   data2: filteredData2,
      //   data3: filteredData3,
      //   data4: filteredData4,
      //   data5: filteredData5,
      //   data6: filteredData6,
      // });
      setData({
        data1: res1,
        data2: res2,
        data3: res3,
        data4: res4,
        data5: res5,
        data6: res6,
      });

      const lastDataFiltered = filterLastData({
        data1: res1,
        data2: res2,
        data3: res3,
        data4: res4,
        data5: res5,
        data6: res6,
      });

      setLastData(lastDataFiltered);
    } catch (error) {
      console.error(error);
    }
  };

  const filterDataByTime = (data, timeRange) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Bangkok",
    });
    const dateNow = formatter.format(new Date());
    const currentDate = new Date(dateNow);
    console.log("🚀 ~ filterDataByTime ~ currentDate:", currentDate);

    switch (timeRange) {
      case "daily":
        return data.filter((item) => {
          const formattedDate = formatter.format(new Date(item.record_at));
          const recordDate = new Date(formattedDate);
          const resultRecordDate = `${recordDate.getDate()}/${
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
          data.map((entry) => entry[`p${String(index + 1).padStart(3, "0")}`])
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
        .filter((value) => value !== null);

      if (filteredValues.length === 0) {
        return null;
      }

      const sum = filteredValues.reduce((acc, value) => acc + value, 0);
      const mean = sum / filteredValues.length || 0;
      return mean.toFixed(2);
    });

    return meanValues;
  };

  useEffect(() => {
    const meanData5 = calculateMean("api5", data.data5, 20);
    const meanData6 = calculateMean("api6", data.data6, 10);
    const updatedChartData5 = meanData5.map((value, index) => ({
      label: `p${String(index + 1).padStart(3, "0")}`,
      value: value == null ? value : Number(value),
    }));
    const updatedChartData6 = meanData6.map((value, index) => ({
      label: `s${201 + index}`,
      value: value == null ? value : Number(value),
    }));

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
      <div className="chart-container-ltr top-[100px] h-full">
        <div className="chart-content-ltr">
          <div className="bg-[#00000080] flex flex-col gap-2 rounded-sm">
            <div className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer">
              <label className="text-xl font-bold text-white">API1</label>
              <div className="flex justify-center items-center gap-x-2 my-2">
                <p className="text-white font-medium">OUT1 :</p>
                {lastData?.data1?.OUT1 == null ? (
                  <DataNULL iconSize="12"/>
                ) : lastData.data1.OUT1 == 0 ? (
                  <ToggleOffTwoToneIcon className="w-14 h-14 text-gray-400" />
                ) : (
                  <ToggleOnTwoToneIcon className="w-14 h-14  text-amber-200" />
                )}
              </div>
            </div>
            <div className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer">
              <label className="text-xl font-bold text-white">API2</label>
              <div className="flex justify-around items-center gap-x-2 my-2">
                {fieldData2Labels.map((fieldLabel, index) => (
                  <div className="block text-center" key={index}>
                    {lastData?.data2?.[fieldLabel] == null ? (
                      <DataNULL iconSize="10"/>
                    ) : lastData.data2[fieldLabel] === 0 ? (
                      <ToggleOffTwoToneIcon className="w-12 h-12 text-gray-400" />
                    ) : (
                      <ToggleOnTwoToneIcon className="w-12 h-12 text-amber-200" />
                    )}
                    <p className="text-white font-medium mt-1">{fieldLabel}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer">
              <label className="text-xl font-bold text-white">API3</label>
              <div className="flex justify-around items-center gap-x-2 my-2">
                {fieldData3Labels.map((fieldLabel, index) => (
                  <div className="block text-center" key={index}>
                    {lastData?.data3?.[fieldLabel] == null ? (
                      <DataNULL iconSize="9"/>
                    ) : lastData.data3[fieldLabel] === 0 ? (
                      <ToggleOffTwoToneIcon className="w-10 h-10 text-gray-400" />
                    ) : (
                      <ToggleOnTwoToneIcon className="w-10 h-10 text-amber-200" />
                    )}
                    <p className="text-white font-medium mt-1">{fieldLabel}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer">
              <label className="text-xl font-bold text-white">API4</label>
              <div className="flex justify-around items-center gap-x-2 my-2">
                {fieldData4Labels.map((fieldLabel, index) => (
                  <div className="block text-center" key={index}>
                    {lastData?.data4?.[fieldLabel] == null ? (
                      <DataNULL iconSize="10"/>
                    ) : lastData.data4[fieldLabel] === 0 ? (
                      <ToggleOffTwoToneIcon className="w-12 h-12 text-gray-400" />
                    ) : (
                      <ToggleOnTwoToneIcon className="w-12 h-12 text-amber-200" />
                    )}
                    <p className="text-white font-medium mt-1">{fieldLabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

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
