import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './img/elision.png'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href=""><img src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
        <NavLink to='/caldata' className="nav-link">Add</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to='/getall' className="nav-link">List</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to='/katha' className="nav-link">Katha</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to='/cityadd' className="nav-link">cityadd</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to='/city' className="nav-link">city</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar