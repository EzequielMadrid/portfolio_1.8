import Socials from "../utils/data";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import HomeSocialLinks from "../components/HomeSocialLinks";
import Loader from "../components/Loader";
import Space from "../models/Space";
import Xwing from "../models/XWing";

const Profile = () => {
  const spaceLocation = () => {
    let screenScale, screenPosition;

    screenScale = [70, 70, 70];
    screenPosition = [0, 0, -4];

    return [screenScale, screenPosition];
  };
  const xWingLocation = () => {
    let screenScale, screenPosition;

    screenScale = [0.32, 0.32, 0.32];
    screenPosition = [0, 0.4, 0.4];

    return [screenScale, screenPosition];
  };

  const [spaceScale, spacePosition] = spaceLocation();
  const [xWingScale, xWingPosition] = xWingLocation();

  return (
    <section className="w-full h-screen relative bg-black overflow-hidden font-mono">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-[50]">
        <div className="flex flex-col items-center justify-center bg-opacity-50 bg-gray-800 text-white w-[380px] h-[600px] rounded-xl p-4">
          <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-300 mb-8">
            The language doesn't matter!
          </h2>
          <p className="text-cyan-200 mt-5 text-center font-bold">
            In my repos will find apps with technologies like JavaScript
            (BACKEND + FRONTEND), MongoDB, Sockets. Also with Java, and
            TypeScript. I deem that as a programmer we must to be creative and
            stay ready for work in any enviroment. Doesn't matter if is with
            Hybrid APPs or Native APPs. If we use to run our code Visual Studio
            Code, XCode, Android or PyCharm.
          </p>
          <p className="text-cyan-400">Nothing's ever locked !</p>
          <div className="flex items-center justify-center mt-6 gap-12 ">
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </div>
          <Link
            to="/"
            className="mt-16 border border-cyan-400 animate-pulse text-cyan-400font-bold py-4 px-4 rounded-xl"
          >
            Hub
          </Link>
        </div>
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000, position: [0, -2, 3.3] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <Space
            position={spacePosition}
            scale={spaceScale}
            rotation={[0, 0, 0]}
          />
          <Xwing
            position={xWingPosition}
            scale={xWingScale}
            rotation={[1, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Profile;
