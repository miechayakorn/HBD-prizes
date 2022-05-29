import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import Home from './Home'
import Login from './pages/Login'
import Games from './pages/Games'

const App = () => {
    const AuthRoute = ({path, component: Component, ...props}) => {
        const location = useLocation()
        const auth = localStorage.getItem('auth')
        return (
            <Route
                {...props}
                render={ref => {
                    if (auth) {
                        return (<Component {...ref} />)
                    } else {
                        return (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    search: location.search + '&redirect=' + location.pathname,
                                    state: {from: props.location}
                                }}
                            />
                        )
                    }
                }}
            />
        )
    }

    return (
        <Router>
            <Switch>
                <AuthRoute
                    path="/games"
                    component={Games}
                />
                <Route exact path="/" render={props => <Home {...props} />}/>
                <Route exact path="/login" render={props => <Login {...props} />}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default App
