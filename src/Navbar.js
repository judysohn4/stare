import React from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar flex justify-start items-start p-0 text-white">
           <div className="navbar bg-base-100 p-0">
  <div className="navbar-start">
    <div className="dropdown">
    <label tabindex={0} className="btn btn-ghost lg:hidden ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex={0} className="navd menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                    <li><NavLink to = {"/"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                    <li><NavLink to = {"/news"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>News</NavLink></li>
                    <li><NavLink to = {"/legal"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Legal Resources</NavLink></li>
                  <li tabindex={0}>
                    <details>
                      <summary className = "p-4">Multimedia</summary>
                      <ul className="p-2">
                      <li><NavLink to = {"/podcast"} >Podcast</NavLink></li>
                      <li><NavLink to = {"/web"}>AAPI Website</NavLink></li>
                      </ul>
                    </details>
                  </li>
                  <li><NavLink to = {"/about"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About us</NavLink></li>
                    </ul>
                  </div>
    <Link to = {"/"} className="btn btn-ghost normal-case text-xl">
      <div></div>
      <div>Stare Decisis</div>
    </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal h-1/4 text-lg">
                    <li><NavLink to = {"/"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                    <li><NavLink to = {"/news"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>News</NavLink></li>
                    <li><NavLink to = {"/legal"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Legal Resources</NavLink></li>
                  <li tabindex={0}>
                    <details>
                      <summary className = "p-4">Multimedia</summary>
                      <ul className="p-2 navd">
                      <li><NavLink to = {"/podcast"} >Podcast</NavLink></li>
                      <li><NavLink to = {"/web"}>AAPI Website</NavLink></li>
                      </ul>
                    </details>
                  </li>
                  <li><NavLink to = {"/about"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About us</NavLink></li>
                </ul>
              </div>
</div>
        </div>
    )
}

export default Navbar