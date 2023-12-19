/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a, animated } from '@react-spring/three'

import eyeScene from '../assets/3d/pigeonBody.glb'
import { useFrame, useThree } from "@react-three/fiber";

export function PigeonBody ({ currentFocusPoint, ...props }) {
    const eyeRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(eyeScene);


    return (
        <a.group ref={eyeRef} {...props}>
        <group
        position={[0, 0.587, 0.436]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          //castShadow
          //receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.pecho}
        />
        <mesh
          //castShadow
          //receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.patas_y_pico}
        />
        <mesh
          //castShadow
          //receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials["deesc.001"]}
        />
        <mesh
          //castShadow
          //receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.cuello}
        />
      </group>
      <mesh
        //castShadow
       // receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.deesc}
        position={[0.845, -0.565, -0.245]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      </a.group>
    );
}




