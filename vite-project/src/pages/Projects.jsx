import React from 'react'
import tarascoLogo from '../assets/images/TarascoLogo.jpg';
import ButtonMailto from '../components/ButtonMailto';

function Projects() {
  return (
    <section className={'max-container bg-black'}>

    <h1 className='text-white font-semibold drop-shadow'>
      Live Website for a local restaurant in Wenatchee WA. This was made usign ReactJs. 
      This allowed my client to present a virtual menu to the restaurants customers to decrease customer wait times. 
      The site also allowed customers to learn more about the business.
    </h1>
    <img className=" w-auto h-[400px] rounded-lg" src={tarascoLogo}></img>

    </section>
  )
}

export default Projects