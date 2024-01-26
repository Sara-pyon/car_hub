import Favorite from './Favorite';
import Login from './Login';
import './NavBar.css';
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import Corma from '../Corma';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props{
  background: string;
  location?:string;
}

const NavBar = ({background,location}:Props) => {
  const [toggled, setToggled] = useState(true);
  const toggle  = () => setToggled(!toggled);
  const navClass = toggled ? 'nav__list' : 'nav__list show';

  return (
    <Box className="nav" bg={background} 
          height={{base:'3rem', md:'4rem'}}>
        <Link to='/'>
          <Corma />
        </Link>
        <ul className={navClass}>
              <li className={`${location==='find' ? 'nav__item active' : 'nav__item'}`}>
                Find your Car</li>
              <li className={`${location==='sell' ? 'nav__item active' : 'nav__item'}`}>
                Sell or trade in</li>
              <li className={`${location==='how' ? 'nav__item active' : 'nav__item'}`}>
                How it works</li>
              <li className={`${location==='finance' ? 'nav__item active' : 'nav__item'}`}>
                Car finance</li>
              <IoCloseOutline className='toggle-close' 
                onClick={toggle}/>
          </ul>
          <div className="nav__icons">
            <Favorite />
            <Login />
            <IoMdMenu color='white' fontSize={20} 
              className='toggle-open' onClick={toggle}/>
          </div>
    </Box>
  )
}

export default NavBar