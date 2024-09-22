import React from "react";
import Navbar from "@/Components/SmallComp/Navbar";
import LandingHome from "@/Components/Home/LandingHome";
import AboutHome from "@/Components/Home/AboutHome";
import Filosofi from "@/Components/Home/Filosofi";

function Home() {
    return (
        <div>
            <Navbar />
            <LandingHome />
            <AboutHome />
            <Filosofi />
        </div>
    );
}

export default Home;
