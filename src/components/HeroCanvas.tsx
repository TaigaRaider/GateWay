"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh as ThreeMesh } from "three";

function InnerSphere() {
  return (
    <Sphere args={[1.35, 96, 96]}>
      <MeshDistortMaterial
        color="#0f0f0f"
        roughness={0.18}
        metalness={0.85}
        distort={0.38}
        speed={1.4}
      />
    </Sphere>
  );
}

function WireShell() {
  return (
    <Sphere args={[1.52, 24, 24]}>
      <meshBasicMaterial
        wireframe
        color="#0f0f0f"
        transparent
        opacity={0.16}
      />
    </Sphere>
  );
}

function WeightedSphere() {
  const ref = useRef<ThreeMesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    // Subtle pointer parallax — the sphere leans toward the cursor
    ref.current.rotation.y = state.clock.elapsedTime * 0.12 + state.pointer.x * 0.3;
    ref.current.rotation.x = state.pointer.y * 0.2;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.9}>
      <group ref={ref}>
        <InnerSphere />
        {/* Wireframe shell — structural, blueprint feel */}
        <WireShell />
      </group>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-[55%] w-full opacity-70 lg:inset-0 lg:left-1/2 lg:h-full lg:w-1/2 lg:opacity-100"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <directionalLight position={[-4, -2, -3]} intensity={0.4} />
        <WeightedSphere />
      </Canvas>
    </div>
  );
}
