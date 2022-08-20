import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.svg"
import * as Pages from "../utils/pageUrl"
export default function Navbar() {
  return (
    <nav className="container justify-between py-6">
      <ul className="hidden lg:block lg:justify-between gap-20">
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
      <ul className="hidden lg:block lg:justify-between gap-20">
        <li>Behance</li>
        <li>Dribble</li>
        <li>Instagram</li>
      </ul>
    </nav>
  )
}
