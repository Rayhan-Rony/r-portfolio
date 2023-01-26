import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ProjectsDetails = () => {
    const id = useParams().category_id
    // console.log(id)
    const { data: projects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: () => fetch(`https://r-server.vercel.app/projects/${id}`)
            .then(res => res.json())
    })
    // console.log(projects)
    return (
        <div className='bg-gray-900 text-white'>
            <div className='w-11/12 mx-auto'>

                {
                    projects.map(project => <div>
                        {
                            project.img.map(pimg => <div className='grid grid-cols-3 gap-32'>
                                <img className='rounded-md' src={pimg.first} alt="" />
                                <img className='rounded-md' src={pimg.second} alt="" />
                                <img className='rounded-md' src={pimg.third} alt="" />
                            </div>)
                        }
                        <div className='py-11'>
                            <h1 className='text-5xl text-center text-white'>{project.name}</h1>
                            <div className='flex justify-evenly pt-20'>
                                <div className=''>
                                    <h2 className='text-4xl pb-10'>Projects Overview</h2>
                                    {
                                        project.details.map(detail => <div>
                                            <p>{detail.first}</p>
                                            <p>{detail.second}</p>
                                            <p>{detail.third}</p>
                                            <p>{detail.fourth}</p>
                                            <p>{detail.fifth}</p>
                                        </div>)
                                    }
                                </div>
                                <div className=''>
                                    <h2 className='text-4xl pb-10'>Projects Links</h2>
                                    <p>Live Site Link: {project.livelink}</p>
                                    <p>Client Side Code Link: {project.ClientSide}</p>
                                    <p>Server Side Code Link: {project.Server}</p>
                                </div>
                            </div>



                        </div>
                        <div>

                            <p className='text-center'>Using: {project.Using}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default ProjectsDetails;