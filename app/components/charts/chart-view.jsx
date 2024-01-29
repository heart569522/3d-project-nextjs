"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { getAllData } from "../../lib/bpsDataActions";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import CloudOffTwoToneIcon from "@mui/icons-material/CloudOffTwoTone";
import ModalChartDetail from "../modal";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import {
  filterDataByTime,
  calculateMean,
  convertToDateTimeText,
} from "@/app/lib/service";

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
  const [isHideChart, setIsHideChart] = useState(false);
  const [dataDateTime, setDataDateTime] = useState("");

  const [data, setData] = useState({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
    data6: [],
  });
  // console.log("🚀 ~ ChartView ~ data:", data);

  const [selectedOption, setSelectedOption] = useState("daily");
  const [rangeData, setRangeData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });

  const [dailyChart, setDailyChart] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });

  const [minMax, setMinMax] = useState({
    type1: { min: 235, max: 500 },
    type2: { min: 0, max: 35 },
  });

  const [lastData, setLastData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });

  const [meanData, setMeanData] = useState({
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [chartType, setChartType] = useState("");
  const [chartData, setChartData] = useState();
  const [chartDataLabel, setChartDataLabel] = useState("");

  const handleShowHidePanel = () => {
    setIsHideChart((prevIsHideChart) => !prevIsHideChart);
  };

  const openChartModal = (chartType, itemLabel) => {
    // console.log("open modal...");

    switch (chartType) {
      case "api1":
        setTitleModal("Data 1 Chart");
        setOpenModal(true);
        setChartType(chartType);
        setChartData(data.data1);
        break;

      case "api2":
        setTitleModal("Data 2 Chart");
        setOpenModal(true);
        setChartType(chartType);
        setChartData(data.data2);
        break;

      case "api3":
        setTitleModal("Data 3 Chart");
        setOpenModal(true);
        setChartType(chartType);
        setChartData(data.data3);
        break;

      case "api4_in":
        setTitleModal("Data 4 (IN) Chart");
        setOpenModal(true);
        setChartType(chartType);

        const inData4 = data.data4.map((row) => ({
          IN1: row.IN1,
          IN2: row.IN2,
          IN3: row.IN3,
          IN4: row.IN4,
          datetime: row.datetime,
          id: row.id,
          record_at: row.record_at,
        }));
        setChartData(inData4);
        break;

      case "api4":
        setTitleModal(`Data 4 (${itemLabel}) Chart`);
        setOpenModal(true);
        setChartType(chartType);

        const api4Data = data.data4.map((row) => ({
          [itemLabel]: row[itemLabel],
          datetime: row.datetime,
          id: row.id,
          record_at: row.record_at,
        }));
        setChartData(api4Data);
        setChartDataLabel(itemLabel);
        break;

      case "api5":
        setTitleModal(`Data 5 (${itemLabel}) Chart`);
        setOpenModal(true);
        setChartType(chartType);

        const api5Data = data.data5.map((row) => ({
          [itemLabel]: row[itemLabel],
          datetime: row.datetime,
          id: row.id,
          record_at: row.record_at,
        }));
        setChartData(api5Data);
        setChartDataLabel(itemLabel);
        break;

      case "api6":
        setTitleModal(`Data 6 (${itemLabel}) Chart`);
        setOpenModal(true);
        setChartType(chartType);

        const api6Data = data.data6.map((row) => ({
          [itemLabel]: row[itemLabel],
          datetime: row.datetime,
          id: row.id,
          record_at: row.record_at,
        }));
        setChartData(api6Data);
        setChartDataLabel(itemLabel);
        break;

      default:
        break;
    }
  };

  const closeChartModal = () => {
    setSelectedOption("daily");
    setOpenModal(false);
  };

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

  const fetchData = async () => {
    try {
      // console.log(`Fetching data...`);

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

      const thaiDateTime = new Date().toISOString("en-US", {
        timeZone: "Asia/Bangkok",
      });
      setDataDateTime(convertToDateTimeText(thaiDateTime));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 120000);

    return () => clearInterval(interval);
  }, [selectedOption]);

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

  const getTextColorClass = (item) => {
    const moreThanMaxValueType2 = ["p221", "p222"].some(
      (label) => item.label === label && item.value > minMax.type2.max
    );

    const lessThanMinValueType2 = ["p221", "p222"].some(
      (label) => item.label === label && item.value < minMax.type2.min
    );

    return moreThanMaxValueType2
      ? "text-red-500"
      : lessThanMinValueType2
      ? "text-amber-500"
      : "text-white";
  };

  return (
    <ThemeProvider theme={theme}>
      {/* header */}
      <div className="header-container top-0 h-[100px]">
        <div className="bg-[#00000080] p-2 rounded-sm">
          <div className="grid grid-cols-3 px-2 items-center">
            <div>
              <p className="text-white italic text-sm">
                ข้อมูลล่าสุดเมื่อ : {dataDateTime ? dataDateTime : "-"}
              </p>
            </div>

            <div>
              <h1 className="text-center py-6 text-white font-semibold text-2xl">
                BPS
              </h1>
            </div>

            <div className="text-right">
              <Tooltip title="Show/Hide Panel" placement="left">
                <IconButton
                  className="bg-white hover:bg-[#d8d8d8] transition-colors"
                  onClick={handleShowHidePanel}
                >
                  <CalendarViewMonthIcon
                    className={` ${
                      isHideChart ? "text-red-500" : "text-gray-800"
                    } rotate-90 w-7 h-7`}
                  />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {!isHideChart && (
        <React.Fragment>
          <div
            className="chart-container-ltr top-[100px]"
            style={{ height: "calc(100% - 100px)" }}
          >
            <div className="chart-content-ltr">
              <div className="bg-[#00000080] flex flex-col gap-2 rounded-sm">
                <div
                  onClick={() => openChartModal("api1")}
                  className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer"
                >
                  <label className="text-xl font-bold text-white">API1</label>
                  <div className="flex justify-center items-center gap-x-2 my-2">
                    <p className="text-white font-medium">OUT1 :</p>
                    {lastData?.data1?.OUT1 == null ? (
                      <DataNULL iconSize="12" />
                    ) : lastData.data1.OUT1 == 0 ? (
                      <CircleTwoToneIcon className="w-14 h-14 text-gray-500" />
                    ) : (
                      <CircleTwoToneIcon className="w-14 h-14  text-green-500" />
                    )}
                  </div>
                </div>
                <div
                  onClick={() => openChartModal("api2")}
                  className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer"
                >
                  <label className="text-xl font-bold text-white">API2</label>
                  <div className="flex justify-around items-center gap-x-2 my-2">
                    {fieldData2Labels.map((fieldLabel, index) => (
                      <div className="block text-center" key={index}>
                        {lastData?.data2?.[fieldLabel] == null ? (
                          <DataNULL iconSize="10" />
                        ) : lastData.data2[fieldLabel] === 0 ? (
                          <CircleTwoToneIcon className="w-12 h-12 text-gray-500" />
                        ) : (
                          <CircleTwoToneIcon className="w-12 h-12 text-green-500" />
                        )}
                        <p className="text-white font-medium mt-1">
                          {fieldLabel}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  onClick={() => openChartModal("api3")}
                  className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer"
                >
                  <label className="text-xl font-bold text-white">API3</label>
                  <div className="flex justify-around items-center gap-x-2 my-2">
                    {fieldData3Labels.map((fieldLabel, index) => (
                      <div className="block text-center" key={index}>
                        {lastData?.data3?.[fieldLabel] == null ? (
                          <DataNULL iconSize="9" />
                        ) : lastData.data3[fieldLabel] === 0 ? (
                          <CircleTwoToneIcon className="w-10 h-10 text-gray-500" />
                        ) : (
                          <CircleTwoToneIcon className="w-10 h-10 text-green-500" />
                        )}
                        <p className="text-white font-medium mt-1">
                          {fieldLabel}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  onClick={() => openChartModal("api4_in")}
                  className="block py-2 px-3 transition-colors hover:bg-[#00000040] hover:cursor-pointer"
                >
                  <label className="text-xl font-bold text-white">
                    API4 (IN)
                  </label>
                  <div className="flex justify-around items-center gap-x-2 my-2">
                    {fieldData4Labels.map((fieldLabel, index) => (
                      <div className="block text-center" key={index}>
                        {lastData?.data4?.[fieldLabel] == null ? (
                          <DataNULL iconSize="10" />
                        ) : lastData.data4[fieldLabel] === 0 ? (
                          <CircleTwoToneIcon className="w-12 h-12 text-gray-500" />
                        ) : (
                          <CircleTwoToneIcon className="w-12 h-12 text-green-500" />
                        )}
                        <p className="text-white font-medium mt-1">
                          {fieldLabel}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="block py-2 px-3">
                  <label className="text-xl font-bold text-white">
                    API4 (p)
                  </label>
                  <div className="grid grid-cols-2 justify-between gap-1 my-2">
                    {meanData.data4 && meanData.data4[4] && (
                      <div
                        onClick={() =>
                          openChartModal("api4", meanData.data4[4].label)
                        }
                        className={`block text-center p-2 border transition-colors hover:bg-[#ffffff30] hover:cursor-pointer`}
                      >
                        <p
                          className={`font-semibold mt-1 text-2xl ${getTextColorClass(
                            meanData.data4[4]
                          )}`}
                        >
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
                      <div
                        onClick={() =>
                          openChartModal("api4", meanData.data4[5].label)
                        }
                        className={`block text-center p-2 border transition-colors hover:bg-[#ffffff30] hover:cursor-pointer`}
                      >
                        <p
                          className={`font-semibold mt-1 text-2xl ${getTextColorClass(
                            meanData.data4[5]
                          )}`}
                        >
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

          <div
            className="chart-container-rtl top-[100px]"
            style={{ height: "calc(100% - 100px)" }}
          >
            <div className="chart-content-rtl">
              <div className="content-ltr bg-[#00000080] flex flex-col gap-2 rounded-sm">
                <div className="block py-2 px-3">
                  <label className="text-xl font-bold text-white">API5</label>
                  <div className="grid grid-cols-3 justify-between gap-1 my-2">
                    {meanData?.data5?.map((item, index) => {
                      const moreThanMaxValueType1 = [
                        "p001",
                        "p002",
                        "p003",
                        "p004",
                        "p005",
                        "p006",
                      ].some(
                        (label) =>
                          item.label === label && item.value > minMax.type1.max
                      );

                      const lessThanMinValueType1 = [
                        "p001",
                        "p002",
                        "p003",
                        "p004",
                        "p005",
                        "p006",
                      ].some(
                        (label) =>
                          item.label === label && item.value < minMax.type1.min
                      );

                      const moreThanMaxValueType2 = [
                        "p007",
                        "p008",
                        "p009",
                        "p010",
                        "p011",
                        "p012",
                        "p013",
                        "p014",
                        "p015",
                        "p016",
                        "p017",
                        "p018",
                        "p019",
                        "p020",
                      ].some(
                        (label) =>
                          item.label === label && item.value > minMax.type2.max
                      );

                      const lessThanMinValueType2 = [
                        "p007",
                        "p008",
                        "p009",
                        "p010",
                        "p011",
                        "p012",
                        "p013",
                        "p014",
                        "p015",
                        "p016",
                        "p017",
                        "p018",
                        "p019",
                        "p020",
                      ].some(
                        (label) =>
                          item.label === label && item.value < minMax.type2.min
                      );

                      const textColorClass =
                        moreThanMaxValueType1 || moreThanMaxValueType2
                          ? "text-red-500"
                          : lessThanMinValueType1 || lessThanMinValueType2
                          ? "text-amber-500"
                          : "text-white";

                      return (
                        <div
                          className={`block text-center p-2 border transition-colors hover:bg-[#ffffff30] hover:cursor-pointer`}
                          key={index}
                          onClick={() => openChartModal("api5", item.label)}
                        >
                          <p
                            className={`font-semibold text-lg ${textColorClass}`}
                          >
                            {item.value == null ? (
                              <DataNULL iconSize="5" />
                            ) : (
                              item.value
                            )}
                          </p>
                          <p className="text-white font-medium">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="block py-2 px-3">
                  <label className="text-xl font-bold text-white">API6</label>
                  <div className="grid grid-cols-2 justify-between gap-1 my-2">
                    {meanData?.data6?.map((item, index) => {
                      const moreThanMaxValueType1 = ["s208"].some(
                        (label) =>
                          item.label === label && item.value > minMax.type1.max
                      );

                      const lessThanMinValueType1 = ["s208"].some(
                        (label) =>
                          item.label === label && item.value < minMax.type1.min
                      );

                      const moreThanMaxValueType2 = [
                        "s201",
                        "s203",
                        "s204",
                        "s205",
                        "s206",
                        "s207",
                        "s209",
                        "s210",
                      ].some(
                        (label) =>
                          item.label === label && item.value > minMax.type2.max
                      );

                      const lessThanMinValueType2 = [
                        "s201",
                        "s203",
                        "s204",
                        "s205",
                        "s206",
                        "s207",
                        "s209",
                        "s210",
                      ].some(
                        (label) =>
                          item.label === label && item.value < minMax.type2.min
                      );

                      const textColorClass =
                        moreThanMaxValueType1 || moreThanMaxValueType2
                          ? "text-red-500"
                          : lessThanMinValueType1 || lessThanMinValueType2
                          ? "text-amber-500"
                          : "text-white";

                      return (
                        <div
                          className="block text-center p-2 border transition-colors hover:bg-[#ffffff30] hover:cursor-pointer"
                          key={index}
                          onClick={() => openChartModal("api6", item.label)}
                        >
                          <p
                            className={`font-semibold text-xl ${textColorClass}`}
                          >
                            {item.value == null ? (
                              <DataNULL iconSize="6" />
                            ) : (
                              item.value
                            )}
                          </p>
                          <p className="text-white font-medium">{item.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ModalChartDetail
            openModal={openModal}
            onCloseModal={closeChartModal}
            title={titleModal}
            chartType={chartType}
            chartData={chartData}
            chartDataLabel={chartDataLabel}
          />
        </React.Fragment>
      )}
    </ThemeProvider>
  );
}
