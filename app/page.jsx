"use client";
import {
  GetAPI1,
  GetAPI2,
  GetAPI3,
  GetAPI4,
  GetAPI5,
  GetAPI6,
} from "./actions";
import { Model } from "@/app/components/model/model";
import moment from "moment-timezone";
import { Room } from "./components/model/room";
import { Toy } from "./components/model/toy";
import { Kitchen } from "./components/model/kitchen";
import { useEffect, useState, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Sky, OrbitControls, Bounds } from "@react-three/drei";
import { Suspense } from "react";
import {
  EffectComposer,
  SSAO,
  SMAA,
  Selection,
  Outline,
} from "@react-three/postprocessing";

export default function Home() {
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
  const [color, setColor] = useState({
    red: "#FF0000",
    orange: "#FF8700",
    warm: "#FFC47E",
    skyBlue: "#0097FF",
    blue: "#002ECB",
    cool: "#86B6F6",
  });

  const [bedClicked, setBedClicked] = useState(false);
  const controls = useRef();
  console.log(bedClicked)

  useEffect(() => {
    if (bedClicked) {
      
    } else {

    }
  }, [bedClicked]);

  // useEffect(() => {
  //   if (bedClicked) {
  //     // Assuming you want to zoom to the bed position
  //     controls.current.object.position.set(-0.03533639268780575, 2.6994317192051405, 0.14565762923194314).toArray();
  //     controls.current.update();
  //   } else {
  //     // Assuming you want to reset to a default position
  //     controls.current?.object.position.set(5, 4, -5);
  //     controls.current?.update();
  //   }
  // }, [bedClicked]);

  const handleBedClick = (value) => {
    setBedClicked(value);
  };

  const handleControlsChange = () => {
    // Log or update the camera position when the controls change
    const newPosition = controls.current.object.position.toArray();
    console.log("New Camera Position:", newPosition);
  };

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
    <div className="">
      <div className="grid grid-cols-1 h-[800px] mb-2">
        <Canvas camera={{ position: [5, 4, -5] }}>
          <Sky scale={1000} sunPosition={[2, 0.4, 10]} />
          {/* <fog attach="fog" args={['#d4d4d4', 5, 18]} /> */}
          <Suspense fallback={null}>
            {/* <ambientLight intensity={1} /> */}
            {/* <directionalLight intensity={0.2} position={[2, 2, 0]} /> */}
            {/* <pointLight intensity={60} position={[0, 5, 0]} color={color.warm}/> */}
            {/* <spotLight intensity={5} position={[0.5, 5, 3]} /> */}
            <Selection>
              <EffectComposer multisampling={0} autoClear={false}>
                <SSAO
                  radius={0.05}
                  intensity={10}
                  luminanceInfluence={0.5}
                  color="black"
                />
                <Outline
                  visibleEdgeColor={bedClicked ? 'green' : 'red'}
                  hiddenEdgeColor={bedClicked ? 'green' : 'red'}
                  blur
                  width={1000}
                  edgeStrength={100}
                />
                <SMAA />
              </EffectComposer>
              <Bounds margin={1.2} damping={0}>
                <Room onBedClick={handleBedClick} />
              </Bounds>
            </Selection>
            <OrbitControls onChange={handleControlsChange} ref={controls} />
            <Environment preset="city" background blur={1} />
          </Suspense>

          {/* <GizmoHelper
            alignment="bottom-right"
            margin={[80, 80]}
            // renderPriority={2}
          >
            <GizmoViewport
              axisColors={["hotpink", "aquamarine", "#3498DB"]}
              labelColor="black"
            />
          </GizmoHelper> */}
        </Canvas>
      </div>
      <div className="grid grid-cols-3 text-white">
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
      </div>
    </div>
  );
}
