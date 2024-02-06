import react, { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStyles, LabelUpload } from "./styles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import api from "../../../services/api";
import ReactSelect from "react-select";
import { ErrorMessage } from "../../../components";
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { toast } from "react-toastify";



const NewProduct = () => {
    const [fileName, setFileName] = useState(null)
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        file: Yup.mixed().test('required', 'Carregue a imagem do produto', value => { return value?.length > 0 })
            .test('fileSize', 'Carregue imagens de até 2mb', value => {
                return value[0]?.size > 100000

            }),
        category: Yup.object().required('Escolha a categoria do produto')

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

        await toast.promise(api.post('/products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar produto'
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
                    <Input type="text" {...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>

                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
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
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='categorias'
                                />
                            )
                        }}

                    >
                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>
                <ButtonStyles>Adicionar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct