import React from 'react';
import Rony from '../../Assets/Images/pic2.png'

const About = () => {
    return (
        <div className=' bg-gray-900 text-white '>
            <div className='w-11/12 mx-auto flex lg:flex-row flex-col  items-center pt-6 '>
                <div className='w-full  lg:p-0 p-11 '>
                    <img className=' rounded border-4 border-sky-500 ' src={Rony} alt="" />
                </div>
                <div className='leading-7'>
                    <p>My name is <span className='font-bold'>  Md. Abu Jobayer</span>. I graduated from Kabi Nazrul Govt. College . Now, I am looking for my first full-time job.
                    </p>
                    <br />
                    <p> I cannot say with 100% confidence where I see myself in five years or what my big career goal is. The world is changing rapidly, and I don’t have enough professional experience to be certain about such things. However, I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique projects.</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1  p-4 leading-10'>
                        <p><span className='font-semibold'>Address</span> : Keraniganj,Dhaka,Bangladesh</p>
                        <p><span className='font-semibold'>Email</span> : jobayerahmedrony@gmail.com</p>
                        <p><span className='font-semibold'>Cell</span> : +8801985863081</p>
                        <p><span className='font-semibold'>Birthday</span> : 2<sup>nd</sup> February 1995</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;