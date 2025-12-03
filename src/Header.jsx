import './header.css';
import logo from '../allpic/logo-Photoroom.png';
import { Link } from 'react-scroll';
import { FaRegMessage } from "react-icons/fa6";
import menu from '../allpic/menu.png'
import { useState } from 'react';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} className='logo' alt="logo"/>
        <div className="deskmenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="deskmenuitem">Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="deskmenuitem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="deskmenuitem">Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className="deskmenuitem">Clients</Link>
        </div>
        <button className="contactMe" onClick={() =>{
          document.getElementById('contacts').scrollIntoView({behavior:'smooth'});
        }}>
            <FaRegMessage /><p>Contact Me</p>
        </button>

        <img src={menu} className='mobmenu' alt="menu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navmenu" style={{display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="Listitem" onClick={()=>{setShowMenu(false)}}>Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={()=>{setShowMenu(false)}}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
            <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={()=>{setShowMenu(false)}}>Clients</Link>
            <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={()=>{setShowMenu(false)}}>Contact</Link>
        </div>
        
    </nav>
  )
}

export default Header
