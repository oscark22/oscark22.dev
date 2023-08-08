import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

interface Computer {
  isMobile: boolean;
}

const Computer: React.FC<Computer> = ({ isMobile }) => {
  const computerGLTF = useGLTF("./my_computer/scene.gltf");

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight color="white" position={[0, 1, 5]} />
      <mesh>
        <hemisphereLight intensity={2.5} groundColor="white" />
        <pointLight intensity={1.6} />
        <spotLight
          position={[80, 40, 10]}
          angle={0.12}
          penumbra={1}
          intensity={8100}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computerGLTF.scene}
          scale={isMobile ? 0.6 : 0.8}
          position={isMobile ? [0, 2.1, 0] : [0, 1.4, 0]}
          rotation={[0, 1.06, 0]}
        />
      </mesh>
    </>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 620px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
      <Computer isMobile={isMobile} />
    </Canvas>
  );
};

export default ComputerCanvas;
