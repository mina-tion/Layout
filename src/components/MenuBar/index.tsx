import React from 'react'
// style
import styles from './styles.module.scss'
import { Menu } from 'antd';

const MenuBar: React.FC = () => {

  return (

    <Menu
      onClick={()=>console.log("Pressed")}
      className={styles.menuList}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline">

        <Menu.Item key="1" className={styles.menuItem}>Home</Menu.Item>
        <Menu.Item key="2" className={styles.menuItem}>New</Menu.Item>
        <Menu.Item key="3" className={styles.menuItem}>Men</Menu.Item>
        <Menu.Item key="4" className={styles.menuItem}>Women</Menu.Item>
        <Menu.Item key="5" className={styles.menuItem}>Kids</Menu.Item>
        <Menu.Item key="6" className={styles.menuItem}>Sale</Menu.Item>
        <Menu.Item key="7" className={styles.menuItem}>More</Menu.Item>
  
    </Menu>
  )
}

export default MenuBar
