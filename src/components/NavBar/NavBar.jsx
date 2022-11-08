import React from 'react'
import NavLink from '../../UI/NavLink/NavLink'
import stl from './NavBar.module.scss'

export default function NavBar(props) {
  return (
    <ul className={stl.NavBar}>
      {props.links.map(link=><NavLink key={link.title}href={link.href}>{link.title}</NavLink>)}      
    </ul>
  )
}
