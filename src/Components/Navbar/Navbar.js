import React from 'react';
import { NavLink as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll"
import * as Scroll from "react-scroll"


const Navbar = () => {
    const path = useLocation().pathname
    // console.log(path)
    const location = path.split("/")[1]
    const navigate = useNavigate()
    const scroller = Scroll.scroller;
    const goToPageAndScroll = async (selector) => {
        await navigate("/");
        await scroller.scrollTo(selector, {
            duration: 500,
            smooth: true,
            offset: -75,
            spy: true
        })
    }
    console.log(location)
    return (
        <section className='bg-gray-900 sticky top-0 z-50' >
            <div className='lg:flex text-white lg:w-11/12 mx-auto lg:p-8 pt-5 '>
                <div className="n-left hidden lg:block  lg:flex-1 ">
                    <h2 style={{ 'fontFamily': 'Sevillana' }} className='font-extrabold lg:text-4xl'>
                        <RouterLink to='/'>
                            <span className='text-blue-400'>J</span>
                            <span>o</span>
                            <span>b</span>
                            <span>a</span>
                            <span>y</span>
                            <span>e</span>
                            <span>r</span>
                        </RouterLink>
                    </h2>

                </div>
                <div className="n-right lg:flex-1">
                    <div className='lg:w-2/3 lg:text-lg text-xs'>
                        <ul className='flex justify-evenly font-medium cursor-pointer'>
                            {/* {(location === 'blogs' || location === 'about') && console.log('ok')} */}
                            {/* !(location === 'blogs' || location === 'about') */}
                            {(location !== 'about' && location !== 'blogs') ? (
                                <>
                                    <li> {" "} <ScrollLink
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-75}
                                        duration={500}

                                    >
                                        Home


                                    </ScrollLink></li>
                                    <li> <ScrollLink
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-75}
                                        duration={500}

                                    >
                                        Projects


                                    </ScrollLink></li>
                                    <li> <ScrollLink
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-75}
                                        duration={500}
                                    >
                                        Skills

                                    </ScrollLink></li>
                                    <li> <RouterLink to='/about'>About</RouterLink></li>
                                    <li> <RouterLink to='/blogs'>Blogs</RouterLink></li>
                                    <li  > <ScrollLink
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-75}
                                        duration={500}
                                    >
                                        Contact Me
                                    </ScrollLink></li>
                                </>
                            ) : (
                                <>

                                    <li>
                                        {" "}
                                        <button onClick={() => goToPageAndScroll("home")}>Home</button>
                                    </li>
                                    <li>
                                        <button onClick={() => goToPageAndScroll("projects")}>Projects</button>
                                    </li>
                                    <li>
                                        <button onClick={() => goToPageAndScroll("skills")}>Skills</button>
                                    </li>
                                    <li>
                                        <RouterLink to="/about">About</RouterLink>
                                    </li>
                                    <li> <RouterLink to='/blogs'>Blogs</RouterLink></li>
                                    <li>
                                        <button onClick={() => goToPageAndScroll("contact")}>Contact Me</button>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Navbar;