import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

import Arrow from "./arrow.glb"

export default function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF(Arrow)

  const arrowClick = () => {
    props.setArrow(!props.arrow)
  }

  return (
    <group ref={group} {...props} dispose={null} position={props.position} scale={props.scale} rotation={props.rotation} onClick={arrowClick} onPointerOver={(e) => props.setHover(true)} onPointerOut={(e) => props.setHover(false)}>
      <mesh geometry={nodes.Cube.geometry} material={props.hover ? new THREE.MeshBasicMaterial({ color: new THREE.Color('yellow'), transparent: true }) : new THREE.MeshBasicMaterial({ color: new THREE.Color('white'), transparent: true })} />
    </group>
  )
}

useGLTF.preload(Arrow)
