import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/core/useGLTF';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/title.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.position} scale={props.scale}>
      <mesh material={materials.white} geometry={nodes.Ryan_Shihabi.geometry} rotation={[Math.PI/1.9, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/title.glb');
