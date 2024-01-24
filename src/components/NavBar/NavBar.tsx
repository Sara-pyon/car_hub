import Favorite from './Favorite';
import Login from './Login';
import './NavBar.css';
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
import Corma from '../Corma';

const NavBar = () => {
  const [toggled, setToggled] = useState(false);
  const toggle  = () => setToggled(!toggled);
  const navClass = toggled ? 'nav__list' : 'nav__list show';

  return (
    <div className="nav">
        <Corma />
        <ul className={navClass}>
              <li className='nav__item'>Find your Car</li>
              <li className='nav__item'>Sell or trade in</li>
              <li className='nav__item'>How it works</li>
              <li className='nav__item'>Car finance</li>
              <IoCloseOutline className='toggle-close' 
                onClick={toggle}/>
          </ul>
          <div className="nav__icons">
            <Favorite />
            <Login />
            <IoMdMenu color='white' fontSize={20} 
              className='toggle-open' onClick={toggle}/>
          </div>
    </div>
  )
}

export default NavBar