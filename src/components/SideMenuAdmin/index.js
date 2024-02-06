import React from "react";
import listLinks from "./menuList"
import LogoutIcon from '@mui/icons-material/Logout';
import {useUser} from "../../hooks/UserContext"
import { useLocation} from "react-router-dom";

import { Container, ItemsContainer, LinkList } from "./styles";


export const SideMenuAdmin = () => {
    const { logout } = useUser()
    const {pathname} = useLocation();

    return (
        <Container>
            <hr />
            {listLinks.map(item => (
                <ItemsContainer key={item.id} isActive={pathname === item.link}>
                    <item.icon className="icon"/>
                    <LinkList to={item.link}>{item.label}</LinkList>
                </ItemsContainer>))}
            <hr />

            <ItemsContainer style={{position:'absolute', bottom: '30px'}}>
                <LogoutIcon style={{color: '#ffffff'}}/>
                <LinkList to={'/login'} onClick={logout}>Sair</LinkList>
            </ItemsContainer>
        </Container>
    )
}