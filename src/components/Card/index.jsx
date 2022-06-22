import React from 'react'
import { CardTech } from './styles'

const Card = ({ tech }) => {
  return (
    <CardTech>
        <h4>{tech.title}</h4>
        <span>{tech.status}</span>
    </CardTech>
  )
}

export default Card