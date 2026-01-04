
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Define intrinsic elements as components to bypass missing JSX types in the environment
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const Points = 'points' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const PointsMaterial = 'pointsMaterial' as any;

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={4}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Particles = () => {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    // Fix: Using component aliases to avoid JSX intrinsic element errors for 'points'
    <Points ref={pointsRef}>
      {/* Fix: Using component aliases to avoid JSX intrinsic element errors for 'bufferGeometry' */}
      <BufferGeometry>
        {/* Fix: Using component aliases to avoid JSX intrinsic element errors for 'bufferAttribute' */}
        <BufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </BufferGeometry>
      {/* Fix: Using component aliases to avoid JSX intrinsic element errors for 'pointsMaterial' */}
      <PointsMaterial size={0.03} color="#f6ad55" transparent opacity={0.6} />
    </Points>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-100">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Fix: Using component aliases to avoid JSX intrinsic element errors for lights */}
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} intensity={1} />
        <PointLight position={[-10, -10, -10]} color="#ec4899" intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedShape />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Background3D;
