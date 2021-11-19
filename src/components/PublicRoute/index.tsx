import React from 'react'
import { Layout } from 'antd'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from 'utils/login'

//style
import styles from './styles.module.scss'

//components
import ThemeSwitcher from './../ThemeSwitcher'
import MenuBar from '../MenuBar'
import AdditionalMenu from '../AdditionalMenu'
import BottomFooter from '../BottomFooter'
import TopFooter from './../TopFooter'
import HomePage from 'components/HomePage'

const { Header, Footer,  Content } = Layout;

const PublicRoute = ({ component: Component, restricted, ...rest }: any): any => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Layout className={styles.layout}>
            <Layout.Content className={styles.content}>
              <Header className={styles.header} >
                <ThemeSwitcher />
                <MenuBar />
                <AdditionalMenu />
              </Header>
              <Content className={ `${styles.container}`}>
                <HomePage />           
              </Content>
              <Footer className={styles.footer}>
                <TopFooter /> 
                <BottomFooter />
              </Footer >
              {/* <Component {...props} /> */}
            </Layout.Content>
          </Layout>
        )
      }
    />
  )
}

export default PublicRoute