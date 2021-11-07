import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (

    <nav>
      <div className="logo">
        <h1 >Good Vibes</h1>
      </div>

      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="current" to='/secrets'>Secrets </NavLink></li>
        <li><NavLink activeClassName="current" to='/quotes'>Quotes</NavLink></li>
        <li><NavLink activeClassName="current" to='/affirmations'>Affirmations</NavLink></li>
      </ul>
    </nav>

  )
}

export default Navigation
