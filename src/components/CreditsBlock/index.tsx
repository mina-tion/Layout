
import React from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Button from 'components/Button'

import linkedin from './../../sources/images/linkedin.svg'
import facebook from './../../sources/images/facebook.svg'
import instagram from './../../sources/images/instagram.svg'

import classnames from 'classnames'

const categoriesList = ['Popular', 'Kids', 'Sale', 'New', 'Men', 'Women']
const aboutList = ['Contacts', 'Support', 'Contacts', 'Support']
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

      <div className={styles.container}>
        <div className={styles.title}>
          Categories
        </div>

        <ul className={styles.list}>
          {
            categoriesList.map((item, index) => (
              <li key={index}><a href="" className={styles.listItem}>{item}</a></li>
            ))
          }
        </ul>
      </div>

      <div className={styles.container}>
        <div className={styles.title}>
          About Us
        </div>
      
          <ul className={styles.list}>
            {
              aboutList.map((item, index) => (
                <li key={index}><a href="" className={styles.listItem}>{item}</a></li>
              ))
            }
          </ul>
        
      </div>

      <div className={styles.iconContainer}>
        <ul className={styles.list}>
          {
             iconList.map((item, index) => (
              <li key={index} className={styles.bgCircle}><a href="" className={styles.icon}> <img src={item} alt="" /></a></li>
            ))
          }
        </ul>
        
        <Button />
      </div>



      
    </div>

  )
})

export default CreditsBlock