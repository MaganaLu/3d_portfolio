/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, animated } from '@react-spring/three'

import eyeScene from '../assets/3d/RobotHead.glb'
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export function PigeonEyes({ currentFocusPoint, ...props }) {
    const eyesRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(eyeScene);


    //Keep track of the mouse position, so we can make the eye move
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let touchX = window.innerWidth / 2;
    let touchY = window.innerHeight / 2;

    const handlePointerMove = (event) => {
        event.stopPropagation();
        event.preventDefault();

        mouseX = event.clientX;
        mouseY = event.clientY;

        eyesRef.current.rotation.y = -2 + mouseX / window.innerWidth * 3;

        if (mouseY < window.innerHeight / 2) {
            eyesRef.current.rotation.x = -1 + mouseY * 2.5 / window.innerHeight;
        }

    }

    const handleTouchMove = (event) => {

        console.log("lol");
        event.stopPropagation();
        event.preventDefault();

        mouseX = event.changedTouches[0].clientX;
        mouseY = event.changedTouches[0].clientY;
        

        eyesRef.current.rotation.y = -2 + mouseX / window.innerWidth * 3;

        if (mouseY < window.innerHeight / 2) {
            eyesRef.current.rotation.x = -1 + mouseY * 2.5 / window.innerHeight;
        }

    }


    useEffect(() => {
        // Add event listeners for pointer and keyboard events
        const canvas = gl.domElement;
        canvas.addEventListener("mousemove", handlePointerMove);
        canvas.addEventListener("touchmove", handleTouchMove);

        // Remove event listeners when component unmounts
        return () => {
            canvas.removeEventListener("mousemove", handlePointerMove);
            canvas.removeEventListener("touchmove", handleTouchMove);
        };
    }, [gl, handlePointerMove]);


    return (
        <a.group ref={eyesRef} {...props}>
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

