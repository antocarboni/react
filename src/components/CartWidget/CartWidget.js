import React from 'react'
import logo from '../assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_navbar__logo'>
        <a href="">
        <img className='menu-navbar__img' src={logo} alt="foto del carrito"></img>
        </a>
    </div>
  )
}

export default CartWidget