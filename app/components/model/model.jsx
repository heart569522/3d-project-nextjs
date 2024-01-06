"use client";
import { Room } from "./room";
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

export default function Model() {
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
  console.log(bedClicked);

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

  return (
    <Canvas camera={{ position: [5, 4, -5] }}>
      <Sky scale={1000} sunPosition={[2, 0.4, 10]} />
      {/* <fog attach="fog" args={['#d4d4d4', 5, 18]} /> */}
      <Suspense fallback={null}>
        {/* <ambientLight intensity={1} /> */}
        {/* <directionalLight intensity={0.2} position={[2, 2, 0]} /> */}
        {/* <pointLight intensity={60} position={[0, 5, 0]} color={color.warm}/>
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
              visibleEdgeColor={bedClicked ? "green" : "red"}
              hiddenEdgeColor={bedClicked ? "green" : "red"}
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
  );
}
