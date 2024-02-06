import React from "react";

import { Container,Containeritems } from "./styles";
import { CartItems, CartResume } from "../../components";


export const Cart = () => {

    return (
        <Container>
            <Containeritems>
                <CartItems />
                <CartResume />
            </Containeritems>
        </Container>)
}
