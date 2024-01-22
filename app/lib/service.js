import moment from "moment-timezone";

export default function convertToDateTimeText(value) {
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