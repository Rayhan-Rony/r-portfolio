import React from 'react';
import footer from '../../Assets/Footer.png'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-900 '>
            <div className='relative'>
                <img src={footer} alt="" />
                <div className='absolute lg:right-1/3 right-1/4 lg:top-1/2 top-1/3 lg:pt-0 pt-4'>


                    <h1 className='lg:text-2xl text-sm pl-28'>jobayerahmedrony@gmail.com</h1>
                    <div className="social-icons flex gap-6 lg:text-5xl text-sm lg:pt-11 pl-40">

                        <p className='text-blue-700  lg:hover: cursor-pointer'><a href="https://www.facebook.com/jobayer.ahmedrony.92" target='_blank' ><FaFacebook /></a></p>
                        <p className='text-white lg:hover: cursor-pointer'><a href="https://github.com/Rayhan-Rony" target='_blank' >< FaGithub /></a></p>
                        <p className='text-blue-700 lg:hover: cursor-pointer'><a href="https://www.linkedin.com/in/md-abu-jobayer/" target='_blank' ><FaLinkedin /></a></p>


                    </div>

                </div>

            </div >
        </div >
    );
};

export default Footer;