
export default function Footer() {
  return (
    <footer className="bg-[#290848] text-white py-10">
      <section className="container justify-between mt-8">
        <div className="text-3xl">
          <h3 className="font-bold mb-3">Have an idea?</h3>
          <p>Reach out to me</p>
        </div>
        <div>
          <ul className="items-center gap-10 mb-5">
            <li>Meet me</li>
            <li>Works</li>
            <li>Resume</li>
          </ul>
          <ul className="items-center gap-10">
            <li>Behance</li>
            <li>Dribble</li>
            <li>Instagram</li>
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
