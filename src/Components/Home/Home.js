import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import S from './Skills/S';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <S></S>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;