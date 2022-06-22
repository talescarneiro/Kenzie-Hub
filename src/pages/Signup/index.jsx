import React from 'react'
import FormContainer from '../../components/FormContainer'
import Input from '../../components/Input'
import { Form, CenterElement, HubHeader } from './styles'
import Button from '../../components/Button'
import { Link, Redirect, useHistory } from 'react-router-dom'
import InputSelect from '../../components/InputSelect'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import toast from 'react-hot-toast';

const Signup = ({ authenticated, styleAlert }) => {

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().required('Campo obrigatório!').email('Email inválido!'),
    password: yup.string().required('Campo obrigatório!').min(6, 'Mínimo de 6 dígitos!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senhas não combinam!'),
    bio: yup.string().required('Campo obrigatório').min(10, 'Mínimo de 10 dígitos!'),
    contact: yup.string().required('Campo obrigatório').min(8, 'Mínimo de 8 digitos!'),
    course_module: yup.string()
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const history = useHistory()

  const onSubmit = (data) => {
    api.post("/users", data)
      .then((_) => {
        toast.success('Usuário criado com sucesso!', styleAlert)
        setTimeout(() => {
          history.push('/')
        }, 2000)
      })
      .catch(err => toast.error(err.response.data.message, styleAlert))
  }

  if(authenticated) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <FormContainer>
        <HubHeader>
          <h2>Kenzie Hub</h2>
          <Link to="/"><button>Voltar</button></Link>
        </HubHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <CenterElement>
                <h3>Crie sua conta</h3>
                <span>Rapido e grátis, vamos nessa!</span>
            </CenterElement>
            <Input name="name" error={errors.name?.message} label="Nome" placeholder="Digite aqui seu nome" register={register}/>
            <Input name="email" error={errors.email?.message} label="Email" placeholder="Digite aqui seu email" register={register}/>
            <Input type="password" error={errors.password?.message} name="password" label="Senha" placeholder="Digite aqui sua senha" register={register}/>
            <Input type="password" error={errors.confirmPassword?.message} name="confirmPassword" label="Confirmar Senha" placeholder="Digite novamente sua senhal" register={register}/> 
            <Input name="bio" error={errors.bio?.message} label="Bio" placeholder="Fale sobre você" register={register}/>
            <Input name="contact" error={errors.contact?.message} label="Contato" placeholder="Opção de contato" register={register}/>
            <InputSelect name="course_module" register={register}/>
            <Button type="submit" color="var(--color-grey-0)" background="var(--color-primary);" >Cadastrar</Button>
        </Form>
    </FormContainer>
  )
}

export default Signup