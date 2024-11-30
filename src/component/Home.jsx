import React from 'react'
import harishimage from '../assets/harish.png'

function home() {
  return <>
  <div className='bg-black text-white text-center py-16'>
        <img src={harishimage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Harish Raajaa R V</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            onClick={()=>{window.open("//api.whatsapp.com/send?phone=918973815197&text=Hi Harish!! Can we have a quick chat?")}}
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button
            onClick={()=>{window.open("https://drive.google.com/drive/folders/1qFb072n3_QhFUZ1XnXSQSPry41LjQojf?usp=sharing")}}
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
  </>
}

export default home