import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

import Github from "./github.glb"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(Github)

  const onClick = () => {
    window.location.href = "https://github.com/RyanShihabi";
  }

  return (
    <group ref={group} {...props} dispose={null} onClick={onClick} onPointerOver={(e) => props.setGit(true)} onPointerOut={(e) => props.setGit(false)}>
      <mesh geometry={nodes.Default.geometry} material={props.git ? new THREE.MeshBasicMaterial({ color: new THREE.Color('orange'), transparent: true }) : materials.white} rotation={[Math.PI/2, 0, 0]} />
    </group>
  )
}

useGLTF.preload(Github)
