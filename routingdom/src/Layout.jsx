import React from "react";
import Headers from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function Layout() {
    return(
        <>
        {/* <Headers/> */}
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;