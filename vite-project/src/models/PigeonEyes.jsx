import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, animated } from '@react-spring/three'

import eyeScene from '../assets/3d/pigeonHead.glb'
import { useFrame, useThree } from "@react-three/fiber";

const PigeonEyes = ({ isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props }) => {
    const eyeRef = useRef();
    <script src="ObjectControls.js"></script>
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(eyeScene);

    let radians = [0];

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
          eyeRef.current.rotation.z = -2 + mouseX / window.innerWidth * 3;
          
          eyeRef.current.rotation.y = -1 + mouseY * 2.5 / window.innerHeight;

          //var controls = new ObjectControls(camera, renderer.domElement, scene);
        
        renderer.render.ObjectControls(scene, camera);
      }

    return (
    <a.group ref={eyeRef} {...props}>
      <group
        position={[0.333, 2.32, -0.01]}
        rotation={[Math.PI / 2, 0, -0.585]}
        scale={[0.005, 0.01, 0.012]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["pupila.004"]}
          position={[-87.911, 0, 0]}
        />
      </group>
      <group
        position={[0.332, 2.314, -0.011]}
        rotation={[Math.PI / 2, 0, -0.585]}
        scale={[0.005, 0.01, 0.012]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["material.003"]}
          position={[-87.911, 0, 0]}
        />
      </group>
      <group
        position={[0.349, 2.12, 0.876]}
        rotation={[Math.PI / 2, 0, -0.585]}
        scale={[0.012, 0.011, 0.011]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["patas_y_pico.003"]}
          position={[0, 0.021, 0]}
        />
      </group>
      <group
        position={[0, 0.587, 0.436]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials["cabeza.003"]}
          position={[-14.369, -31.027, -213.682]}
          rotation={[0, 0, -0.585]}
          scale={[1.169, 1.054, 1.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials["cuello.003"]}
          position={[-9.594, -23.815, -22.891]}
          rotation={[0, 0, -0.585]}
          scale={[1.169, 1.054, 1.054]}
        />
      </group>
    </a.group>
    );
}

export default PigeonEyes;

