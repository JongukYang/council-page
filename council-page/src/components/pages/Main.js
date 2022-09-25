import React from "react";
import "../../App.css";
import Banner from "../Banner";
import Summary_pages from "./../Summary_pages";
import HSU_pages from "./../HSU_pages";
import Cards from "../Cards";

function Main() {
    return (
        <>
            <Banner />
            <Summary_pages />
            <HSU_pages />
            <Cards />
        </>
    );
}

export default Main;
