"use client";
import {
  GetAPI1,
  GetAPI2,
  GetAPI3,
  GetAPI4,
  GetAPI5,
  GetAPI6,
} from "../../lib/eboxDataActions";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

export default function EboxData() {
  // const data1 = await GetAPI1();
  // console.log("🚀 ~ file: page.jsx:18 ~ Home ~ data1:", data1);
  // const data2 = await GetAPI2();
  // console.log("🚀 ~ file: page.jsx:20 ~ Home ~ data2:", data2);
  // const data3 = await GetAPI3();
  // console.log("🚀 ~ file: page.jsx:22 ~ Home ~ data3:", data3);
  // const data4 = await GetAPI4();
  // console.log("🚀 ~ file: page.jsx:24 ~ Home ~ data4:", data4);
  // const data5 = await GetAPI5();
  // console.log("🚀 ~ file: page.jsx:26 ~ Home ~ data5:", data5);
  // const data6 = await GetAPI6();
  // console.log("🚀 ~ file: page.jsx:28 ~ Home ~ data6:", data6);

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);

  const getData1 = async () => {
    try {
      const res = await GetAPI1();
      console.log("🚀 ~ file: page.jsx:40 ~ getData1 ~ res:", res);
      setData1(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData2 = async () => {
    try {
      const res = await GetAPI2();
      console.log("🚀 ~ file: page.jsx:51 ~ getData2 ~ res:", res);
      setData2(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData3 = async () => {
    try {
      const res = await GetAPI3();
      console.log("🚀 ~ file: page.jsx:61 ~ getData3 ~ res:", res);
      setData3(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData4 = async () => {
    try {
      const res = await GetAPI4();
      console.log("🚀 ~ file: page.jsx:71 ~ getData4 ~ res:", res);
      setData4(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData5 = async () => {
    try {
      const res = await GetAPI5();
      console.log("🚀 ~ file: page.jsx:81 ~ getData5 ~ res:", res);
      setData5(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData6 = async () => {
    try {
      const res = await GetAPI6();
      console.log("🚀 ~ file: page.jsx:91 ~ getData6 ~ res:", res);
      setData6(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getData1();
      await getData2();
      await getData3();
      await getData4();
      await getData5();
      await getData6();
    };

    fetchData();
  }, []);

  const convertToDateTimeText = (value) => {
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

  return (
    <>
      <div className="gap-4">
        <label className="font-bold underline text-lg mb-2">API1</label>
        {!data1.Error ? (
          <>
            <p>{convertToDateTimeText(data1.datetime)}</p>
            <p>{data1.OUT1}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg">API2</label>
        {!data2.Error ? (
          <>
            <p>{convertToDateTimeText(data2.datetime)}</p>
            <p>{data2.IN1}</p>
            <p>{data2.IN2}</p>
            <p>{data2.IN3}</p>
            <p>{data2.IN4}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg">API3</label>
        {!data3.Error ? (
          <>
            <p>{convertToDateTimeText(data3.datetime)}</p>
            <p>{data3.IN1}</p>
            <p>{data3.IN2}</p>
            <p>{data3.IN3}</p>
            <p>{data3.IN4}</p>
            <p>{data3.OUT4}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg">API4</label>
        {!data4.Error ? (
          <>
            <p>{convertToDateTimeText(data4.datetime)}</p>
            <p>{data4.IN1}</p>
            <p>{data4.IN2}</p>
            <p>{data4.IN3}</p>
            <p>{data4.IN4}</p>
            <p>{data4.p221}</p>
            <p>{data4.p222}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg">API5</label>
        {!data5.Error ? (
          <>
            <p>{convertToDateTimeText(data5.datetime)}</p>
            <p>{data5.p001}</p>
            <p>{data5.p002}</p>
            <p>{data5.p003}</p>
            <p>{data5.p004}</p>
            <p>{data5.p005}</p>
            <p>{data5.p006}</p>
            <p>{data5.p007}</p>
            <p>{data5.p008}</p>
            <p>{data5.p009}</p>
            <p>{data5.p010}</p>
            <p>{data5.p011}</p>
            <p>{data5.p012}</p>
            <p>{data5.p013}</p>
            <p>{data5.p014}</p>
            <p>{data5.p015}</p>
            <p>{data5.p016}</p>
            <p>{data5.p017}</p>
            <p>{data5.p018}</p>
            <p>{data5.p019}</p>
            <p>{data5.p020}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg">API6</label>
        {!data6.Error ? (
          <>
            <p>{convertToDateTimeText(data6.datetime)}</p>
            <p>{data6.s201}</p>
            <p>{data6.s202}</p>
            <p>{data6.s203}</p>
            <p>{data6.s204}</p>
            <p>{data6.s205}</p>
            <p>{data6.s206}</p>
            <p>{data6.s207}</p>
            <p>{data6.s208}</p>
            <p>{data6.s209}</p>
            <p>{data6.s210}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
    </>
  );
}