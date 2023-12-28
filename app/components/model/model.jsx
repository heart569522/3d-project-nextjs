"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Sky, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export function Model({ children }) {
  return (
    <Canvas>
      <Sky scale={1000} sunPosition={[2, 0.4, 10]} />
      {/* <ambientLight intensity={2} /> */}
      {/* <directionalLight intensity={3} position={[2, 4, 0]} /> */}
      <Suspense fallback={null}>
        {children}
        <OrbitControls
          enablePan={false}
        />
        <Environment preset="city" background blur={1} />
      </Suspense>
    </Canvas>
  );
}
