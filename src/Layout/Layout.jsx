import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './Layout.css';

function Header() {
  return (
    <>
        <header>
            <nav>
                <Link to='/'><FontAwesomeIcon icon={faHouse} /></Link>
            </nav>
        </header>
        <Outlet />
    </>
  )
}

export default Header