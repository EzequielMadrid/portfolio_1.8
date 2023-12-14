import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Space from "./../models/Space";
import DeathStar from "../models/DeathStar";
import Destroyer from "./../models/Destroyer";
import Tie from "./../models/Tie";
import XWing from "../models/XWing";
import Cam from "./../components/Cam";
import Cartel from "../components/Cartel";
import Contact from "../components/Contact";
import * as THREE from "three";

const Hub = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isContact, setIsContact] = useState(false);

  const spaceLocation = () => {
    let screenScale, screenPosition;
    screenScale = [70, 70, 70]; // x, y, z
    screenPosition = [0, 0, -4]; // x, y, z
    return [screenScale, screenPosition];
  };
  const starLocation = () => {
    let screenScale, screenPosition;
    screenScale = [0.6, 0.6, 0.4]; // x, y, z
    screenPosition = [0, -4.5, -33.5]; // x, y, z
    return [screenScale, screenPosition];
  };
  const destroyerLocation = () => {
    let screenScale, screenPosition;
    screenScale = [0.004, 0.004, 0.004]; // x, y, z
    screenPosition = [4, -4, -6]; // x, y, z
    return [screenScale, screenPosition];
  };
  const tieLocation = () => {
    let screenScale, screenPosition;
    screenScale = [0.02, 0.02, 0.02]; // x, y, z
    screenPosition = [3.3, -4, -4.8]; // x, y, z
    return [screenScale, screenPosition];
  };
  const xWingLocation = () => {
    let screenScale, screenPosition;
    screenScale = [0.2, 0.2, 0.2]; // x, y, z
    screenPosition = [-2.8, 0.6, 0.4]; // x, y, z
    return [screenScale, screenPosition];
  };

  const [spaceScale, spacePosition] = spaceLocation();
  const [starScale, starPosition] = starLocation();
  const [destroyerScale, destroyerPosition] = destroyerLocation();
  const [tieScale, tiePosition] = tieLocation();
  const [xWingScale, xWingPosition] = xWingLocation();

  return (
    <section className="w-full h-screen relative overflow-hidden bg-blue-900">
      {isContact && <Contact />}
      {currentSection === 2 && (
        <div className="absolute top-20 right-20 bg-opacity-50 w-[380px] bg-gray-800 text-white rounded-xl shadow z-[10] p-4 font-mono">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-300 mb-2">
            Let's code together !
          </h2>
          <p className="text-gray-300 mb-4"></p>
          <p className="text-gray-300 mb-4">Explore the Metaverse 👓</p>
          <p className="text-gray-300 mb-4">Build futuristic APPs 👽</p>
          <p className="text-gray-300 mb-4">Develop Games 🎮</p>
          <div className="flex items-center justify-center  gap-5">
            <Link
              to="/profile"
              className="border border-cyan-400 animate-pulse  text-cyan-400 font-bold py-2 px-4 rounded-xl"
            >
              Profile
            </Link>
            <Link
              to="/repositories"
              className="border border-cyan-400 animate-pulse text-cyan-400 font-bold py-2 px-4 rounded-xl"
            >
              MY APPs
            </Link>
          </div>
        </div>
      )}
      <Canvas
        className="w-full h-screen"
        camera={{ near: 0.1, far: 1000, position: [0, -2, 2.2] }}
      >
        <directionalLight position={[0, 1, 1]} intensity={3} />
        <Suspense fallback={<Loader />}>
          <Space
            scale={spaceScale}
            position={spacePosition}
            rotation={[1, 2, 0]}
          />
          <Cartel
            targetPosition={new THREE.Vector3(0, 0, -9)}
            setIsContact={setIsContact}
          />
          <DeathStar
            scale={starScale}
            position={starPosition}
            rotation={[0, 0, 0]}
          />
          <XWing
            scale={xWingScale}
            position={xWingPosition}
            rotation={[0, 3, 0]}
          />
          <Destroyer
            scale={destroyerScale}
            position={destroyerPosition}
            rotation={[13, 20.5, -0.3]}
          />
          <Tie
            scale={tieScale}
            position={tiePosition}
            rotation={[0.2, -0.3, 0.2]}
          />
          <Cam
            setIsContact={setIsContact}
            setCurrentSection={setCurrentSection}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hub;
