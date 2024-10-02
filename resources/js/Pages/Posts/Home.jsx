import React, {useEffect} from "react";
import Navbar from "@/Components/SmallComp/Navbar";
import LandingHome from "@/Components/Home/LandingHome";
import AboutHome from "@/Components/Home/AboutHome";
import Filosofi from "@/Components/Home/Filosofi";
import FooterHome from "@/Components/Home/FooterHome";
import {Head} from "@inertiajs/react";

function Home() {
    useEffect(() => {
        console.log("useEffect has been called");
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
        return () => {
            console.log("Cleanup is happening");
            document.body.style.overflowX = "visible";
            document.body.style.overflowY = "visible";
        };
    }, []);
    return (
        <>
            <Head title="Home"/>
            <Navbar color="orange"/>
            <div className="w-screen overflow-hidden">
                <LandingHome/>
                <AboutHome/>
                <Filosofi/>
                <FooterHome/>
            </div>
        </>
    );
}

export default Home;
