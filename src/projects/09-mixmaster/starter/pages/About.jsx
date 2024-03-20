import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AboutPage';

const About = () => {
    return (
        <Wrapper>
            <h3>About Us</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae alias exercitationem animi esse possimus tempora ex? Harum unde deserunt voluptatum corrupti iste porro totam blanditiis. Sint voluptatem labore ducimus.
            </p>
            <Outlet/>
            {/* <p>
                <Link to='/'>Back to Home</Link>
            </p>
            <a target='_blank' href="http://google.com">External link (google)</a> */}
        </Wrapper>
    );
};

export default About;