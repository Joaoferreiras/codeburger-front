import React, { useEffect } from "react";

import { Container, ContainerItems } from "./styles";
import Orders from "./Orders";
import ListProducts from "./ListProducts";
import NewProduct from "./NewProduct"
import EditProduct from "./EditProduct"
import { SideMenuAdmin } from "../../components"
import { useHistory, useParams, useLocation, useNavigate } from 'react-router-dom';
import paths from "../../constants/paths";


export const Admin = () => {
    const {pathname} = useLocation();
    // useEffect(() => {
    //console.log(props); // Props do componente
    //console.log(id); // Parâmetro da URL
    // console.log(location); // Objeto de localização
    //}, [location]);
    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                {pathname === paths.Products && <ListProducts />}
                {pathname === paths.Order && <Orders />}
                {pathname === paths.NewProduct && <NewProduct />}
                {pathname === paths.EditProduct && <EditProduct />}
            </ContainerItems>

        </Container>
    )
}
