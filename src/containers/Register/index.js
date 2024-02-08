import react from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import { ToastContainer, toast } from 'react-toastify';

import api from '../../services/api'
import { yupResolver } from "@hookform/resolvers/yup"
import { Container, Background, ContainerItens, Input, SignIn} from './styles'
import {Button, ErrorMessage } from '../../components'
import RegisterImage from "../../assets/register.png"
import { Link } from 'react-router-dom';

export const Register = ()=> {

  const schema = Yup.object().shape({
    name: Yup.string().required("o seu nome é obrigatório"),
    email: Yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve conter no mínimo 6 digitos"),
    confirmPassword: Yup.string().required("A senha é obrigatória").oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async clientData => {
    try {
      const { status } = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },
        { validateStatus: () => true })
      if (status === 201 || status === 200) {
        toast.success("Cadastro realizado")
      } else if (status === 409) {
        toast.error("E-mail já cadastrado")
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error("Falha no sistema")

    }

  }



  return (
    <Container>


      <ContainerItens>

        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input type='text' placeholder='Nome' {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Input type='email' placeholder='Email' {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Input type='password' placeholder='Senha' {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Input type='password' placeholder='Confirme a senha' {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type='submit' style={{ marginTop: 25, marginBottom: 10 }}>Entrar</Button>
        </form>

        <SignIn>Já possui conta? <Link style={{color: 'black'}} to="/login">Cadastrar</Link></SignIn>

      </ContainerItens>

      <Background src={RegisterImage} alt='Register-image' />

    </Container>
  )
}


