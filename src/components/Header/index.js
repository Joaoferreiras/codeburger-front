import React from "react";
import { useNavigate, useLocation } from "react-router-dom"

import { useUser } from "../../hooks/UserContext";

import { Container, PageLink, ContainerLeft, ContainerRigth, ContainerText } from "./styles";
import cartImage from "../../assets/cartImage.png"
import personImage from "../../assets/personImage.png"


export const Header = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()


    const { logout, userData } = useUser()

    const logoutUser = () => {
        logout()
        navigate('/login')

    }


    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => navigate('/')} isActive={pathname === "/"}> Home </PageLink>
                <PageLink onClick={() => navigate("/produtos")} isActive={pathname.includes("produtos")}  > Ver produtos </PageLink>
            </ContainerLeft>
            <ContainerRigth>
                <PageLink onClick={() => navigate('/carrinho')} isCart={pathname.includes("/carrinho")}><img src={cartImage} alt="logo-carrinho" /></PageLink>
                <div className="separator"></div>
                <PageLink isCart={pathname.includes("/carrinho")}><img src={personImage} alt="logo-pessoa" /></PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLink onClick={logoutUser}>Sair</PageLink>
                </ContainerText>
            </ContainerRigth>
        </Container>)
}