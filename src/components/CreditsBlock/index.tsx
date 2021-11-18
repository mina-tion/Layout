
import React from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Button from 'components/Button'

import linkedin from './../../sources/images/linkedin.svg'
import facebook from './../../sources/images/facebook.svg'
import instagram from './../../sources/images/instagram.svg'

/* import classnames from 'classnames' */

const categoriesList = ['Popular', 'Kids', 'Sale', 'New', 'Men', 'Women']
const aboutList = ['Contacts', 'Support']
const iconList = [linkedin, facebook, instagram]


const CreditsBlock: React.FC = observer(() => {

  return (
    <div className={styles.creditsBlock}> 
      <div className={styles.brend}>
        <div className={styles.brendName}>
          Stone<span className={styles.blue}>Tile</span>
        </div>
        <ThemeSwitcher />
      </div>
      <div className={styles.mobButtonContainer}>
          <Button />
        </div>

      <div className={styles.container}>
        <div className={styles.title}>
          Categories
        </div>

        <div className={styles.listContainer}>
          <ul  className={styles.list}>
              <li key={0}><a href="" className={styles.listItem}>{'Popular'}</a></li>
              <li key={1}><a href="" className={styles.listItem}>{'Kids'}</a></li>
              <li key={2}><a href="" className={styles.listItem}>{'Sale'}</a></li>
              <li key={3}><a href="" className={styles.listItem}>{'New'}</a></li>
              <li key={4}><a href="" className={styles.listItem}>{'Men'}</a></li>
              <li key={5}><a href="" className={styles.listItem}>{'Women'}</a></li>
          </ul>
        </div>
    
      </div>

      <div className={styles.container}>
        <div className={styles.title}>
          About Us
        </div>
        <div className={styles.listContainer}>
          <ul className={""}>
              <li key={0}><a href="" className={styles.listItem}>{'Contacts'}</a></li>
              <li key={1}><a href="" className={styles.listItem}>{'Support'}</a></li>

          </ul>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <ul className={styles.list}>
          {
             iconList.map((item, index) => (
              <li key={index} className={styles.bgCircle}><a href="" className={styles.icon}> <img src={item} alt="" /></a></li>
            ))
          }
        </ul>

        <div className={styles.deskButtonContainer}>
          <Button />
        </div>

      </div>
  
    </div>

  )
})

export default CreditsBlock