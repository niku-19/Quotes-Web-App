import React from 'react'
import style from "./Layout.module.css"
import MainNav from './MainNav'
const Layout = props => {
  return (
    <>
      <MainNav />
      <div className={style.main} >{props.children}</div>
    </>
  )
}

export default Layout
