import React from 'react';
import Navbar from '../Navbar/Navbar';
import Rony from '../../Images/5.png'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-gray-900'>
            <Navbar />
            <div className='lg:flex lg:flex-row sm:flex-col pt-10 w-11/12 mx-auto'>
                {/* right side  */}
                <div className="b-right flex-1  flex gap-4 flex-col pt-11 ">
                    <p className='text-3xl font-semibold text-gray-600'>Hello,I am</p>
                    <p className='lg:text-8xl text-5xl  font-bold text-white' >Jobayer</p>
                    <span className='lg:text-6xl text-5xl ' style={{ color: 'white', fontWeight: 'bold' }}>

                        <Typewriter
                            words={['A Mern Stack Developer...']}
                            loop={0}
                            cursor
                            cursorStyle='|'

                            cursorColor="rgb(96 165 250)"
                            typeSpeed={100}
                            deleteSpeed={150}
                            delaySpeed={5000}

                        />
                    </span>
                    <p ></p>
                    <button className='lg:w-40 w-28 text-xs lg:text-sm bg-blue-500 text-white py-2 rounded-lg'>Download Resume</button>
                    <div className="social-icons flex gap-6 text-4xl pt-11">
                        <p className='text-blue-700  hover:text-5xl cursor-pointer'><FaFacebook /></p>
                        <p className='text-white hover:text-5xl cursor-pointer'>< FaGithub /></p>
                        <p className='text-blue-700 hover:text-5xl cursor-pointer'><FaLinkedin /></p>
                    </div>
                </div>
                {/* left side  */}
                <div className="b-left flex-1 ">
                    <img className=' pl-8 lg:w-1/2 mx-auto' src={Rony} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Banner;