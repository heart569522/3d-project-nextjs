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
// import io from "socket.io-client";

// const socket = io('http://localhost:8000', {
//   path: '/socket',
// });

export default function BpsData() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);

  // useEffect(() => {
  //   socket.on("/api/api1-data", (res) => {
  //     setData1(res.length);
  //   });

  //   socket.on("/api/api2-data", (res) => {
  //     setData2(res.length);
  //   });

  //   socket.on("/api/api3-data", (res) => {
  //     setData3(res.length);
  //   });

  //   socket.on("/api/api4-data", (res) => {
  //     setData4(res.length);
  //   });

  //   socket.on("/api/api5-data", (res) => {
  //     setData5(res.length);
  //   });

  //   socket.on("/api/api6-data", (res) => {
  //     setData6(res.length);
  //   });

  //   // Clean up the event listeners when the component is unmounted
  //   return () => {
  //     socket.off("/api/api1-data");
  //     socket.off("/api/api2-data");
  //     socket.off("/api/api3-data");
  //     socket.off("/api/api4-data");
  //     socket.off("/api/api5-data");
  //     socket.off("/api/api6-data");
  //   };
  // }, []);

  const getData1 = async () => {
    try {
      const res = await GetAPI1();
      setData1(res.length);
    } catch (error) {
      console.error(error);
    }
  };

  const getData2 = async () => {
    try {
      const res = await GetAPI2();
      setData2(res.length);
    } catch (error) {
      console.error(error);
    }
  };

  const getData3 = async () => {
    try {
      const res = await GetAPI3();
      setData3(res.length);
    } catch (error) {
      console.error(error);
    }
  };

  const getData4 = async () => {
    try {
      const res = await GetAPI4();
      setData4(res.length);
    } catch (error) {
      console.error(error);
    }
  };

  const getData5 = async () => {
    try {
      const res = await GetAPI5();
      setData5(res.length);
    } catch (error) {
      console.error(error);
    }
  };

  const getData6 = async () => {
    try {
      const res = await GetAPI6();
      setData6(res.length);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getData1();
  //     await getData2();
  //     await getData3();
  //     await getData4();
  //     await getData5();
  //     await getData6();
  //   };
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const [res1, res2, res3, res4, res5, res6] = await Promise.all([
        GetAPI1(),
        GetAPI2(),
        GetAPI3(),
        GetAPI4(),
        GetAPI5(),
        GetAPI6(),
      ]);
      setData1(res1.length);
      setData2(res2.length);
      setData3(res3.length);
      setData4(res4.length);
      setData5(res5.length);
      setData6(res6.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="gap-4">
        <label className="font-bold underline text-lg mb-2">API1</label>
        {!data1.Error ? (
          <>
            <p>{data1}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg mb-2">API2</label>
        {!data2.Error ? (
          <>
            <p>{data2}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg mb-2">API3</label>
        {!data3.Error ? (
          <>
            <p>{data3}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg mb-2">API4</label>
        {!data4.Error ? (
          <>
            <p>{data4}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg mb-2">API5</label>
        {!data5.Error ? (
          <>
            <p>{data5}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
      <div className="gap-4">
        <label className="font-bold underline text-lg mb-2">API6</label>
        {!data6.Error ? (
          <>
            <p>{data6}</p>
          </>
        ) : (
          <p className="text-red-600">Can not load data!</p>
        )}
      </div>
    </>
  );
}
