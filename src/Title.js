import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/core/useGLTF';
import { applyProps } from '@react-three/fiber'

import Title from "./title.glb"

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(Title);

  applyProps(materials.white, { color: "#fff", roughness: 0 })

  return (
    <group ref={group} {...props} dispose={null} position={props.position} scale={props.scale}>
      <mesh material={materials.white} geometry={nodes.Ryan_Shihabi.geometry} rotation={[Math.PI/1.9, 0, 0]} />
    </group>
  );
}

useGLTF.preload(Title);
