"use client";
import {
  GetAPI1,
  GetAPI2,
  GetAPI3,
  GetAPI4,
  GetAPI5,
  GetAPI6,
} from "../../lib/bpsDataActions";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

export default function BpsData() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);

  const getData1 = async () => {
    try {
      const res = await GetAPI1();
      setData1(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData2 = async () => {
    try {
      const res = await GetAPI2();
      setData2(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData3 = async () => {
    try {
      const res = await GetAPI3();
      setData3(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData4 = async () => {
    try {
      const res = await GetAPI4();
      setData4(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData5 = async () => {
    try {
      const res = await GetAPI5();
      setData5(res);
    } catch (error) {
      console.error(error);
    }
  };

  const getData6 = async () => {
    try {
      const res = await GetAPI6();
      setData6(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
    //   await getData1();
    //   await getData2();
    //   await getData3();
    //   await getData4();
    //   await getData5();
    //   await getData6();
    };

    fetchData();
  }, []);

  return <div>bpsData</div>;
}
