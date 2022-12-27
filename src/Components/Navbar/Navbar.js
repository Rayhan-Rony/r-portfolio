import React from 'react';


const Navbar = () => {
    return (

        <div className='lg:flex text-white lg:w-11/12 mx-auto lg:p-8 pt-5'>
            <div className="n-left hidden lg:block  lg:flex-1 ">
                <h2 style={{ 'fontFamily': 'Sevillana' }} className='font-extrabold lg:text-4xl'>
                    <span className='text-blue-400'>J</span>
                    <span>o</span>
                    <span>b</span>
                    <span>a</span>
                    <span>y</span>
                    <span>e</span>
                    <span>r</span>
                </h2>

            </div>
            <div className="n-right lg:flex-1">
                <div className='lg:w-2/3 lg:text-lg text-xs'>
                    <ul className='flex justify-evenly font-medium'>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Contact Me</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;