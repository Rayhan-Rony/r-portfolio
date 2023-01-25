import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './Skills.css'

const Skills = () => {
    const [number, setNumber] = useState(0)



    // useEffect(() => {
    //     const progress = setInterval(() => {

    //         if (number === 49) {
    //             clearInterval(progress)
    //         } else {
    //             const se = number + 1
    //             console.log(se)
    //             setNumber(se)
    //         }
    //     }, 10)

    // }, [number])
    console.log(number)

    return (
        <section className=' bg-black'>
            <div className='flex w-11/12 mx-auto text-white p-48'>
                <div className='s-left flex-1'>

                </div>
                <div className='s-right flex flex-1 flex-wrap gap-x-12 gap-y-20 '>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    {/* {setNumber(95)} */}
                                    <CountUp className='font-bold text-blue-600' end={95} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>HTML</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    <CountUp className='font-bold text-blue-600' end={90} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>CSS</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    <CountUp className='font-bold text-blue-600' end={86} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>JavaScript</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    <CountUp className='font-bold text-blue-600' end={85} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>React</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    <CountUp className='font-bold text-blue-600' end={75} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>MongoDB</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    <CountUp className='font-bold text-blue-600' end={80} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>ExpressJs</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    <CountUp className='font-bold text-blue-600' end={65} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>NodeJs</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="skill">
                        <div className="outer">
                            <div className="inner">
                                <div id="number">
                                    <CountUp className='font-bold text-blue-600' end={96} />%
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-lg font-bold'>Firebase</p>
                        <svg id='svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="#e91e63" />
                                    <stop offset="100%" stopColor="#673ab7" />
                                </linearGradient>
                            </defs>
                            <circle cx="60" cy="60" r="50" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;