import React, { Suspense, useEffect, useRef, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'


import PigeonEyes from '../models/PigeonEyes';
import PigeonBody from '../models/PigeonBody';

//import RedBlob2 from '../models/RedBlob2';



function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () =>{
  let screenScale= null;
  let screenPosition = [.4, -.5, -.5];
  let rotation = [0, -.9, 0];

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
      screenScale = [.03,.03,.03];
      screenPosition = [0,0,0];
    }
    return [screenScale, screenPosition]
    }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [rocketScale, rocketPosition] = adjustRocketForScreenSize();

  


  return (

    
    <section className= 'bg-black bg-PCScene bg-no-repeat bg-[center_top_-8rem] w-full h-screen relative'>
      
      <Canvas 
        className={'w-full h-screen'}
        camera={{near: 0.1, far:1000}}
        >
          <Suspense fallback={<Loader />}>
            
            
            <directionalLight color={'#3EB489'} position={[0,1,0]} intensity={7}/>
           
            
            <PigeonEyes
            position={rocketPosition}
            scale= {rocketScale}
            rotation = {[0,0,0]}
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
            
          </Suspense>
      </Canvas>
    </section>
  )
  
}

export default Home