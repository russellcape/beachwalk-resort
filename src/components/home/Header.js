import React from 'react';
import Hero from '../globals/Hero';
import homeImg from "../../images/homeBcg.jpeg";
// import aboutImg from "../../images/aboutBcg.jpeg";
import Banner from "../globals/Banner"

const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner greeting="Welcome to" title="beachwalk resort" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue scelerisque purus, quis tempus magna." />
            
        </Hero>
    );
};

export default Header
