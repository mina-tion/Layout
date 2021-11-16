
import React from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import Category from './../CategoryCard'

//images
import women from './../../sources/images/women.jpg'
import men from './../../sources/images/men.jpg'
import kids from './../../sources/images/kids.jpg'

const CategoryList: React.FC = observer(() => {

  return (
       <div className={styles.list}>
          <Category img={women} name='Women' />
          <div className={styles.column}>
            <Category img={kids} name='Kids' />
            <Category img={men} name='Men' /> 
          </div>        
      </div>

  )
})

export default CategoryList