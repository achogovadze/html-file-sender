import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import EmailForAppointment from './components/Notifications/EmailForAppointment'
import Default from './components/Default/Default'
import axios from 'axios'

const elem = React.lazy(() => import('./components/Default/Default'))

const app = props => {

  useEffect(() => {
      axios.get('localhost:8000/')
      .then(res => {
        props.history.push(res.data.documentType)
      })
  }, [])

  let routes = (
    <Switch>
      <Route path='/emailForAppointment' component={EmailForAppointment} />
      <Route path='/smsForAppointment' component={EmailForAppointment} />
      <Route path='/emailForHTO' component={EmailForAppointment} />
      <Route path='/smsForHTO' component={EmailForAppointment} />
      <Route path='/' component={elem} />
    </Switch>
  )

  return routes
}

export default app;
