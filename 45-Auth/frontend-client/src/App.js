import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      loading: true
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/profile`, {
        method: "GET",
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      }).then(res => res.json()) //GET fetch
      .then(data => {
        this.setState({
          currentUser: data.user,
          loading: false
        })
      })
    }else{
      this.setState({
        loading: false
      })
    }
  }

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  render(){
    return (
      <Fragment>
        <Nav logged_in={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <Route exact path="/profile" render={() =>
            <Profile currentUser={this.state.currentUser}/>}
          />
          <Route exact path="/login" render={() => this.state.loading ? null : (this.state.currentUser ?
            <Redirect to="/profile" /> :
            <LoginForm setCurrentUser={this.setCurrentUser}/> )}
          />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
