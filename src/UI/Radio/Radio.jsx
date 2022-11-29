import React from 'react'
import Input from '../Input/Input';
import stl from './Radio.module.scss';
export default function Radio({label,id,name,value,...props}) {
  return (
    <div className={stl.Radio}>
        <Input 
            id={id}
            type={'radio'}
            name={name}
            value={value}
            checked={props.checked}
        />
        <label htmlFor={id}>{label}</label>

    </div>
  )
}
