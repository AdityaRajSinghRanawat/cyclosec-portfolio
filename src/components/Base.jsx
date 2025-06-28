import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

export default function Base() {
    return (
        <>
            <Navbar />
            <div className="mt-30">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}