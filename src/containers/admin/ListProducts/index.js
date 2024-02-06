import react, { useState, useEffect } from "react";
import { Container, Img, EditIconStyles } from "./styles";
import api from "../../../services/api"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import formatCurrency from "../../../utils/formatCurrency"
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";

const ListProducts = () => {
    const [products, setProducts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const LoadProducts = async () => {
            const { data } = await api.get('products')
            setProducts(data)
        }
        LoadProducts()



    }, [])

    const isOffer = (offer) => {
        if (offer) {
            return <CheckBoxIcon style={{ color: '#35c225' }} />
        }
        return <DisabledByDefaultIcon style={{ color: '#d10606' }} />
    }

    const editProduct = (product) => {
        navigate(paths.EditProduct, { state: { product } })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align="center">Produto em oferta</TableCell>
                            <TableCell align="center">Produto</TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell><Img src={product.url} alt='imagem-produto' /></TableCell>
                                <TableCell><EditIconStyles onClick={() => editProduct(product)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )

}

export default ListProducts