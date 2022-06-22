import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Routes = () => {

  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('@KenzieHub:token')
    if(token) {
      return setAuthenticated(true)
    }
  }, [authenticated])

  const styleAlert = {
    style: {
        background: '#343B41',
        color: '#F8F9FA',
        fontSize: '14px',
        fontWeight: '400'
    }
}

  return (
    <Switch>
        <Route exact path="/">
            <Login styleAlert={styleAlert} authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        </Route>

        <Route exact path="/signup">
            <Signup styleAlert={styleAlert} authenticated={authenticated} />
        </Route>

        <Route exact path="/dashboard">
            <Dashboard styleAlert={styleAlert} authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>

    </Switch>
  )
}

export default Routes