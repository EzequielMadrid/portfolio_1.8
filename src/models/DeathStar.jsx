/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/death-star-star-wars-3d5f01485e9e4e8b9d995d7764341afe
Title: Death Star - Star Wars
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import deathStarScene from "../assets/3d/deathStar.glb";

const DeathStar = (props) => {
  const { nodes, materials } = useGLTF(deathStarScene);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DeathStar001_1_0.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DeathStar_misa001_2_0.geometry}
        material={materials.material_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default DeathStar;
