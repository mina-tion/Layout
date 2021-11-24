
import React from 'react'
import { observer } from 'mobx-react'
//style
import styles from './styles.module.scss'

//components
import CategoryCard from 'components/CategoryCard'

// utils
import { categories } from 'utils/categories'


const DontMissList: React.FC = observer(() => {


  return (
    <div className={styles.list}> 
      { categories.map((item)=> ( <div key={item.id} className={styles.card}>
                                      <CategoryCard img={item.img} name={item.name}/>
                                  </div>))
      }                       
    </div>

  )
})

export default DontMissList