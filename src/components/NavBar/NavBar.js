import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="menu-navbar-container">

        <h1 className="menu-title">AC Skin</h1>
        <ul className="menu-items">
            <li>
            <a href='' className="menu-list">Productos</a>
            </li>
            <li>
            <a href='' className="menu-list">Quienes somos</a>
            </li>
            <li>
            <a href='' className="menu-list">Servicios</a>
            </li>
            <li>
            <a href='' className="menu-list">Registro</a>
            </li>
<CartWidget/>

        </ul>

    </div>
  )
}

export default NavBar