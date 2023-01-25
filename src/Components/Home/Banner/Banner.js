import React from 'react';

import Rony from '../../../Assets/Images/5.png'
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Resume from './Resume of  MD ABU JOBAYER.pdf';

const Banner = () => {
    return (
        <div className='bg-gray-900'>

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

                    <a href={Resume} download>

                        <button className='lg:w-40 w-28 text-xs lg:text-sm bg-blue-500 text-white py-2 rounded-lg'>Download Resume</button>
                    </a>


                    <div className="social-icons flex gap-6 text-4xl pt-11">
                        <p className='text-blue-700  lg:hover:text-5xl cursor-pointer'><a href="https://www.facebook.com/jobayer.ahmedrony.92" target='_blank' ><FaFacebook /></a></p>

                        <p className='text-white lg:hover:text-5xl cursor-pointer'><a href="https://github.com/Rayhan-Rony" target='_blank' >< FaGithub /></a></p>
                        <p className='text-blue-700 lg:hover:text-5xl cursor-pointer'><a href="https://www.linkedin.com/in/md-abu-jobayer/" target='_blank' ><FaLinkedin /></a></p>
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