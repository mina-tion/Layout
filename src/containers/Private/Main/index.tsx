import React from 'react'
import { observer } from 'mobx-react'

//components
import ThemeSwitcher from 'components/ThemeSwitcher'
import MenuBar from 'components/MenuBar'
import AdditionalMenu from 'components/AdditionalMenu'
import BottomFooter from 'components/BottomFooter'
import TopFooter from 'components/TopFooter'
import HomePage from 'components/HomePage'

// style
import styles from './styles.module.scss'



const Main: React.FC = observer(() => {
  return <div className={styles.layout}>
            <div className={styles.content}>
              <header className={styles.header} >
                <ThemeSwitcher />
                <MenuBar />
                <AdditionalMenu />
              </header>
              <main className={ `${styles.container}`}>
                <HomePage />           
              </main>
              <footer className={styles.footer}>
                <TopFooter /> 
                <BottomFooter />
              </footer >
            </div>
         </div>
})  

export default Main


