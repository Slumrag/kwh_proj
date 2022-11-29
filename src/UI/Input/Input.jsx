import React from 'react'
import stl from './Input.module.scss'

export default function Input({type,value,id,name,...props}) {
  return (
    <input 
      className={stl[type]} 
      type={type} 
      id={id} 
      name={name}
      value={value}
      checked={props.checked}>
    </input>
  )
}
