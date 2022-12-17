import React from 'react'
import css from './Header.module.css'
import Logo from "../../assets/logo.png"

function Header() {
  return (
    <div className={css.container}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>Bofulo</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
              
            </div>
            <input type="text" className={css.search} />
            <span>PNG Icon of Cart</span>
        </div>
    </div>
  )
}

export default Header