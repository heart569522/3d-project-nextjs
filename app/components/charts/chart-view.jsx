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

const generateLabels = (prefix, start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const paddedNumber = (start + index).toString().padStart(3, "0");
    return `${prefix}${paddedNumber}`;
  });
};

const fieldData1Labels = ["OUT1"];
const fieldData2Labels = ["IN1", "IN2", "IN3", "IN4"];
const fieldData3Labels = ["IN1", "IN2", "IN3", "IN4", "OUT4"];
const fieldData4Labels = ["IN1", "IN2", "IN3", "IN4"];
const fieldData5Labels = generateLabels("p", 1, 20);
const fieldData6Labels = generateLabels("s", 201, 210);

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
      <CloudOffTwoToneIcon
        className={`w-${iconSize} h-${iconSize}  text-red-500`}
      />
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
  console.log("🚀 ~ ChartView ~ data:", data);

  const [selectedOption, setSelectedOption] = useState("daily");
  const [rangeData, setRangeData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });
  console.log("🚀 ~ ChartView ~ rangeData:", rangeData);

  const [dailyChart, setDailyChart] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });
  console.log("🚀 ~ ChartView ~ dailyChart:", dailyChart);

  const [lastData, setLastData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });
  console.log("🚀 ~ ChartView ~ lastData:", lastData);

  const [meanData, setMeanData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });
  console.log("🚀 ~ ChartView ~ meanData:", meanData);

  const filterLastData = (data) => {
    const filteredData = {};

    for (const key in data) {
      if (data[key].length > 0) {
        filteredData[key] = data[key][data[key].length - 1];
      }
    }

    return filteredData;
  };

  useEffect(() => {
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

      const filteredData1 = filterDataByTime(res1, selectedOption);
      const filteredData2 = filterDataByTime(res2, selectedOption);
      const filteredData3 = filterDataByTime(res3, selectedOption);
      const filteredData4 = filterDataByTime(res4, selectedOption);
      const filteredData5 = filterDataByTime(res5, selectedOption);
      const filteredData6 = filterDataByTime(res6, selectedOption);

      setRangeData({
        data1: filteredData1,
        data2: filteredData2,
        data3: filteredData3,
        data4: filteredData4,
        data5: filteredData5,
        data6: filteredData6,
      });

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
      case "api1":
        sValues = Array.from({ length: dataLength }, (_, index) => {
          const fieldNames = ["OUT1"];
          return data?.map((entry) => entry[fieldNames[index]]);
        });
        break;

      case "api2":
        sValues = Array.from({ length: dataLength }, (_, index) =>
          data?.map((entry) => entry[`IN${String(index + 1)}`])
        );
        break;

      case "api3":
        sValues = Array.from({ length: dataLength }, (_, index) => {
          const fieldNames = ["IN1", "IN2", "IN3", "IN4", "OUT4"];
          return data?.map((entry) => entry[fieldNames[index]]);
        });
        break;

      case "api4":
        sValues = Array.from({ length: dataLength }, (_, index) => {
          const fieldNames = ["IN1", "IN2", "IN3", "IN4", "p221", "p222"];
          return data?.map((entry) => entry[fieldNames[index]]);
        });
        break;

      case "api5":
        sValues = Array.from({ length: dataLength }, (_, index) =>
          data?.map((entry) => entry[`p${String(index + 1).padStart(3, "0")}`])
        );
        break;

      case "api6":
        sValues = Array.from({ length: dataLength }, (_, index) =>
          data?.map((entry) => entry[`s${201 + index}`])
        );
        break;

      default:
        break;
    }

    const meanValues = sValues.map((values) => {
      if (Array.isArray(values)) {
        const filteredValues = values
          .filter((value) => typeof value === "number" && !isNaN(value))
          .filter((value) => value !== null);

        if (filteredValues.length === 0) {
          return null;
        }

        const sum = filteredValues.reduce((acc, value) => acc + value, 0);
        const mean = sum / filteredValues.length || 0;
        return mean.toFixed(2);
      } else {
        console.error("Values is not an array:", values);
        return null;
      }
    });

    return meanValues;
  };

  useEffect(() => {
    const meanData1 = calculateMean("api1", rangeData.data1, 1);
    const meanData2 = calculateMean("api2", rangeData.data2, 4);
    const meanData3 = calculateMean("api3", rangeData.data3, 5);
    const meanData4 = calculateMean("api4", rangeData.data4, 6);
    const meanData5 = calculateMean("api5", rangeData.data5, 20);
    const meanData6 = calculateMean("api6", rangeData.data6, 10);

    const updatedMeanData1 = meanData1.map((value, index) => ({
      label: ["OUT1"][index],
      value: value == null ? value : Number(value),
    }));

    const updatedMeanData2 = meanData2.map((value, index) => ({
      label: `IN${String(index + 1)}`,
      value: value == null ? value : Number(value),
    }));

    const updatedMeanData3 = meanData3.map((value, index) => ({
      label: ["IN1", "IN2", "IN3", "IN4", "OUT4"][index],
      value: value == null ? value : Number(value),
    }));

    const updatedMeanData4 = meanData4.map((value, index) => ({
      label: ["IN1", "IN2", "IN3", "IN4", "p221", "p222"][index],
      value: value == null ? value : Number(value),
    }));

    const updatedMeanData5 = meanData5.map((value, index) => ({
      label: `p${String(index + 1).padStart(3, "0")}`,
      value: value == null ? value : Number(value),
    }));

    const updatedMeanData6 = meanData6.map((value, index) => ({
      label: `s${201 + index}`,
      value: value == null ? value : Number(value),
    }));

    setMeanData((prevMeanData) => ({
      ...prevMeanData,
      data1: updatedMeanData1,
      data2: updatedMeanData2,
      data3: updatedMeanData3,
      data4: updatedMeanData4,
      data5: updatedMeanData5,
      data6: updatedMeanData6,
    }));
  }, [rangeData]);

  const updatedRangeData = { ...rangeData };
  const addHourField = (data) => {
    if (!data) {
      return [];
    }

    return data.map((entry, index) => ({
      ...entry,
      hour: `${String(index)}:00`,
    }));
  };

  useEffect(() => {
    updatedRangeData.data1 = addHourField(rangeData.data1);
    updatedRangeData.data2 = addHourField(rangeData.data2);
    updatedRangeData.data3 = addHourField(rangeData.data3);
    updatedRangeData.data4 = addHourField(rangeData.data4);
    updatedRangeData.data5 = addHourField(rangeData.data5);
    updatedRangeData.data6 = addHourField(rangeData.data6);

    setDailyChart((prevChart) => ({
      ...prevChart,
      data1: updatedRangeData.data1,
      data2: updatedRangeData.data2,
      data3: updatedRangeData.data3,
      data4: updatedRangeData.data4,
      data5: updatedRangeData.data5,
      data6: updatedRangeData.data6,
    }));
  }, [rangeData]);

  // const TOTAL = meanData.data6
  //   .map((item) => item.value)
  //   .reduce((a, b) => a + b, 0);

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
                  <DataNULL iconSize="12" />
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
                      <DataNULL iconSize="10" />
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
                      <DataNULL iconSize="9" />
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
                      <DataNULL iconSize="10" />
                    ) : lastData.data4[fieldLabel] === 0 ? (
                      <ToggleOffTwoToneIcon className="w-12 h-12 text-gray-400" />
                    ) : (
                      <ToggleOnTwoToneIcon className="w-12 h-12 text-amber-200" />
                    )}
                    <p className="text-white font-medium mt-1">{fieldLabel}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-evenly items-center gap-x-2 my-2">
                {meanData.data4 && meanData.data4[4] && (
                  <div className="block text-center">
                    <p className="text-white font-semibold mt-1 text-2xl">
                      {meanData.data4[4].value == null ? (
                        <DataNULL iconSize="10" />
                      ) : (
                        meanData.data4[4].value
                      )}
                    </p>
                    <p className="text-white font-medium mt-1">
                      {meanData.data4[4].label}
                    </p>
                  </div>
                )}

                {meanData.data4 && meanData.data4[5] && (
                  <div className="block text-center">
                    <p className="text-white font-medium mt-1 text-2xl">
                      {meanData.data4[5].value == null ? (
                        <DataNULL iconSize="10" />
                      ) : (
                        meanData.data4[5].value
                      )}
                    </p>
                    <p className="text-white font-medium mt-1">
                      {meanData.data4[5].label}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="chart-container-rtl top-[100px] h-[855px]">
        <div className="chart-content-rtl">
          <div className="content-ltr bg-[#00000080] flex flex-col gap-2 rounded-sm">
            <div className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer">
              <label className="text-xl font-bold text-white">API5</label>
              <div className="grid grid-cols-3 justify-between gap-1 my-2">
                {meanData?.data5?.map((item, index) => (
                  <div className="block text-center p-2 border" key={index}>
                    <p className="text-white font-semibold text-xl">
                      {item.value == null ? (
                        <DataNULL iconSize="5" />
                      ) : (
                        item.value
                      )}
                    </p>
                    <p className="text-white font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer">
              <label className="text-xl font-bold text-white">API6</label>
              <div className="grid grid-cols-2 justify-between gap-1 my-2">
                {meanData?.data6?.map((item, index) => (
                  <div className="block text-center p-2 border" key={index}>
                    <p className="text-white font-semibold text-xl">
                      {item.value == null ? (
                        <DataNULL iconSize="6" />
                      ) : (
                        item.value
                      )}
                    </p>
                    <p className="text-white font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contents">
              <BarChart
                dataset={meanData.data6}
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
                    data: meanData.data6,
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
                dataset={meanData.data6}
                width={290}
                height={180}
                series={[{ dataKey: "value" }]}
                xAxis={[{ dataKey: "label", scaleType: "point" }]}
                margin={{ top: 20 }}
              />
            </div> */}
    </ThemeProvider>
  );
}

{
  /* <div>
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
              </div> */
}
