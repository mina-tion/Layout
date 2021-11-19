import React from 'react'
import { Menu } from 'antd';

// style
import styles from './styles.module.scss'



const menuItems = [ {id: '1', name: 'Home'},
                    {id: '2', name: 'New'},
                    {id: '3', name: 'Men'},
                    {id: '4', name: 'Women'},
                    {id: '5', name: 'Kids'},
                    {id: '6', name: 'Sale'},
                    {id: '7', name: 'More'},
]


const MenuBar: React.FC = () => {

  const menuList = menuItems.map((item)=>(
    <Menu.Item key={item.id} className={styles.menuItem}>{item.name}</Menu.Item>
  ))

  return (

    <Menu
      onClick={()=>console.log("Pressed")}
      className={styles.menuList}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline">
       {menuList}
    </Menu>
  )
}

export default MenuBar
