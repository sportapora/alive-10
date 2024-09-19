import Navbar from "@/Components/SmallComp/Navbar";
import FooterFlow from "@/Components/FooterFlow.jsx";

const Layout = ({ classname = "bg-transparent h-auto", children }) => {
    return (
        <>
            <Navbar />
            <main className={`${classname} `}>{children}</main>
            <FooterFlow />
        </>
    );
};

export default Layout;
