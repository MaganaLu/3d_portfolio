import React, { Suspense, useEffect, useRef, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Globe from '../models/globe';
import Rocket from '../models/Rocket';

function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () =>{
  let screenScale= null;
  let screenPosition = [0, 0, 2.7];
  let rotation = [0.1,9.2, 0];

  if(window.innerWidth < 768){
    screenScale = [0.9, 0.9, 0.9];
  }else{
    screenScale = [1,1,1];
  }
  return [screenScale, screenPosition, rotation]
  }

  const adjustRocketForScreenSize = () =>{
    let screenScale, screenPosition;
  
    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
      screenPosition=[0,-.9, 2];
    }else{
      screenScale = [1,1,1];
      screenPosition = [-.2,0,4.2];
    }
    return [screenScale, screenPosition]
    }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [rocketScale, rocketPosition] = adjustRocketForScreenSize();


  return (
    <section className= 'bg-space w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${
          !isRotating ?  "cursor-grabbing" :"cursor-grab"
        }`}
        camera={{near: 0.1, far:1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            
            
            <Globe
            position={islandPosition}
            scale= {islandScale}
            rotation = {[0.1,9.2, 0]}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            />
          
            <Rocket
            isRotating={isRotating}
            scale = {rocketScale}
            position = {rocketPosition}
            rotation = {[2.75,9.5,1.5]}
            />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home