import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from 'utils/login'

//style
import styles from './styles.module.scss'


const PublicRoute = ({ component: Component, restricted, ...rest }: any): any => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to="/" />
        ) : (
             <Component {...props} /> 
        )
      }
    />
  )
}

export default PublicRoute