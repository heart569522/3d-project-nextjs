"use client";
import {
  GetAPI1,
  GetAPI2,
  GetAPI3,
  GetAPI4,
  GetAPI5,
  GetAPI6,
} from "../../lib/bpsDataActions";
import { useState, useEffect } from "react";

export default function BpsData() {
  const [data, setData] = useState({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
    data6: [],
  });

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const [res1, res2, res3, res4, res5, res6] = await Promise.all([
        getAllData("api1"),
        getAllData("api2"),
        getAllData("api3"),
        getAllData("api4"),
        getAllData("api5"),
        getAllData("api6"),
      ]);

      setData({
        data1: res1,
        data2: res2,
        data3: res3,
        data4: res4,
        data5: res5,
        data6: res6,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 100000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="gap-4"></div>
    </>
  );
}
