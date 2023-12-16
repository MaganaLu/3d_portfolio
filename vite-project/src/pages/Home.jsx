import React, { Suspense, useEffect, useRef, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Globe from '../models/globe';
import Rocket from '../models/Rocket';
import Eye from '../models/Eyeball';
import DemonBoy from '../models/DemonBoy';
import Bat from '../models/Bat';
import DemonEyeball from '../models/DemonEye';
import RedBlob from '../models/RedBlob';
import RedEyeScocket from '../models/RedEyeSocket';
import RedEyeBall from '../models/RedEyeBall';
import PigeonEyes from '../models/PigeonEyes';
import PigeonBody from '../models/PigeonBody';

//import RedBlob2 from '../models/RedBlob2';

function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () =>{
  let screenScale= null;
  let screenPosition = [-1, -1, -1];
  let rotation = [0, -1.5, 0];

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
      screenScale = [1, 1, 1];
      screenPosition=[2,0, 2];
    }else{
      screenScale = [1,1,1];
      screenPosition = [-1.23,-1.55,-1];
    }
    return [screenScale, screenPosition]
    }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [rocketScale, rocketPosition] = adjustRocketForScreenSize();

    
  return (
    <section className= 'bg-brick-wall w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${
          !isRotating ?  "cursor-grabbing" :"cursor-grab"
        }`}
        camera={{near: 0.1, far:1000}}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={.9}/>
            
            <directionalLight color={'#e9e0c9'} position={[0,-1.5,2]} intensity={2}/>
           
            
             {/*
            <RedBlob
            position={islandPosition}
            scale= {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            />
            */}
            <PigeonEyes
            position={rocketPosition}
            scale= {rocketScale}
            rotation = {[1.1,-1.5,1]}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            />

            <PigeonBody
            position={islandPosition}
            scale= {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            />
{/* 
            <RedEyeBall
            position={rocketPosition}
            scale= {rocketScale}
            rotation = {[1.5,0.1,0]}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            />
            
           
            <Bat
            position={islandPosition}
            scale= {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            />
            
            <DemonEyeball
            position={rocketPosition}
            scale= {rocketScale}
            rotation = {[0,0,0]}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            />
            
            <Rocket
            isRotating={isRotating}
            scale = {rocketScale}
            position = {rocketPosition}
            rotation = {[2.75,9.5,1.5]}
            />
      */}
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home