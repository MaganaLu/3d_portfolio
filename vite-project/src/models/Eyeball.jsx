import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, animated } from '@react-spring/three'

import eyeScene from '../assets/3d/eye_model.glb'
import { useFrame, useThree } from "@react-three/fiber";

const Eye = ({ isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props }) => {
    const eyeRef = useRef();

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
          eyeRef.current.rotation.y = -2 + mouseX / window.innerWidth * 3;
          eyeRef.current.rotation.x = -1 + mouseY * 2.5 / window.innerHeight;
        
        renderer.render(scene, camera);
      }

    return (
        <a.group ref={eyeRef} {...props}>
          <group>
            <mesh
              geometry={nodes.Sphere_0.geometry}
              material={materials["Material.001"]}
              //rotation={[1.425, 1.549, -1.515]}
            />
          </group>
        </a.group>
      );
}

export default Eye;

