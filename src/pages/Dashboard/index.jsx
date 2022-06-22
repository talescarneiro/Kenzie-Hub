import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Card from '../../components/Card'
import ModalNewTech from '../../components/ModalNewTech'
import { Container, FlexColum, Header, Main, NavBar } from './styles'
import toast from 'react-hot-toast';
import api from '../../services/api'

const Dashboard = ({ authenticated, setAuthenticated, styleAlert }) => {
    const [open, setOpen] = useState(false)
    const handleOpenModal = () => setOpen(true)
    const handleCloseModal = () => setOpen(false)
    const userJSON = JSON.parse(localStorage.getItem('@KenzieHub:user'))
    const [user] = useState(userJSON)
    const [techList, setTechList] = useState([])

    const handleLogout = () => {
        localStorage.clear()
        setAuthenticated(false)
        toast.error('Sessão finalizada!', styleAlert)
    }

    useEffect(() => {
        api.get(`/users/${user.user.id}`)
            .then(response => setTechList(response.data.techs))
            .catch(err => console.log(err))
    }, [user, techList])
    
    if(!authenticated) {
        return <Redirect to="/"/>
    }

  return (
    <Container>
        <ModalNewTech styleAlert={styleAlert} open={open} setOpen={setOpen} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal}/>
        <NavBar>
            <div>
                <h2>Kenzie Hub</h2>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </NavBar>
        <hr />
        <Header>
            <h3>Olá, {user.user.name}</h3>
            <span>{user.user.course_module}</span>
        </Header>
        <hr />

        <Main>
            <div>
                <h3>Tecnologias</h3>
                <button onClick={handleOpenModal}>+</button>
            </div>

            <FlexColum>
                {techList.map(tech => (
                    <Card key={tech.id} tech={tech} />
                ))}
            </FlexColum>
        </Main>
    </Container>
  )
}

export default Dashboard