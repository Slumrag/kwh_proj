import React from 'react'
import stl from './NavLink.module.scss';
export default function NavLink(props) {
  return (
    <li>
        <a href={props.href}className={stl.NavLink}>{props.children}</a>
    </li>
  )
}
