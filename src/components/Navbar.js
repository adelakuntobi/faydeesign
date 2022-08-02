import Logo from "../assets/images/logo.svg"
export default function Navbar() {
  return (
    <nav className="container justify-between py-6">
      <ul className="justify-between gap-20">
        <li>Meet me</li>
        <li>Works</li>
        <li>Resume</li>
      </ul>
      <div className="items-center gap-3">
      <img src={Logo} alt="" />
      <h4 className="font-bold text-lg">Faydeesigns</h4>
      </div>
      <ul className="justify-between gap-20">
        <li>Behance</li>
        <li>Dribble</li>
        <li>Instagram</li>
      </ul>
    </nav>
  )
}
