
import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Button from 'components/Button'

import linkedin from './../../sources/images/linkedin.svg'
import facebook from './../../sources/images/facebook.svg'
import instagram from './../../sources/images/instagram.svg'
import classNames from 'classnames'

/* import classnames from 'classnames' */

const categoryArr = ['Popular', 'Kids', 'Sale', 'New', 'Men', 'Women']
const aboutArr = ['Contacts', 'Support']
const iconArr = [linkedin, facebook, instagram]


const CreditsBlock: React.FC = observer(() => {
  

  const [width, setWidth] = useState(document.documentElement.clientWidth)

  const onResize = () => {
    setWidth(document.documentElement.clientWidth)
  }
  
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [])


  
  const categoryList = (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {
          categoryArr.map((item, index) => (
            <li key={index} className={styles.listItem}><a href="" className={styles.link}>{item}</a></li>
          ))
        }
      </ul>
    </div> )  

  const iconList = (
    <ul className={styles.iconList}>
      {
        iconArr.map((item, index) => (
        <li key={index} className={styles.bgCircle}><a href="" className={styles.icon}> <img src={item} alt="" /></a></li>
       ))
      }
   </ul>
  )

  const aboutList = (
    <ul className={""}>
      {
        aboutArr.map((item, index) => (
        <li key={index} className={styles.listItem}><a href="" className={styles.link}>{item}</a></li>
        ))
      }
    </ul>
  )

  return (
  <div> 
    {
      (width < 500) ?
      <div className={styles.creditsBlock}>
        <div className={styles.brend}>
          <div className={styles.brendName}>Stone<span className={styles.blue}>Tile</span></div>
          <ThemeSwitcher />
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}><Button /></div>
        </div>
        

        <div className={styles.linksContainer}>
          <div className={styles.title}>
            Categories
          </div>
          {categoryList}
        </div>

      <div className={classNames(styles.linksContainer, styles.mob)}>
        <div className={styles.title}>
          About Us
        </div>
        <div className={styles.listContainer}>
          {aboutList}
          </div>{iconList}</div>
      </div>

    : <div className={styles.creditsBlock}>
      <div className={styles.brend}>
        <div className={styles.brendName}>
          Stone<span className={styles.blue}>Tile</span>
        </div>
          <ThemeSwitcher />
       </div>
  
      <div className={styles.linksContainer}>
        <div className={styles.title}>
          Categories
        </div>
        {categoryList}
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.title}>
          About Us
        </div>
        <div className={styles.listContainer}>{aboutList}</div>
      </div>

      <div className={styles.iconContainer}>
        {iconList}
        <div className={styles.button}><Button /></div>
      </div>
    </div>
    }
    </div>

  )
})

export default CreditsBlock