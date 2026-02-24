import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shape component
function FloatingShape({ 
  position, 
  color, 
  speed = 1,
  scale = 1,
  shape = 'sphere'
}: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  scale?: number;
  shape?: 'sphere' | 'box' | 'torus';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'box':
        return new THREE.BoxGeometry(1, 1, 1);
      case 'torus':
        return new THREE.TorusGeometry(0.6, 0.2, 16, 100);
      default:
        return new THREE.IcosahedronGeometry(0.8, 0);
    }
  }, [shape]);

  return (
    <Float
      speed={2 * speed}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Particle field component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Gradient colors: cyan to purple
      const mix = Math.random();
      colors[i * 3] = mix * 0.2 + (1 - mix) * 0.02;     // R
      colors[i * 3 + 1] = mix * 0.8 + (1 - mix) * 0.8;  // G
      colors[i * 3 + 2] = mix * 1.0 + (1 - mix) * 0.5;  // B
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, -10, -5]} intensity={0.5} color="#06b6d4" />

      {/* Floating shapes */}
      <FloatingShape 
        position={[-4, 2, -2]} 
        color="#00d4ff" 
        speed={0.8}
        scale={1.2}
        shape="sphere"
      />
      <FloatingShape 
        position={[4, -1, -3]} 
        color="#8b5cf6" 
        speed={1.2}
        scale={0.8}
        shape="box"
      />
      <FloatingShape 
        position={[-3, -2, -4]} 
        color="#06b6d4" 
        speed={1}
        scale={1}
        shape="torus"
      />
      <FloatingShape 
        position={[3, 3, -5]} 
        color="#a855f7" 
        speed={0.9}
        scale={0.6}
        shape="sphere"
      />

      {/* Particle field */}
      <ParticleField />

      {/* Large background sphere */}
      <Sphere args={[6, 64, 64]} position={[0, 0, -10]}>
        <MeshDistortMaterial
          color="#1a1a2e"
          transparent
          opacity={0.3}
          distort={0.2}
          speed={0.5}
          wireframe
        />
      </Sphere>
    </>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
