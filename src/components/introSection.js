import React from "react";
import pro from "../assets/pro.svg";

function IntroSection() {
    return (
        <div className='h-screen flex items-center justify-between bg-black'>
            <div >
                <img src={pro} alt='intro' className='h-screen w-full object-cover' />
                
            </div>
          <div className='flex flex-col justify-center items-center'>
             <div className="relative rounded-full h-48 w-48 bg-gray-300 border-spacing-5">
                <div className="absolute inset-0 rounded-full bg-black"></div>
            </div>

            <h1 className='text-6xl font-mono text-white'>Hello, I'm <span className='text-green-600'>Rozhiar Rashid</span></h1>
            <h2 className='text-3xl font-mono text-white'>I'm a <span className='text-green-600'>Web Developer</span></h2>
            <button className='bg-green-600 text-white font-mono text-2xl px-4 py-2 rounded-lg mt-10'>Contact Me</button>
            </div>

        </div>
    );
    }

export default IntroSection;