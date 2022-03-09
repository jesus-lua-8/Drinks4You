import React, {useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import icon from '../images/Drinks4U.gif';
import { Link } from 'react-router-dom';
import { HomeOutlined, WalletOutlined , FilterOutlined, MenuOutlined } from '@ant-design/icons';

/**
 * returns the navbar with three tab options.
 */
const Navbar = () => {

  //This useState hook will allows us to change the navbar section when ever the size of the window changes.
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() =>{
    const handleResize = () => setScreenSize(window.innerWdith);

    window.addEventListener('resize',handleResize);
    handleResize();

    return () => window.removeEventListener('resize',handleResize);
  },[])

  useEffect(() =>{
    if(screenSize < 768){
      setActiveMenu(false);
    }
    else{
      setActiveMenu(true);
    }
  },[screenSize])

  return (
    <>
      <div className='nav-container'>
          <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
              <Link to='/'>Drinks4U</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() =>{setActiveMenu(true)}}>
              <MenuOutlined />
            </Button>
          </div>
          {activeMenu && (
            <Menu theme='light'>
              <Menu.Item icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FilterOutlined/>}>
                <Link to='/cocktails'>Cocktails</Link>
              </Menu.Item>
              <Menu.Item icon={<WalletOutlined/>}>
                <Link to='/recipes'>Recipes</Link>
              </Menu.Item>
            </Menu>
          )}
          
      </div>
    </>
  )
}

export default Navbar