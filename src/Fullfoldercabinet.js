import React, { useRef } from 'react'
import * as THREE from 'three'
import { applyProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import openSound from './sounds/open.mp3'
import closeSound from './sounds/close.mp3'

import Cabinet from "./fullfoldercabinet.glb"

const openCabinet = new Audio(openSound);
const closeCabinet = new Audio(closeSound);

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(Cabinet)

  const handleTopOpen = () => {
    props.setTopOpen(!props.topOpen);
    openCabinet.volume = 0.5;
    openCabinet.play()
  }

  const handleTopMidOpen = () => {
    props.setTopMidOpen(!props.topMidOpen);
    openCabinet.volume = 0.5;
    openCabinet.play()
  }

  const handleBottomMidOpen = () => {
    props.setBottomMidOpen(!props.bottomMidOpen);
    openCabinet.volume = 0.5;
    closeCabinet.volume = 0.5;
    props.bottomMidOpen ? closeCabinet.play() : openCabinet.play();
    
  }

  const handleBottomOpen = () => {
    props.setBottomOpen(!props.bottomOpen);
    openCabinet.volume = 0.5;
    closeCabinet.volume = 0.5;
    props.bottomOpen ? closeCabinet.play() : openCabinet.play();
  }

  const openCabinetTopAnimation = useSpring({
    config: {duration: 1000},
    position: props.topOpen ? [-17, 30, 13] : [-17, 30, 0]
  });

  const openCabinetTopMidAnimation = useSpring({
    config: {duration: 1000},
    position: props.topMidOpen ? [-17, 43.5, 13] : [-17, 43.5, 0]
  });

  const openCabinetBottomMidAnimation = useSpring({
    config: {duration: 1000},
    position: props.bottomMidOpen ? [-17, 16.5, 13] : [-17, 16.5, 0]
  });

  const openCabinetBottomAnimation = useSpring({
    config: {duration: 1000},
    position: props.bottomOpen ? [-17, 3, 13] : [-17, 3, 0]
  });

  applyProps(materials.base, { metalness: 0.6 })
  applyProps(materials['base.005'], { metalness: 0.6 })
  applyProps(materials['base.006'], { metalness: 0.6 })
  applyProps(materials['base.007'], { metalness: 0.6 })
  applyProps(materials['base.008'], { metalness: 0.6 })
  // applyProps(materials['handles.003'], { metalness: 1 })
  // applyProps(materials['handles.004'], { metalness: 1 })
  // applyProps(materials['handles.005'], { metalness: 1 })

  return (
    <group ref={group} {...props} dispose={null} position={props.position} rotation={[0, -Math.PI/3.5, 0]} scale={props.scale} >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.cabinetfullhollow_1.geometry} material={materials.base} />
        <mesh geometry={nodes.cabinetfullhollow_2.geometry} material={materials.gap} />
      </group>
      <a.group position={openCabinetBottomMidAnimation.position} rotation={[Math.PI / 2, 0, 0]} onPointerOver={(e) => props.setBottomMidHandle(true)} onPointerOut={(e) => props.setBottomMidHandle(false)} >
        <mesh geometry={nodes.cubby.geometry} material={materials['base.005']} />
        <mesh geometry={nodes.cubby_1.geometry} material={materials['base.005']} />
        <mesh geometry={nodes.cubby_2.geometry} material={materials['base.005']} />
        <mesh geometry={nodes.cubby_3.geometry} material={props.bottomMidHandle ? new THREE.MeshBasicMaterial({ color: new THREE.Color('yellow'), transparent: true }) : materials['handles.001']} onClick={handleBottomMidOpen} />
        <mesh
          geometry={nodes.folderMidBot.geometry}
          material={materials['folder.003']}
          position={[7.5, -6.5, -6.5]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </a.group>
      <a.group position={openCabinetTopMidAnimation.position} rotation={[Math.PI / 2, 0, 0]} onPointerOver={(e) => props.setTopMidHandle(true)} onPointerOut={(e) => props.setTopMidHandle(false)} >
        <mesh geometry={nodes.cubby001.geometry} material={materials['base.006']} />
        <mesh geometry={nodes.cubby001_1.geometry} material={materials['base.006']} />
        <mesh geometry={nodes.cubby001_2.geometry} material={materials['base.006']} />
        <mesh geometry={nodes.cubby001_3.geometry} material={props.topMidHandle ? new THREE.MeshBasicMaterial({ color: new THREE.Color('yellow'), transparent: true }) : materials['handles.002']} onClick={handleTopMidOpen} />
        <mesh
          geometry={nodes.folderTop.geometry}
          material={materials['folder.002']}
          position={[7.5, -6.41, -6.5]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </a.group>
      <a.group position={openCabinetTopAnimation.position} rotation={[Math.PI / 2, 0, 0]} onPointerOver={(e) => props.setTopHandle(true)} onPointerOut={(e) => props.setTopHandle(false)} >
        <mesh geometry={nodes.cubby002.geometry} material={materials['base.007']} />
        <mesh geometry={nodes.cubby002_1.geometry} material={materials['base.007']} />
        <mesh geometry={nodes.cubby002_2.geometry} material={materials['base.007']} />
        <mesh geometry={nodes.cubby002_3.geometry} material={props.topHandle ? new THREE.MeshBasicMaterial({ color: new THREE.Color('yellow'), transparent: true }) : materials['handles.003']} onClick={handleTopOpen} />
        <mesh
          geometry={nodes.folderMidTop.geometry}
          material={materials['folder.001']}
          position={[7.5, -6.71, -6.5]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </a.group>
      <a.group position={openCabinetBottomAnimation.position} rotation={[Math.PI / 2, 0, 0]} onPointerOver={(e) => props.setBottomHandle(true)} onPointerOut={(e) => props.setBottomHandle(false)} >
        <mesh geometry={nodes.cubby003.geometry} material={materials['base.008']} />
        <mesh geometry={nodes.cubby003_1.geometry} material={materials['base.008']} />
        <mesh geometry={nodes.cubby003_2.geometry} material={materials['base.008']} />
        <mesh geometry={nodes.cubby003_3.geometry} material={props.bottomHandle ? new THREE.MeshBasicMaterial({ color: new THREE.Color('yellow'), transparent: true }) : materials['handles.004']} onClick={handleBottomOpen} />
        <mesh
          geometry={nodes.folderBottom.geometry}
          material={materials['folder.004']}
          position={[7.5, -6.5, -6.5]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </a.group>
      <mesh
        geometry={nodes.About_Me.geometry}
        material={materials.white}
        position={[1.06, 48.12, -7.02]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Projects.geometry}
        material={materials['white.001']}
        position={[1.17, 34.64, -7.08]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload(Cabinet)
