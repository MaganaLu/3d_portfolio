import React from 'react'
import pic2 from '../assets/images/Face.jpg';
import ButtonMailto from '../components/ButtonMailto';

const About = () => {
  return (
    <section className={'max-container bg-black'}>
    <h1 className='blue-gradient_text font-semibold drop-shadow'>
      Hello, I'm Luis Magana
    </h1>

    <ul class="list-inside list-disc pl-10 marker:text-white text-white">
      <li>
      I design and develop websites and many more types of application depending on their use cases! 
      </li>
      
      <li>
      I am passionate about UI/UX design and hip hop music.
      I enjoy listening to artists such as Frank Ocean and Daniel Ceasar. 
      </li> 

      <li>
      I also enjoy playing video games. My current favorite games are Diablo, Minecraft, and Overwatch. 
      </li>
    </ul>

    <h1 className='blue-gradient_text font-semibold drop-shadow'>
      Contact Me:
      <ul class="list-inside list-disc pl-10 marker:text-white">
        <li>
        <a href='https://www.linkedin.com/in/luis-magana-magana/'> LinkedIn</a>
        </li>
        <li>
        <a href='https://github.com/MaganaLu'> GitHub</a>
        </li>
        <li>
        <ButtonMailto label="E-Mail_Me" mailto="mailto:2017LuisMagana@gmail.com" />
        </li>
      </ul>
    </h1>

    <h1 className='pt-10 blue-gradient_text font-semibold drop-shadow'>
    Luis_Magana_Identification.JPG
    </h1>
    <div className='flex justify-start bg-gradient-to-r from-indigo-500'>
    <img className="rounded-md ring ring-green-300" src={pic2}></img>
    </div>
    </section>
  )
}

export default About