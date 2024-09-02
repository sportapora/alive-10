import Footer from "@/Components/SmallComp/Footer";
import Navbar from "@/Components/SmallComp/Navbar";

const Layout = ({ classname = "bg-transparent h-auto", children }) => {
    return (
        <>
            <Navbar />
            <main className={`${classname} `}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
