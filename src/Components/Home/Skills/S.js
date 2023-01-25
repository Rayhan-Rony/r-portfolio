
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvider";


import ProgressBar from "@ramonak/react-progress-bar";



const S = () => {

    return (
        <section className=' bg-gray-900' id='skills'>
            <div className='lg:flex md:flex-col lg:flex-row text-white w-11/12 mx-auto' >
                <div className='lg:flex-1 flex flex-col gap-11 pt-11 '>
                    <h2 className='text-center text-4xl font-bold'>Professional Skills</h2>
                    <div>
                        <div className='flex justify-between'>
                            <p>Communication</p>
                            <p>95%</p>
                        </div>
                        <ProgressBar baseBgColor='black' bgColor='#3e98c7' transitionTimingFunction='ease' transitionDuration='1s' animateOnRender={true} height='10px' customLabel=' ' completed={95} />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <p>Team Work</p>
                            <p>55%</p>
                        </div>
                        <ProgressBar baseBgColor='black' bgColor='#3e98c7' transitionTimingFunction='ease' transitionDuration='1s' animateOnRender={true} height='10px' customLabel=' ' completed={55} />
                    </div>
                    <div>

                        <div className='flex justify-between'>
                            <p>Project Management</p>
                            <p>50%</p>
                        </div>
                        <ProgressBar baseBgColor='black' bgColor='#3e98c7' transitionTimingFunction='ease' transitionDuration='1s' animateOnRender={true} height='10px' customLabel=' ' completed={50} />
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <p>Creativity</p>
                            <p>40%</p>
                        </div>
                        <ProgressBar baseBgColor='black' bgColor='#3e98c7' transitionTimingFunction='ease' transitionDuration='1s' animateOnRender={true} height='10px' customLabel=' ' completed={40} />
                    </div>



                </div>
                <div className='lg:flex-1 lg:p-11 p-4  flex flex-col gap-16'>
                    <h2 className='text-center text-4xl font-bold lg:pt-0 pt-6'>Technical Skills</h2>
                    <div className='flex flex-wrap gap-11 text-center lg:px-16'>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={95}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"95%"} />}
                            </ProgressProvider>
                            <p>HTML</p>
                        </div>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={90}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"90%"} />}
                            </ProgressProvider>
                            <p>CSS</p>
                        </div>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={86}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"86%"} />}
                            </ProgressProvider>
                            <p>JavaScript</p>
                        </div>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={85}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"85%"} />}
                            </ProgressProvider>
                            <p>React</p>
                        </div>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={75}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"75%"} />}
                            </ProgressProvider>
                            <p>MongoDB</p>
                        </div>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={80}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"80%"} />}
                            </ProgressProvider>
                            <p>ExpressJs</p>
                        </div>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={65}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"65%"} />}
                            </ProgressProvider>
                            <p>NodeJs</p>
                        </div>
                        <div className='w-32 h-32 '>
                            <ProgressProvider valueStart={0} valueEnd={96}>
                                {(value) => <CircularProgressbar styles={{ trail: { stroke: '#000', }, }} value={value} text={"96%"} />}
                            </ProgressProvider>
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default S;


