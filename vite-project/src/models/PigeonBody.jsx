import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, animated } from '@react-spring/three'

import eyeScene from '../assets/3d/pigeonBody.glb'
import { useFrame, useThree } from "@react-three/fiber";

const PigeonBody = ({ isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props }) => {
    const eyeRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(eyeScene);

    //Keep track of the mouse position, so we can make the eye move
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    document.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        //animate();
    }

    function animate() {
        requestAnimationFrame(animate);
        //Here we could add some code to update the scene, adding some automatic movement
      
          //I've played with the constants here until it looked good 
          eyeRef.current.rotation.y = -2 + mouseX / window.innerWidth * 3;
          eyeRef.current.rotation.x = -1 + mouseY * 2.5 / window.innerHeight;
        
        renderer.render(scene, camera);
      }

    return (
        <a.group ref={eyeRef} {...props}>
        <group
          position={[0, 0.587, 0.436]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials["pecho.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials["patas_y_pico.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials["deesc.005"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["deesc.004"]}
          position={[0.845, -0.565, -0.245]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </a.group>
    );
}

export default PigeonBody;



