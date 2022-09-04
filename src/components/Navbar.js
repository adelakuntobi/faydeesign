import { Link } from "react-router-dom"
import * as Pages from "../utils/pageUrl"
import Logo from "../assets/images/logo.svg"


import { useLocation, useNavigate } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { useState } from "react"
import { scroller } from 'react-scroll';


export default function Navbar() {
  const [openNav, setOpenNav] = useState(false)

  const path = useLocation().pathname;
  const history = useNavigate();
  // const scroller = Scroll.scroller;


  const scroll = async (name) => {
    setOpenNav(false)
    if (path === '/') {
      console.log(name)
      scroller.scrollTo(name, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        isDynamic: true,
        ignoreCancelEvents: false,
        spyThrottle: 500,
      });
    }
    else {
      await history('/');
      await scroller.scrollTo(name, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        isDynamic: true,
        ignoreCancelEvents: false,
        spyThrottle: 500,
      });
    }
  };
  return (
    <nav className="container justify-between py-6">
      <ul className="hidden lg:flex lg:justify-between gap-20">
        <Link to={Pages.MEET_ME}>
          <li>Meet me</li>
        </Link>
        {/* <Link to={Pages.WORKS}> */}
          <li className="cursor-pointer" onClick={() => scroll("works")}>Works</li>
        {/* </Link> */}
        <li>Resume</li>
      </ul>
      <Link to={Pages.HOMEPAGE} className="items-center gap-3">
        <img src={Logo} alt="" />
        <h4 className="font-bold text-lg">Faydeesigns</h4>
      </Link>
      <GiHamburgerMenu className="text-2xl flex lg:hidden cursor-pointer" onClick={() => setOpenNav(true)} />
      <CgClose className={`absolute top-10 right-10 text-2xl cursor-pointer ${openNav ? "block" : "hidden"}`}
            onClick={() => setOpenNav(false)} />
      <ul className="hidden lg:flex lg:justify-between gap-20">
        <li><a target='_blank' rel="noreferrer" href="https://www.behance.net/faidatakinwale">Behance</a></li>
        <li><a target='_blank' rel="noreferrer" href="https://dribbble.com/faydee">Dribbble</a></li>
        <li><a target='_blank' rel="noreferrer" href="https://instagram.com/faydeesigns">Instagram</a></li>
      </ul>
    </nav>
  )
}
