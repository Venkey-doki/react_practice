import React from "react";
import Headers from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
        <Headers/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;