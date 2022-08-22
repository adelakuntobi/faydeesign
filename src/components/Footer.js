import { Link } from "react-router-dom"
import * as Pages from "../utils/pageUrl"

export default function Footer() {
  return (
    <footer className="bg-[#290848] text-white py-10">
      <section className="container flex  flex-col lg:flex-row gap-y-12 justify-between mt-8">
        <div className="text-3xl">
          <h3 className="font-bold mb-3">Have an idea?</h3>
          <p>Reach out to me</p>
        </div>
        <div>
          <ul className="items-center gap-20 mb-5">
            <Link to={Pages.MEET_ME}>
              <li>Meet me</li>
            </Link>
            <Link to={Pages.WORKS}>
              <li>Works</li>
            </Link>
            <li>Resume</li>
          </ul>
          <ul className="items-center gap-20">
          <li><a target='_blank' rel="noreferrer" href="https://www.behance.net/faidatakinwale">Behance</a></li>
        <li><a target='_blank' rel="noreferrer" href="https://dribbble.com/faydee">Dribbble</a></li>
        <li><a target='_blank' rel="noreferrer" href="https://instagram.com/faydeesigns">Instagram</a></li>
          </ul>
        </div>
      </section>
      <hr className="bg-[#53376C] border-[#53376C] max-w-2xl mx-auto my-7" />
      <div className="container text-center">
        <p><b>Faydeesigns</b> &copy; 2022</p>
      </div>
    </footer>
  )
}
