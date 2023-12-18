import React from 'react'
import tarascoLogo from '../assets/images/TarascoLogo.jpg';
import SafiLog from '../assets/images/Safilog.png';
import PythonReact from '../assets/images/pythonReact.jpg';
import ButtonMailto from '../components/ButtonMailto';
import HeadlineCards from '../components/HeadlineCards';

function Projects() {

  return (



    <section className={'max-container bg-black'}>
      {/*<img className=" w-auto h-[400px] rounded-lg" src={tarascoLogo}></img>*/}

      <h1 className='text-white'>Here_Are_Some_Of_My_Projects: </h1>
      <h1 className='text-white'>All_Code_Is_On_My_GitHub </h1>

      <div class="flex items-center justify-center">
        <a class="border-solid border-2 border-indigo-600 relative block w-screen h-[25rem] bg-[#f4e3c9] group" href="https://tacoseltarascowa.com/">
          <img class="absolute inset-0 object-contain w-full h-full group-hover:opacity-5"
            src={tarascoLogo} alt="" />
          <div class="relative p-2">
            <div class="mt-40">
              <div
                class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div class="p-2">
                  <p class="text-md text-black">
                    Live Website for a local restaurant in Wenatchee WA. This was made usign ReactJs.
                    This allowed my client to present a virtual menu to the restaurants customers to decrease customer wait times.
                    The site also allowed customers to learn more about the business.
                  </p>
                  <button class="px-4 py-2 text-sm text-white bg-indigo-600">View Site</button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="flex items-center justify-center">
        <a class="border-solid border-2 border-indigo-600 relative block w-screen h-[25rem] bg-[#f7f4e2] group" href="https://github.com/MaganaLu/FoodLogistics">
          <img class="absolute inset-0 object-contain  object-center w-screen h-full group-hover:opacity-5"
            src={SafiLog} alt="" />
          <div class="relative p-2">
            <div class="mt-40">
              <div
                class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div class="p-2">
                  <p class="text-md text-black">
                  A food delivery application from farm to consumer. The application was built in React using typescript. 
                  The app allows markets to purchase goods from farmers and allows drivers to sign up and make deliveries.
                  </p>
                  <button class="px-4 py-2 text-sm text-white bg-indigo-600">View Code</button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="flex items-center justify-center">
        <a class="border-solid border-2 border-indigo-600 relative block w-screen h-[25rem] bg-white group" href="https://github.com/MaganaLu/ReactPythonClicker">
          <img class="absolute inset-0 object-none object-top w-full h-full group-hover:opacity-5"
            src={PythonReact} alt="" />
          <div class="relative p-2">
            <div class="mt-40">
              <div
                class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <div class="p-2">
                  <p class="text-md text-black">
                  Clicker game with react and python using pyreact. This was a project for fun to see how the react python wrapper worked. 
                  I also wanted to get more confortable using python.
                  </p>
                  <button class="px-4 py-2 text-sm text-white bg-indigo-600">View Code</button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>


    </section>
  )
}

export default Projects