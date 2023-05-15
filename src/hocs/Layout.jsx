import React from "react";
import Navbar from "../components/Navbar"; 
import { Outlet } from "react-router-dom";
import back from '../assets/TbwR.gif'

const style = {
    position: "fixed",
    objectFit: "cover",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    zIndex: "-1"
}

const Layout = () => {
    return (
        <>
        <img src={back} alt="back" style={style}/>
        <Navbar />
        <Outlet/>
    </>
    )
};

export default Layout;
