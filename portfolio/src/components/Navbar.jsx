import React from 'react'
import { cn } from '../lib/utils'


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]
const Navbar = () => {
  return (
    <nav className={cn()}></nav>
  )
}

export default Navbar