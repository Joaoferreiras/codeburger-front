import React from 'react'
import { toast } from 'react-toastify';
import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import { useUser } from '../../hooks/UserContext';
import api from '../../services/api'
import { yupResolver } from "@hookform/resolvers/yup"
import { Container, Background, ContainerItens, Input, SignUp} from './styles'
import { Button, ErrorMessage } from '../../components'
import IntroImg from "../../assets/Introimg.png"
import { Link, useNavigate } from 'react-router-dom';


export const Login = () => {
  const { putUserData } = useUser()
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: Yup.string().required("A senha é obrigatória").min(6, "A senha deve conter no mínimo 6 digitos")
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async clientData => {

    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }), {
      pending: 'Verificando seus dados',
      success: 'Seja bem-vindo',
      error: 'Verifique seu e-mail e senha'

    })
    putUserData(data)


    setTimeout(() => {
      if (data.admin) {
        navigate("/pedidos")
      } else { navigate("/") }

    }, 1000)

  }

  return (
    <Container>

      <Background src={IntroImg} alt='logo-image' />

      <ContainerItens>

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Input type='email' placeholder='Email' {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Input type='password' placeholder='Senha' {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type='submit' style={{ marginTop: 25, marginBottom: 10 }}>Entrar</Button>
        </form>

        <SignUp>Não possui conta? <Link style={{ color: 'black' }} to="/cadastro">Criar conta</Link></SignUp>

      </ContainerItens>

    </Container>
  )
}


