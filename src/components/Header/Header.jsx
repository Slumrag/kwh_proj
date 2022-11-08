import React from 'react'
import stl from './Header.module.scss';
import NavBar from '../NavBar/NavBar';
import Button from "../../UI/Button/Button";
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';

export default function Header(props) {
  const links = [
		{ title: 'услуги', href: '#' },
		{ title: 'о компании', href: '#' },
		{ title: 'контакты', href: '#' },
		{ title: 'расценки', href: '#' },
	];
  return (
    <header className={[stl.Header, 'container'].join(' ')}>
        <a className={stl.logo} href="#"><Logo /></a>
        <NavBar links={links}></NavBar>
        <Button href="#" className={stl.right}>зарегистрироваться</Button>
    </header>
  )
}
