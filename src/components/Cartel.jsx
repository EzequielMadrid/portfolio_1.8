import * as TWEEN from "@tweenjs/tween.js";
import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const Cartel = ({ targetPosition, setIsContact }) => {
  const { camera } = useThree();

  const handleClick = () => {
    new TWEEN.Tween(camera.position).to(targetPosition, 1500).start();

    setTimeout(() => {
      setIsContact(true);
    }, 800);
  };
  return (
    <Html>
      <div className="absolute bottom-10 left-[340px] bg-opacity-50 w-[380px] bg-gray-800 text-white rounded-xl shadow z-[10] p-4 font-mono">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-300 mb-2">
          Full Stack JavaScript
        </h2>
        <p className="text-gray-300 mb-4"></p>
        <div className="flex flex-row gap-5">
          <button className="border border-cyan-400 animate-pulse text-cyan-400 font-bold py-2 px-4 rounded-xl">
            Scroll to explore 🌑
          </button>
          <button
            onClick={handleClick}
            className="border border-cyan-400 text-cyan-400 font-bold py-2 px-4 rounded-xl"
          >
            Contact me
          </button>
        </div>
      </div>
    </Html>
  );
};

export default Cartel;
