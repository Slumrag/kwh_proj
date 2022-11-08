import React from 'react'
import stl from './Button.module.scss'
export default function Button({children,...props}) {
  return (
    props.hasOwnProperty('href')?
    <a className={[stl.Button,props.className].join(' ')} href={props.href}>{children}</a>
    :
    <button className={[stl.Button,props.className].join(' ')} disabled={props.disabled}>{children}</button>
  )
}
