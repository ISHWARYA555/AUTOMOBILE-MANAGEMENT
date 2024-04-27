import {AppBar,Toolbar,styled, Avatar} from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import p1 from './ams.jpg'
const Header =styled(AppBar)`
background: #311111
`;
const Tabs =styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`
function Navbar() {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
            <Avatar src={p1}alt='ams.jpg' width={40} height="40"></Avatar>                
            <Tabs to='/'>AMS</Tabs>
                <Tabs to='/NewCars'>NewCar</Tabs>
                <Tabs to='/RentCars'>RentCar</Tabs>
                <Tabs to='/add'>Car Booking</Tabs>
                <Tabs to='/all'>My Bookings</Tabs>
                <Tabs to='/login'>Signup/Signin</Tabs>
                
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar;