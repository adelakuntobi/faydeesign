import Overview from "../../assets/images/chekkit-overview.svg";

export default function Chekkit() {
  return (
    <div className='container'>
      <section>
        <p className='uppercase text-primary font-bold'>A redesign of ChekkitApp</p>
        <h2 className=' text-5xl font-bold leading-tight'>A counterfeit detection and reporting application to protect people from fraudulent products.</h2>
        <ul className='items-center gap-6 my-6'>
          <li className='bg-primary-text'>UX Design</li>
          <li className='bg-primary-text'>UI Design</li>
          <li className='bg-primary-text'>Prototype &amp; Testing </li>
        </ul>
      </section>

      <section className="!pt-0 flex-col lg:flex-row justify-between items-center gap-x-20 gap-y-10">
        <img src={Overview} alt="Overview" className="w-full lg:w-6/12" />
        <div className="w-full lg:w-6/12">
          <h4>Overview</h4>
          <p>Chekkit offers verification and anti-counterfeiting solutions using Blockchain by protecting manufacturers and consumers against fake products They also participate in reward programs, which are one of the most effective strategies to increase user loyalty. </p>
          <div>
            <div>
              <label>Duration</label>
              <h5>April 2021 - Present</h5>
            </div>
            <div>
              <label>Tools</label>
              <h5>Figma, Figjam, Pen &amp; Paper</h5>
            </div>
          </div>
          <p>Link to live project <a href="https://www.gooogle.com" className="text-[#5271FF]">Check out the app on playstore</a></p>
        </div>
      </section>
    </div>
  )
}
