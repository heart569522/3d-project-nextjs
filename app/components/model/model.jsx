"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Sky, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export function Model({ children }) {
  return (
    <Canvas>
      <Sky scale={1000} sunPosition={[2, 0.4, 10]} />
      {/* <fog attach="fog" args={['#d4d4d4', 5, 18]} /> */}
      {/* <ambientLight intensity={1} /> */}
      {/* <directionalLight intensity={4} position={[2, 2, 0]} /> */}
      <spotLight intensity={10} position={[1, 2, 3.3]}/>
      <Suspense fallback={null}>
        {children}
        <OrbitControls
          enablePan={false}
        />
        {/* <Environment preset="city" background blur={1} /> */}
      </Suspense>
    </Canvas>
  );
}
