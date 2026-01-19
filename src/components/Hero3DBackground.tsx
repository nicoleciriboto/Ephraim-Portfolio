import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import { useMemo } from 'react';
import React from 'react';

export function Hero3DBackground() {
  // Generate random points for particles
  const points = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 1200; i++) {
      arr.push(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(arr);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1, // 👈 Keep it above the section background but below the hero text
      }}
    >
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none', // 👈 Important — keeps buttons clickable
        }}
        camera={{ position: [0, 0, 20], fov: 75 }}
      >
        {/* Particles */}
        <Points positions={points}>
          <PointMaterial color="#0070f3" size={0.15} sizeAttenuation />
        </Points>

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}
