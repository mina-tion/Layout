import React from 'react'
import classNames from 'classnames'

//style
import styles from './styles.module.scss'

//components
import Banner from 'components/Banner'
import Slogan from 'components/Slogan'
import ProductSection from 'components/ProductSection'

//images
import newcollection from 'sources/images/newcollection.jpg'
import newintown from 'sources/images/newintown.jpg'



const HomePage = ({ component: Component, restricted, ...rest }: any): any => {
  return (
   
    <div>
      <div className={classNames(styles.bannerContainer, styles.topGradient)}>
        <Banner img={newcollection} caption={['New', 'collection']} description='Inspired by city explorers. Made to move. Built for tomorrow'/>
      </div>

        <Slogan />  

      <div className={styles.sectionsContainer}>
        <ProductSection sectionName='Trending now' />
        <ProductSection sectionName='Categories' />
        <ProductSection sectionName={`Don't miss`} />
      </div>

      <div className={classNames(styles.bannerContainer, styles.botGradient)}>
        <Banner img={newintown} caption={['New', 'in Town']} description='Made to move. Built for tomorrow'/>
      </div>
    </div>
  )
}

export default HomePage