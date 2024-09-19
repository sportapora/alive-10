import React from "react";
import Navbar from "@/Components/SmallComp/Navbar";
import LandingHome from "@/Components/Home/LandingHome";
import Filosofi from "@/Components/Home/Filosofi";

function Home() {
    return (
        <div>
            <Navbar color="orange"/>
            <LandingHome />
            <Filosofi />
        </div>
    );
}

export default Home;
