"use client";

import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { filterDataByTime } from "@/app/lib/service";
import { getISOWeek } from "date-fns";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 5,
};

const generateLabels = (prefix, start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const paddedNumber = (start + index).toString().padStart(3, "0");
    return `${prefix}${paddedNumber}`;
  });
};

export default function ModalChartDetail({
  openModal,
  onCloseModal,
  title,
  chartType,
  chartData,
  chartDataLabel,
}) {
  const [selectedOption, setSelectedOption] = useState("daily");
  const [dailyChart, setDailyChart] = useState([]);
  // console.log("🚀 ~ dailyChart:", dailyChart);

  const handleCloseModal = () => {
    setSelectedOption("daily");
    setDailyChart([]);
    onCloseModal();
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const generateChartData = (chartType, dailyChart) => {
    let fieldLabels;
    let label;
    let numDataPoints;

    switch (chartType) {
      case "api1":
        fieldLabels = ["OUT1"];
        label = fieldLabels;
        numDataPoints = 1;
        break;
      case "api2":
        fieldLabels = ["IN1", "IN2", "IN3", "IN4"];
        label = fieldLabels;
        numDataPoints = 4;
        break;
      case "api3":
        fieldLabels = ["IN1", "IN2", "IN3", "IN4", "OUT4"];
        label = fieldLabels;
        numDataPoints = 5;
        break;
      case "api4_in":
        fieldLabels = ["IN1", "IN2", "IN3", "IN4"];
        label = fieldLabels;
        numDataPoints = 4;
        break;
      case "api4":
        fieldLabels = [`${chartDataLabel}`];
        label = fieldLabels;
        numDataPoints = 1;
        break;
      case "api5":
        fieldLabels = [`${chartDataLabel}`];
        label = fieldLabels;
        numDataPoints = 1;
        break;
      case "api6":
        fieldLabels = [`${chartDataLabel}`];
        label = fieldLabels;
        numDataPoints = 1;
        break;
      default:
        fieldLabels = [];
        label = [];
        numDataPoints = 0;
    }

    const series = Array.from({ length: numDataPoints }, (_, index) => ({
      data: dailyChart.map((entry) => entry[fieldLabels[index]]),
      label: label[index],
      id: `${label[index]}Id${index + 1}`,
    }));

    let xLabels;

    switch (selectedOption) {
      case "daily":
        xLabels = dailyChart.map((entry) => entry.hour);
        return { series, xLabels };

      case "weekly":
        xLabels = dailyChart.map((entry) => entry.day);
        return { series, xLabels };

      case "monthly":
        xLabels = dailyChart.map((entry) => entry.week);
        return { series, xLabels };

      case "yearly":
        xLabels = dailyChart.map((entry) => entry.month);
        return { series, xLabels };

      default:
        break;
    }

    return { series, xLabels };
  };

  const addHourField = (data) => {
    if (!data) {
      return [];
    }

    return data.map((entry, index) => ({
      ...entry,
      hour: `${String(index)}:00`,
    }));
  };

  const getFieldLabels = (chartType) => {
    switch (chartType) {
      case "api1":
        return ["OUT1"];
      case "api2":
        return ["IN1", "IN2", "IN3", "IN4"];
      case "api3":
        return ["IN1", "IN2", "IN3", "IN4", "OUT4"];
      case "api4_in":
        return ["IN1", "IN2", "IN3", "IN4"];
      case "api4":
        return [`${chartDataLabel}`];
      case "api5":
        return [`${chartDataLabel}`];
      case "api6":
        return [`${chartDataLabel}`];
      default:
        return [];
    }
  };

  const getDayLabel = (dayOfWeek) => {
    const days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    return days[dayOfWeek];
  };

  const getWeekLabel = (weekNumber) => {
    return `Week ${weekNumber + 1}`;
  };

  const getMonthLabel = (monthIndex) => {
    const months = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May.",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];
    return months[monthIndex];
  };

  const calculateWeeklyMean = (data, chartType) => {
    const fieldLabels = getFieldLabels(chartType);

    const weeklyMeanData = data.reduce((acc, entry) => {
      const dayOfWeek = new Date(entry.record_at).getDay();

      if (!acc[dayOfWeek]) {
        acc[dayOfWeek] = { sum: {}, count: 0 };
        fieldLabels.forEach((fieldLabel) => {
          acc[dayOfWeek].sum[fieldLabel] = 0;
        });
      }

      fieldLabels.forEach((fieldLabel) => {
        acc[dayOfWeek].sum[fieldLabel] += entry[fieldLabel];
      });

      acc[dayOfWeek].count++;

      return acc;
    }, {});

    return Object.keys(weeklyMeanData).map((dayOfWeek) => {
      const meanValues = {};
      fieldLabels.forEach((fieldLabel) => {
        meanValues[fieldLabel] =
          weeklyMeanData[dayOfWeek].sum[fieldLabel] /
          weeklyMeanData[dayOfWeek].count;
      });

      return meanValues;
    });
  };

  const calculateMonthlyMean = (data, chartType) => {
    const fieldLabels = getFieldLabels(chartType);

    const weeklyData = data.reduce((acc, entry) => {
      const weekNumber = getISOWeek(new Date(entry.record_at));

      if (!acc[weekNumber]) {
        acc[weekNumber] = { sum: {}, count: 0 };
        fieldLabels.forEach((fieldLabel) => {
          acc[weekNumber].sum[fieldLabel] = 0;
        });
      }

      fieldLabels.forEach((fieldLabel) => {
        acc[weekNumber].sum[fieldLabel] += entry[fieldLabel];
      });

      acc[weekNumber].count++;

      return acc;
    }, {});

    return Object.keys(weeklyData).map((weekLabel) => {
      const weekNumber = parseInt(weekLabel.replace("Week", ""), 10);
      const meanValues = {};

      fieldLabels.forEach((fieldLabel) => {
        meanValues[fieldLabel] =
          weeklyData[weekNumber].sum[fieldLabel] / weeklyData[weekNumber].count;
      });

      return meanValues;
    });
  };

  const calculateYearlyMean = (data, chartType) => {
    const fieldLabels = getFieldLabels(chartType);

    const yearlyMeanData = data.reduce((acc, entry) => {
      const year = new Date(entry.record_at).getFullYear();

      if (!acc[year]) {
        acc[year] = { sum: {}, count: 0 };
        fieldLabels.forEach((fieldLabel) => {
          acc[year].sum[fieldLabel] = 0;
        });
      }

      fieldLabels.forEach((fieldLabel) => {
        acc[year].sum[fieldLabel] += entry[fieldLabel];
      });

      acc[year].count++;

      return acc;
    }, {});

    return Object.keys(yearlyMeanData).map((year) => {
      const meanValues = {};
      fieldLabels.forEach((fieldLabel) => {
        meanValues[fieldLabel] =
          yearlyMeanData[year].sum[fieldLabel] / yearlyMeanData[year].count;
      });

      return meanValues;
    });
  };

  useEffect(() => {
    const rangeData = filterDataByTime(chartData, selectedOption);

    switch (selectedOption) {
      case "daily":
        const updatedRangeData = addHourField(rangeData);
        setDailyChart(updatedRangeData);
        break;

      case "weekly":
        const weeklyMeanValue = calculateWeeklyMean(rangeData, chartType);
        const limitedWeeklyMeanData = weeklyMeanValue.slice(0, 7);
        const dailyChartWithDay = limitedWeeklyMeanData.map((entry, index) => ({
          ...entry,
          day: getDayLabel(index),
        }));
        setDailyChart(dailyChartWithDay);
        break;

      case "monthly":
        const monthlyMeanValue = calculateMonthlyMean(rangeData, chartType);
        const dailyChartWithWeek = monthlyMeanValue.map((entry, index) => ({
          ...entry,
          week: getWeekLabel(index),
        }));
        setDailyChart(dailyChartWithWeek);
        break;

      case "yearly":
        const yearlyMeanValue = calculateYearlyMean(rangeData, chartType);
        const limitedYaerlyMeanData = yearlyMeanValue.slice(0, 12);
        const dailyChartWithMonth = limitedYaerlyMeanData.map(
          (entry, index) => ({
            ...entry,
            month: getMonthLabel(index),
          })
        );
        setDailyChart(dailyChartWithMonth);
        break;

      default:
        break;
    }
  }, [chartData, selectedOption]);

  const { series, xLabels } = generateChartData(chartType, dailyChart);

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: "calc(100% - 10%)" }}>
        <div className="absolute right-0 top-0 mr-1 mt-1">
          <IconButton
            aria-label="close"
            size="small"
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className="mb-2 flex items-center justify-between gap-x-4 px-6 pt-6">
          <h3
            id="modal-modal-title"
            className="text-2xl font-semibold text-white"
          >
            {title}
          </h3>
          <div className="mr-10">
            <Select
              name="dayType"
              value={selectedOption}
              onChange={handleSelectChange}
              size="small"
            >
              <MenuItem value={"daily"}>รายวัน</MenuItem>
              <MenuItem value={"weekly"}>รายสัปดาห์</MenuItem>
              <MenuItem value={"monthly"}>รายเดือน</MenuItem>
              <MenuItem value={"yearly"}>รายปี</MenuItem>
            </Select>
          </div>
        </div>

        <div className="mb-4 px-6">
          {chartType === "api1" ||
          chartType === "api2" ||
          chartType === "api3" ||
          chartType === "api4_in" ? (
            <BarChart
              sx={{ width: "100%" }}
              height={500}
              series={series}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
          ) : (
            <LineChart
              sx={{ width: "100%" }}
              height={500}
              series={series}
              xAxis={[{ data: xLabels, scaleType: "point" }]}
            />
          )}
        </div>
      </Box>
    </Modal>
  );
}
