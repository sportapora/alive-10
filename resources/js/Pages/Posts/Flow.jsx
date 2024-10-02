import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Face from "@/Components/Flow/Face";
import Mask from "@/Components/Flow/Mask.jsx";
import Shine from "@/Components/Flow/Shine";

function Flow() {
    return (
        <>
            <Head title="Flow" />
            <Layout 
                classname="bg-gradient-to-b from-[#A776D7] from-60% via-[#9069d0] via-60% to-[#7a54c5] to-90% 
                           lg:from-80% lg:via-[#9069d0] lg:via-80% lg:to-[#7a54c5] lg:to-90% 
                           xl:from-70% xl:via-[#9069d0] xl:via-75% xl:to-[#7a54c5] 
                           h-[2800px] sm:h-[1810px] md:h-[1970px] lg:h-[1900px]">
                <Face />
                <Mask />
                <Shine />
            </Layout>
        </>
    );
}

export default Flow;
