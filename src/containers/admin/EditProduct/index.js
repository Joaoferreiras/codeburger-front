import react, { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStyles, LabelUpload, ContainerInput } from "./styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import api from "../../../services/api";
import ReactSelect from "react-select";
import { ErrorMessage } from "../../../components";
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useLocation, useNavigate } from "react-router-dom";

import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { toast } from "react-toastify";



const NewProduct = () => {
    const [fileName, setFileName] = useState(null)
    const navigate = useNavigate()
    const { state: { product } } = useLocation()
    console.log(product)

    const [categories, setCategories] = useState([])

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha a categoria do produto'),
        offer: Yup.bool()

    })
    const { register, handleSubmit, control, formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])
        productDataFormData.append('offer', data.offer)

        await toast.promise(api.put(`/products/${product.id}`, productDataFormData), {
            pending: 'Editando produto...',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar produto'
        })

        setTimeout(() => {
            navigate('/listar-produtos')
        }, 2000);

    }

    useEffect(() => {
        const loadCategories = async () => {
            const { data } = await api.get('categories')
            setCategories(data)
        }
        loadCategories()
    }, [])

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>

                <div>

                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>

                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} defaultValue={product.price} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>

                    <LabelUpload>
                        {fileName || <> <CloudUploadIcon /> Carregue a imagem do produto</>}


                        <input type="file" accept="image/png, image/jpeg" {...register('file')} onChange={value => setFileName(value.target.files[0]?.name)} />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>

                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='categorias'
                                    defaultValue={product.category}
                                />
                            )
                        }}

                    >
                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                    <input type="checkbox" defaultChecked={product.offer} {...register('offer')} />
                    <Label>Produto em oferta?</Label>
                </ContainerInput>
                <ButtonStyles>Editar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct