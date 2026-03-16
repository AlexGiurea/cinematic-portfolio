import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { useDomain } from '../../context/DomainContext';

function AnimatedShape({ currentPath }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  // Change geometry/color based on domain (path or hover)
  const { hoveredDomain } = useDomain();
  
  const getShapeProps = () => {
    const activeTarget = hoveredDomain || currentPath;
    
    switch(activeTarget) {
      case '/tennis':
        // Midnight Luxe accent style (Champagne) with high distortion for erratic organic sporty shape
        return { color: '#c9a84c', distort: 0.8, speed: 3 };
      case '/photography':
        // Sharp, dense configuration 
        return { color: '#2a2a35', distort: 0.1, speed: 1.5 };
      case '/business':
        // Extremely smooth, corporate metallic vibe
        return { color: '#faf8f5', distort: 0.0, speed: 0.5 };
      default:
        // Home - Default low-key obsidian blob
        return { color: '#0a0a0e', distort: 0.3, speed: 1 };
    }
  };

  const props = getShapeProps();

  return (
    <Float floatIntensity={2} rotationIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={props.color}
          envMapIntensity={1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          metalness={0.8}
          roughness={0.2}
          distort={props.distort}
          speed={props.speed}
        />
      </mesh>
    </Float>
  );
}

export default function Scene({ currentPath }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedShape currentPath={currentPath} />
      <Environment preset="city" />
    </Canvas>
  );
}
