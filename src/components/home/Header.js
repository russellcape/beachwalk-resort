import React from 'react';
import Hero from '../globals/Hero';
import homeImg from "../../images/homeBcg.jpeg";
// import aboutImg from "../../images/aboutBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons"

const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner greeting="Welcome to" title="beachwalk resort" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue scelerisque purus, quis tempus magna.">
                <PrimaryBtn t="1rem">view details</PrimaryBtn>
                {/* <PrimaryBtn as="a" href="https://www.google.ca/">view details</PrimaryBtn> */}
            </Banner>
        </Hero>
    );
};

export default Header
