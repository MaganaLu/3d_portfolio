import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, animated } from '@react-spring/three'

import eyeScene from '../assets/3d/RobotHead.glb'
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const PigeonEyes = ({ isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props }) => {
  const eyeRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(eyeScene);


  //Keep track of the mouse position, so we can make the eye move
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    mouseX = event.clientX;
    mouseY = event.clientY;

    eyeRef.current.rotation.y = -2 + mouseX / window.innerWidth * 3;
    console.log(mouseY);

    if (mouseY < 479) {
      eyeRef.current.rotation.x = -1 + mouseY * 2.5 / window.innerHeight;
    }

  }

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("mousemove", handlePointerMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("mousemove", handlePointerMove);
    };
  }, [gl, handlePointerMove]);


  return (
    <a.group ref={eyeRef} {...props}>
      <mesh
        geometry={nodes.robot_rigHead_robot_rigM_Screen_0.geometry}
        material={materials.robot_rigM_Screen}
        position={[3.926, -37.595, -12.428]}
      />
      <mesh
        geometry={nodes.robot_rigHead_robot_rigM_White_0.geometry}
        material={materials.robot_rigM_White}
        position={[3.926, -37.595, -12.428]}
      />
      <mesh
        geometry={nodes.robot_rigAntenna_robot_rigM_Chrome_0.geometry}
        material={materials.robot_rigM_Chrome}
        position={[3.926, -37.595, -12.428]}
      />
    </a.group>
  );
}

export default PigeonEyes;

