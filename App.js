import React from 'react'
import './App.css'
import Home from './src/pages/Home'
import Rooms from './src/pages/Rooms'
import SingleRoom from './src/pages/SingleRoom'
import Error from './src/pages/Error'
import {Route, Switch} from 'react-router-dom'
import Navbar from './src/component/Navbar'

function App() {
    return (
    <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rooms/" component={Rooms}/>
            <Route exact path="/rooms/:slug" component={SingleRoom}/>
            <Route component={Error}/>
        </Switch>
    </>
   )
}
export default App;