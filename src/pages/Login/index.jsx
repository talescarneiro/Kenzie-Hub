import React from 'react'
import FormContainer from '../../components/FormContainer'
import Input from '../../components/Input'
import { Form, CenterElement } from './styles'
import Button from '../../components/Button'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import toast from 'react-hot-toast';

const Login = ({ authenticated, setAuthenticated, styleAlert }) => {
  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório!'),
    password: yup.string().required('Campo obrigatório!').min(6, 'Mínimo de 6 dígitos')
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    api.post('/sessions', data)
      .then(response => {
        localStorage.setItem('@KenzieHub:user', JSON.stringify(response.data))
        localStorage.setItem('@KenzieHub:token', response.data.token)
        localStorage.setItem('@KenzieHub:id', response.data.user.id)
        toast.success('Logado com sucesso!', styleAlert)
        setAuthenticated(true)
      })
      .catch(_ => {
        toast.error('Email ou senha inválido', styleAlert)
      })
  }

  if(authenticated) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <FormContainer>
        <h2>Kenzie Hub</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <CenterElement>
                <h3>Login</h3>
            </CenterElement>
            <Input register={register} error={errors.email?.message} name="email" label="Email" placeholder="Digite aqui seu email"/>
            <Input register={register} error={errors.password?.message} type="password" name="password" label="Senha" placeholder="Digite aqui sua senha"/>

            <Button type="submit" color="var(--color-grey-0)" background="var(--color-primary);">Entrar</Button>
            <CenterElement>
                <span>Ainda não possui uma conta?</span>
            </CenterElement>
            <Link to="/signup"><Button color="var(--color-grey-0)" background="var(--color-grey-1);">Cadastre-se</Button></Link>
        </Form>
    </FormContainer>
  )
}

export default Login