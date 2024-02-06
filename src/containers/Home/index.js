import React from "react";
import HomeLogo from "../../assets/HomeImg.png"
import { Container, HomeImg, Separator } from "./styles";
import {CategoryCarousel, OffersCarousel} from "../../components";


export const Home = () => {

    return (
    <Container>
        <HomeImg src={HomeLogo} alt="logo da home" />
        <CategoryCarousel/>
        <Separator/>
        <OffersCarousel/>
    </Container>)
}
