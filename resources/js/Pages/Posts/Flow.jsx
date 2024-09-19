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
            <Layout classname="bg-gradient-to-b from-[#A776D7] to-[#7A54C5] to-80% lg:from-50% lg:to-[#9069d0] lg:to-50% h-[2700px] sm:h-[1800px] lg:h-[1810px]">
                <Face />
                <Mask />
                <Shine />
            </Layout>
        </>
    );
}

export default Flow;
