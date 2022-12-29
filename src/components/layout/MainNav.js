import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNav = () => {
  return (
    <div>
       <header className={classes.header}>
      <div className={classes.logo}> <Link to="/quotes" > Great Quotes </Link></div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/add-new-quotes' activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default MainNav
