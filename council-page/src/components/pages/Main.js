import React from "react";
import "../../App.css";
import Banner from "../Banner";
import Summary_pages from "../Summary_pages";
import HSU_pages from "./../HSU_pages";
import Cards from "../Cards";
import MainNotice from "./Main_Notice";
import StyledComponentTest from "./StyledComponentTest";
import Container from "./styles";

function Main() {
    return (
        <>
            <Banner />
            <MainNotice />
            <HSU_pages />
            <Cards />
        </>
    );
}

export default Main;
