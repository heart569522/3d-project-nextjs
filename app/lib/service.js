import moment from "moment-timezone";
import {
    addDays,
    startOfDay,
    startOfWeek,
    startOfMonth,
    startOfYear,
} from "date-fns";

export function convertToDateTimeText(value) {
    const momentDateTime = moment(value);
    const formattedDate = new Intl.DateTimeFormat("th-TH-u-ca-buddhist", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(momentDateTime.toDate());
    const formattedTime = momentDateTime.format("HH:mm");
    const formattedDateTime = `${formattedDate} ${formattedTime} น.`;
    return formattedDateTime;
};

export function filterDataByTime(data, timeRange) {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "UTC",
    });
    const dateNow = formatter.format(new Date());
    const currentDate = new Date(dateNow);

    switch (timeRange) {
        case "daily":
            return data?.filter((item) => {
                const formattedDate = formatter.format(new Date(item.record_at));
                const recordDate = new Date(formattedDate);
                const resultRecordDate = `${recordDate.getDate()}/${recordDate.getMonth() + 1
                    }/${recordDate.getFullYear()}`;
                const resultCurrentDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1
                    }/${currentDate.getFullYear()}`;
                return resultRecordDate === resultCurrentDate;
            });

        case "weekly":
            const lastWeekDate = addDays(startOfWeek(currentDate), -7);
            return data?.filter((item) => new Date(item.record_at) >= lastWeekDate);

        case "monthly":
            const startOfMonthDate = startOfMonth(currentDate);
            return data?.filter(
                (item) => new Date(item.record_at) >= startOfMonthDate
            );

        case "yearly":
            const startOfYearDate = startOfYear(currentDate);
            return data?.filter(
                (item) => new Date(item.record_at) >= startOfYearDate
            );

        case "all":
            return data;

        default:
            return data;
    }
};

export function calculateMean(type, data, dataLength) {
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