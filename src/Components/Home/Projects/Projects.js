import React from 'react';
import code from '../../../Assets/codeFire.png'
import old from '../../../Assets/old.png'
import lock from '../../../Assets/Lock.png'
import './Projects.css'
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        // <section className='section'>
        //     <div className='container'>

        //     </div>
        //     <div className='container portfolio-img'>
        //         <div className='img-overlay'>
        //             <img src={code} alt="" />
        //             <div className="overlay">
        //                 <a href='#'>Project 1</a>
        //             </div>
        //         </div>

        //     </div>
        // </section>

        <div className='bg-gray-900 text-white' id='projects'>
            <h2 className='lg:text-4xl text-3xl font-bold text-center py-20'>My Awesome Projects</h2>
            <div className=' w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-11 pb-16 '>
                <div>
                    <div className='relative img-overlay overflow-hidden'>
                        <img className='rounded-lg overflow-hidden relative w-full' src={old} alt="" />
                        <div className='overlay absolute top-0 left-0 w-full h-full bg-sky-300 rounded-lg flex opacity-0 justify-center  translate-y-full  transition-all'>
                            <Link to={'/projects/1'}><div>
                                <h3 className='text-2xl'>Old Sale</h3>
                                <p className='tex-xl'>This is a buy and sale website.</p>
                            </div></Link>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <Link to={'/projects/1'}><button className='block mx-auto border border-sky-400 p-2 rounded-full  hover:bg-sky-500'>Explore Details</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='relative img-overlay overflow-hidden'>

                        <img className='rounded-lg overflow-hidden relative w-full' src={lock} alt="" />
                        <div className='overlay absolute top-0 left-0 w-full h-full bg-sky-300 rounded-lg flex opacity-0 justify-center  translate-y-full  transition-all'>
                            <Link to={'/projects/2'}>  <div>
                                <h3 className='text-2xl'>Lock Pc</h3>
                                <p className='tex-xl'>This website is for collect review. </p>
                            </div></Link>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <Link to={'/projects/2'}> <button className='block mx-auto border border-sky-400 p-2 rounded-full  hover:bg-sky-500'>Explore Details</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='relative img-overlay overflow-hidden'>
                        <img className='rounded-lg overflow-hidden relative w-full' src={code} alt="" />
                        <div className='overlay absolute top-0 left-0 w-full h-full bg-sky-300 rounded-lg flex opacity-0 justify-center  translate-y-full  transition-all'>
                            <Link to={'/projects/3'}> <div>
                                <h3 className='text-2xl'>Code Fire</h3>
                                <p className='tex-xl'>This is a learning platform.</p>
                            </div></Link>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <Link to={'/projects/3'}> <button className='block mx-auto border border-sky-400 p-2 rounded-full  hover:bg-sky-500'>Explore Details</button>
                        </Link>
                    </div>
                </div>



            </div>
        </div >

    );
};

export default Projects;