import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('./LinkedIn.glb');

  const onClick = () => {
    window.location.href = "https://www.linkedin.com/in/ryan-shihabi";
  }

  return (
    <group ref={group} {...props} dispose={null} onClick={onClick} onPointerOver={(e) => props.setLinkedin(true)} onPointerOut={(e) => props.setLinkedin(false)}>
      <group rotation={[Math.PI/2, 0, 0]}>
        <mesh geometry={nodes.Mesh_0.geometry} material={materials.white} />
        <mesh geometry={nodes.Mesh_0_1.geometry} material={props.linkedin ? new THREE.MeshBasicMaterial({ color: new THREE.Color('orange'), transparent: true }) : materials.blue} />
      </group>
    </group>
  );
}

useGLTF.preload('./LinkedIn.glb');
