import React from "react";
import Navbar from "@/Components/SmallComp/Navbar";
import LandingHome from "@/Components/Home/LandingHome";
import AboutHome from "@/Components/Home/AboutHome";

function Home() {
    return (
        <div>
            <Navbar />
            <LandingHome />
            <AboutHome />
        </div>
    );
}

export default Home;
