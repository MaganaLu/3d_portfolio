import React, { useEffect, useRef } from "react";
import { Gltf, useGLTF } from "@react-three/drei";
import { a, animated } from '@react-spring/three'

import eyeScene from '../assets/3d/RedBlob.glb'
import { useFrame, useThree } from "@react-three/fiber";

const Eye = ({ isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props }) => {

    const meshRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(eyeScene);
    

    //Keep track of the mouse position, so we can make the eye move
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    document.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        animate();
    }

    function animate() {
        requestAnimationFrame(animate);
            //Here we could add some code to update the scene, adding some automatic movement
      
          //I've played with the constants here until it looked good 
          meshRef.current.rotation.Y = -2 + mouseX / window.innerWidth * 3;
          meshRef.current.rotation.X = -1 + mouseY * 2.5 / window.innerHeight;
        
        renderer.render(scene, camera);
      }

    return (
        <a.group {...props}>
        <group scale={0.01}>
          <group ref={meshRef} scale={100}>
            <mesh 
              //castShadow
              //receiveShadow
              geometry={nodes.Eye_Flesh_0.geometry}
              material={materials["Flesh.001"]}
              
            />
            <mesh 
              //castShadow
              //receiveShadow
              geometry={nodes.Eyeball.geometry}
              material={materials["material.001"]}
              //rotation={eyeBallRotation}
              //rotation={[0.007, 0, -Math.PI]}
            />
          </group>
          <mesh
            //castShadow
            //receiveShadow
            geometry={nodes.Eye_FleshMound_Flesh_0.geometry}
            material={materials["Flesh.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </a.group>
      );
}

export default Eye;



