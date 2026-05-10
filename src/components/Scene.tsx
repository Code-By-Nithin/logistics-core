"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HolographicWireframe({ visible }: { visible: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (visible) {
      gsap.to(meshRef.current!.scale, { x: 1, y: 1, z: 1, duration: 1, ease: "expo.out" });
      gsap.to(meshRef.current!.rotation, { y: Math.PI * 2, duration: 20, repeat: -1, ease: "none" });
    } else {
      gsap.to(meshRef.current!.scale, { x: 0, y: 0, z: 0, duration: 0.5 });
    }
  }, [visible]);

  return (
    <group ref={meshRef} scale={[0, 0, 0]}>
      {/* Truck Wireframe */}
      <mesh>
        <boxGeometry args={[4, 1.5, 1.5]} />
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
      </mesh>
      {/* Scanning Ring */}
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2, 2.1, 64]} />
          <meshBasicMaterial color="#facc15" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const section = Math.floor(self.progress * 8);
        setActiveSection(section);
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[5, 2, 8]} fov={30} />
          
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
          
          <HolographicWireframe visible={activeSection === 2} />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
