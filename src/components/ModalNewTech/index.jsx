import React from 'react'
import { Modal } from '@mui/material'
import Box from '@mui/material/Box';
import { ModalBody, ModalHeader } from './styles';
import Input from '../Input'
import Button from '../Button';
import SelectLevel from '../SelectLevel';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import toast from 'react-hot-toast';

const ModalNewTech = ({ open, setOpen, handleCloseModal, styleAlert }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 4px 40px -10px rgba(0, 0, 0, 0.25)',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
      };


    const schema = yup.object().shape({
      title: yup.string().required('Campo obrigatório!').min(1, 'Mínimo de 1 letra'),
      status: yup.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
      const token = localStorage.getItem('@KenzieHub:token')
      api.post('/users/techs', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(_ => {
          toast.success('Tecnologia adicionada com sucesso!', styleAlert)
          setOpen(false)
        })
        .catch(err => toast.error(err.response.data.message, styleAlert))
    }

  return (
    <>
      <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <ModalHeader>
            <span>Cadastrar Tecnologia</span>
            <button onClick={handleCloseModal}>X</button>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input register={register} error={errors.title?.message} name="title" label="Nome" placeholder="Digite aqui a tecnologia"/>
              <SelectLevel name="status" register={register} />
              <Button type="submit" color="var(--color-grey-0)" background="var(--color-primary);">Cadastrar Tecnologia</Button>
            </form>
          </ModalBody>
        </Box>
      </Modal>
    </>
  )
}

export default ModalNewTech