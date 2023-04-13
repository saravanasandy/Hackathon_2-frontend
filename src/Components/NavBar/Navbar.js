import React, { useEffect, useState } from 'react'
import { Button, Drawer, Space } from 'antd';

import {  Modal } from 'antd';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");


    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [placement, setPlacement] = useState('left');
      
    
    
      // logout
    let navigate = useNavigate();


    // const logout = ()=>{
    //     navigate("/")
    // }

      const [Logout,SetLogout] = useState(false);

      // useEffect(()=>{
    
      // if(!localStorage.setItem('auth', true))  navigate('/');
    
      //    },[Logout]);

      // useEffect(()=>{
    
      // if(!localStorage.setItem('auth', true))  navigate('/');
    
      //    },[Logout]);

      const logout = (e)=>{
        e.preventDefault();
        // if(!localStorage.setItem('auth', true))  navigate('/');
        localStorage.removeItem('auth')
        // SetLogout(true);

        navigate('/')
       
      }

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  

    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };


    return (
      <nav className="nav">
        <a href="#" className="nav__brand">
        Money _  Manager _ Web Application
        </a>
        <ul className={active}>
        <>
      <Space>
      
        <Button  onClick={showDrawer}>
              Home
        </Button>
       
      </Space>
      <Drawer
        title="Income & Expense details"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >

        <hr/>
        <div className='inner-box'>
          <Link to = "/portal/">
          <Button type='primary'>DashBoard...</Button>
          </Link>
        </div>

         <hr/>
        <div className='inner-box'>
          <Link to = "/portal/income">
          <Button type='primary'>Income Details...</Button>
          </Link>
        </div>
        
        <hr/>
        <div className='inner-box'>
        <Link to = "/portal/expenses">
        <Button type='primary'>Expenditure  Details...</Button>
          </Link>
        </div>
       
        <hr/>

      </Drawer>
    </>
          
          <li className="nav__item">
          <Button  onClick={() => setOpen2(true)}>
          Add Income & Expense
      </Button>
      <Modal
        title="Add Income & Expense"
        centered
        open={open2}
        onOk={() => setOpen2(false)}
        onCancel={() => setOpen2(false)}
        width={1000}
        
      >
        <br/>
        <div >
          <Link to = "/portal/income"> 
          <Button type = 'primary' className='togle-buttons'>Add Income </Button> 
          </Link>
            <Link  to = "/portal/expenses">
            <Button  type = "primary" className='togle-buttons'>Add Expense</Button>
            </Link>
        </div>
       
      </Modal>
           
          </li>
    
          
          <li className="nav__item">
            <button  className="nav__button" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    )
}

export default Navbar;



    
   



