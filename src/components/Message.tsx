import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

interface Message {
  isMobile: boolean;
}

const Message: React.FC<Message> = ({ isMobile }) => {
  const messageGLTF = useGLTF("./mail_icon/scene.gltf");

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
          object={messageGLTF.scene}
          scale={isMobile ? 0.8 : 1.03}
          position={isMobile ? [0, 0, 0] : [0, 0, 0]}
          rotation={[0, 1.06, 0]}
        />
      </mesh>
    </>
  );
};

const MessageCanvas = () => {
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
      <Message isMobile={isMobile} />
    </Canvas>
  );
};

export default MessageCanvas;
