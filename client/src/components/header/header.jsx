import React from "react"
import { Navbar, Container } from 'react-bootstrap'

import './header.css'


export default function Header(props) {

  return <>
    <Navbar>
      <Navbar.Brand className= 'brand'>{props.heading}</Navbar.Brand>
    </Navbar>
  </>
}