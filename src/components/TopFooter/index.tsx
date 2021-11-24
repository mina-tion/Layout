

import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'

// components
import Button from 'components/Button'
import BrendComponent from 'components/BrendComponent'
import classNames from 'classnames'

//utils
import {categoryArr, aboutArr, iconArr} from 'utils/footerLists'

const TopFooter: React.FC = observer(() => {
  

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
      (width < 500) 
      ? //Footer for mobile view
      <div className={styles.creditsBlock}>
        <BrendComponent />
        <div className={styles.buttonContainer}><div className={styles.button}><Button /></div></div>

        <div className={styles.linksContainer}>
          <h2 className={styles.title}> Categories </h2>
          {categoryList}
        </div>

      <div className={classNames(styles.linksContainer, styles.mob)}>
        <h2 className={styles.title}> About Us </h2>
        <div className={styles.listContainer}>
          {aboutList}
          </div>{iconList}</div>
       </div>
      //------------------------------------------
    : //Footer for desktop view
      <div className={styles.creditsBlock}>
        <BrendComponent />
        
        <div className={styles.linksContainer}>
          <h2 className={styles.title}> Categories</h2>
          {categoryList}
        </div>

        <div className={styles.linksContainer}>
          <h2 className={styles.title}> About Us </h2>
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

export default TopFooter
