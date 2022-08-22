import { Link } from "react-router-dom"
import * as Pages from "../utils/pageUrl"
import Logo from "../assets/images/logo.svg"
export default function Navbar() {
  return (
    <nav className="container justify-between py-6">
      <ul className="hidden lg:flex lg:justify-between gap-20">
        <Link to={Pages.MEET_ME}>
          <li>Meet me</li>
        </Link>
        <Link to={Pages.WORKS}>
          <li>Works</li>
        </Link>
        <li>Resume</li>
      </ul>
      <Link to={Pages.HOMEPAGE} className="items-center gap-3">
        <img src={Logo} alt="" />
        <h4 className="font-bold text-lg">Faydeesigns</h4>
      </Link>
      <ul className="hidden lg:flex lg:justify-between gap-20">
        <li><a target='_blank' rel="noreferrer" href="https://www.behance.net/faidatakinwale">Behance</a></li>
        <li><a target='_blank' rel="noreferrer" href="https://dribbble.com/faydee">Dribbble</a></li>
        <li><a target='_blank' rel="noreferrer" href="https://instagram.com/faydeesigns">Instagram</a></li>
      </ul>
    </nav>
  )
}
