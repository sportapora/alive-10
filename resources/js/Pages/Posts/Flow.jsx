import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import Face from "@/Components/Flow/Face";
import Chroma from "@/Components/Flow/Chroma";
import Shine from "@/Components/Flow/Shine";

function Flow() {
    return (
        <>
            <Head title="Flow" />
            <Layout classname="bg-gradient-to-b from-[#A776D7] to-[#7A54C5] to-80% lg:from-50% lg:to-[#9069d0] lg:to-50% h-[2800px] sm:h-[2000px] lg:h-[1830px] 2xl:h-[1830px]">
                <Face />
                <Chroma />
                <Shine />
            </Layout>
        </>
    );
}

export default Flow;
