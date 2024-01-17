"use client";
import { RoomOld } from "./room-old";
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

  const controls = useRef();

  const [selectedObject, setSelectedObject] = useState(null);
  const [hoveredObject, setHoveredObject] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObject(object);
  };

  const handleObjectHover = (object) => {
    setHoveredObject(object);
  };

  return (
    <Canvas camera={{ position: [4, 5, -3] }}>
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      {/* <fog attach="fog" args={['#d4d4d4', 5, 18]} /> */}
      <Suspense fallback={null}>
        {/* <ambientLight intensity={1} />
        <directionalLight intensity={0.2} position={[2, 2, 0]} />
        <pointLight intensity={60} position={[0, 5, 0]} color={color.warm} />
        <spotLight intensity={5} position={[0.5, 5, 3]} /> */}
        <Selection>
          <EffectComposer multisampling={0} autoClear={false}>
            <SSAO
              radius={0.05}
              intensity={10}
              luminanceInfluence={0.5}
              color="black"
            />
            <Outline
              // selected={selectedObject !== null}
              visibleEdgeColor={selectedObject ? "green" : "green"}
              hiddenEdgeColor={selectedObject ? "green" : "green"}
              blur
              width={1000}
              edgeStrength={100}
            />
            <SMAA />
          </EffectComposer>
          <Bounds margin={1.2} damping={0}>
            <Room
              onObjectClick={handleObjectClick}
              onObjectHover={handleObjectHover}
            />
          </Bounds>
        </Selection>
        <OrbitControls />
        <Environment preset="city" background blur={1} />
      </Suspense>
    </Canvas>
  );
}
