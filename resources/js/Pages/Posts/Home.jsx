import React from "react";
import Navbar from "@/Components/SmallComp/Navbar";
import LandingHome from "@/Components/Home/LandingHome";
import AboutHome from "@/Components/Home/AboutHome";
import Filosofi from "@/Components/Home/Filosofi";
import FooterHome from "@/Components/Home/FooterHome"

function Home() {
    return (
        <div>
            <Navbar />
            <LandingHome />
            <AboutHome />
            <Filosofi />
            <FooterHome />
        </div>
    );
}

export default Home;
