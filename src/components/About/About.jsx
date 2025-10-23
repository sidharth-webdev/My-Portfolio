import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import myPic from '../../assets/myPic.png';

const About = () => {
  return (
    <section  id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
       <div className='flex flex-col-reverse md:flex-row justify-betweens items-center'>
        {/* left side */}
        <div className='md:1/2 text-center md:text-left mt-8 md:mt-0'>
        {/* Greetings */}
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sidharth Pradhan 
          </h2>
          {/* Skill heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
  <span className="text-white">I am a </span>
  <TypeAnimation
    sequence={[
      'Frontend Developer', 2000,
      'Web Developer', 2000,
      'Learner', 2000,
      'Coder', 2000,
    ]} 
    speed={50}
    repeat={Infinity}
    cursor={true}
    style={{ color: '#8245ec' }}
  />
 </h3>
      {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed max-w-lg md:max-w-xl lg:max-w-2xl">
            An aspiring Full-Stack Web Developer who loves turning ideas into interactive digital experiences. Skilled in building projects using React, JavaScript, and modern web tools. Focused on writing clean, maintainable code and continuously improving through hands-on learning and collaboration.
          </p>
          <a
            href="https://drive.google.com/file/d/1ld8AYC3rCWwiEuxpoM_z1MXebN3xFN4D/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV 
          </a>
        </div>
         <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={myPic}
              alt="Sidharth Pradhan"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
       </div>
    </section>
  )
}

export default About;
