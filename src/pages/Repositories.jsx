import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Space from "../models/Space";
import Destroyer from "../models/Destroyer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MarketPlace from "../assets/MarketPlace.jpg";
import NetflixClone from "../assets/NetflixClone.jpg";
import RedSocial from "../assets/RedSocial.jpg";
import Tetris from "../assets/Tetris.jpg";

const Repositories = () => {
  const spaceLocation = () => {
    let screenScale, screenPosition;
    screenScale = [70, 70, 70];
    screenPosition = [0, 0, -4];
    return [screenScale, screenPosition];
  };
  const destroyerLocation = () => {
    let screenScale, screenPosition;
    screenScale = [0.01, 0.01, 0.01];
    screenPosition = [4, 1, -6];
    return [screenScale, screenPosition];
  };

  const [spaceScale, spacePosition] = spaceLocation();
  const [destroyerScale, destroyerPosition] = destroyerLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [MarketPlace, NetflixClone, RedSocial, Tetris];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-screen relative bg-black overflow-hidden ">
      <div className="absolute top-5 left-20 grid grid-cols-1 gap-5 z-[10] max-w-[40%] >">
        <img
          className="w-full h-full object-cover border-4  border-cyan-200 rounded-xl"
          alt="website-photo"
          src={images[currentIndex]}
        />
        <article className="flex items-center justify-between mt-10 font-mono">
          <button
            className="border border-cyan-400 bg-black text-cyan-400 animate-pulse font-bold py-2 px-4 rounded-xl"
            onClick={prevSlide}
            title="Previous Project"
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            className="border border-cyan-400 bg-black text-cyan-400 animate-pulse font-bold py-2 px-4 rounded-xl"
            onClick={nextSlide}
            title="Next Project"
          >
            Next <FaArrowRight />
          </button>
          <Link
            to="/profile"
            className="text-cyan-200 border border-cyan-200 p-2 rounded-xl hover:bg-black"
          >
            My repos are in Profile Section
          </Link>
        </article>
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
          <Destroyer
            position={destroyerPosition}
            scale={destroyerScale}
            rotation={[13, 9.4, -0.3]}
          />
        </Suspense>
      </Canvas>
      <Link
        to="/"
        className="absolute bottom-10 left-20 border border-cyan-400 text-cyan-400 font-bold py-4 px-4 rounded-xl font-mono"
      >
        Hub
      </Link>
    </section>
  );
};

export default Repositories;
