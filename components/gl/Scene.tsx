"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

import { Logo } from "./Logo";

export const Scene = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      gl={{
        precision: "highp",
        powerPreference: "high-performance",
        alpha: true,
        reversedDepthBuffer: true,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      linear
      flat
      resize={{ scroll: false, debounce: { scroll: 0, resize: 500 } }}
    >
      <OrbitControls
        makeDefault
        minDistance={0.1}
        maxDistance={50}
        enablePan={true}
        enableRotate={true}
      />
      <PerspectiveCamera
        position={[0, 0, 1.5]}
        fov={24}
        near={0.001}
        far={10000.0}
      />
      <directionalLight position={[-10, 0, -5]} intensity={1} />
      <directionalLight position={[-1, -2, -5]} intensity={0.2} />
      <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
      />
      <Suspense fallback={null}>
        <Bounds observe fit margin={1}>
          <Center>
            <Logo />
          </Center>
        </Bounds>
      </Suspense>
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.75}
        scale={10}
        blur={3}
        far={4}
      />
      <Environment files="/assets/hdri/Light_Arches_A.hdr" background />
    </Canvas>
  );
};
