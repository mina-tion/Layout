import styles from './styles.module.scss'
import React from 'react'
import { Layout } from 'antd'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from 'utils/login'


import ThemeSwitcher from './../ThemeSwitcher'
import MenuBar from '../MenuBar'
import AdditionalMenu from '../AdditionalMenu'
import Banner from './../Banner'
import Slogan from './../Slogan'
import OtherBlock from './../OtherBlock'
import ProductSection from 'components/ProductSection'
import CreditsBlock from 'components/CreditsBlock'

import newcollection from './../../sources/images/newcollection.jpg'
import newintown from './../../sources/images/newintown.jpg'

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
              <Content className={ `${styles.page}`}>
                <Banner img={newcollection} caption={['New', 'collection']} description='Inspired by city explorers. Made to move. Built for tomorrow'/>
                  <Slogan />  
                
                <div className={styles.productBlock}>
                  <ProductSection sectionName='Trending now' />
                  <ProductSection sectionName='Categories' />
                  <ProductSection sectionName={`Don't miss`} />
                </div>
              
                <Banner img={newintown} caption={['New', 'in Town']} description='Made to move. Built for tomorrow'/>
                  
              </Content>
              
              <Footer className={styles.footer}>
                <CreditsBlock /> 
                <OtherBlock />
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