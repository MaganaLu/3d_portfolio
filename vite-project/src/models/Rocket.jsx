import React from 'react'

import rocketScene from '../assets/3d/red_and_white_rocket.glb'
import { useGLTF } from '@react-three/drei'

const Rocket = ({isRotating, ...props}) => {
    const{scene,animations} = useGLTF(rocketScene);

  return (
    <mesh {...props} scale={[.6,.6,.6]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Rocket