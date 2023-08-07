import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Computer = () => {
  const computerGLTF = useGLTF("./my_computer/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.4} />
      <directionalLight color="white" position={[0, 1, 5]} />
      <mesh>
        <hemisphereLight intensity={2.5} groundColor="white" />
        <pointLight intensity={0.6} />
        <primitive
          object={computerGLTF.scene}
          scale={1.5}
          position={[0, -0.6, 0]}
          rotation={[0.0, 1.1, -0.0]}
        />
      </mesh>
    </Canvas>
  );
};

export default Computer;
