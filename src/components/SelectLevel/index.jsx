import React from 'react'
import { Container } from './styles'

const SelectLevel = ({ register, name }) => {
  return (
    <Container>
        <p>Módulo</p>
        <select {...register(name)}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </select>
    </Container>
  )
}

export default SelectLevel