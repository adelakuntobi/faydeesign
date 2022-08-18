import styled from "styled-components";
import Overview from "../../assets/images/chekkit/overview.svg";
import DesignProcess from "../../assets/images/chekkit/design.svg";

export default function Chekkit() {
  return (
    <div className='container'>
      <section>
        <p className='uppercase text-primary font-bold'>A redesign of ChekkitApp</p>
        <h3 className=' text-5xl font-bold leading-tight'>A counterfeit detection and reporting application to protect people from fraudulent products.</h3>
        <ul className='items-center gap-6 my-6'>
          <li className='bg-primary-text'>UX Design</li>
          <li className='bg-primary-text'>UI Design</li>
          <li className='bg-primary-text'>Prototype &amp; Testing </li>
        </ul>
      </section>

      <section className="!pt-0 flex-col lg:flex-row justify-between items-center gap-x-20 gap-y-10">
        <img src={Overview} alt="Overview" className="w-full lg:w-6/12" />
        <div className="w-full lg:w-6/12">
          <h2>Overview</h2>
          <p className="py-4">Chekkit offers verification and anti-counterfeiting solutions using Blockchain by protecting manufacturers and consumers against fake products They also participate in reward programs, which are one of the most effective strategies to increase user loyalty. </p>
          <Options className="items-center pt-2 mb-6">
            <div>
              <label>Duration</label>
              <h5>April 2021 - Present</h5>
            </div>
            <hr />
            <div>
              <label>Tools</label>
              <h5>Figma, Figjam, Pen &amp; Paper</h5>
            </div>
          </Options>
          <p className="text-[#010136B8]">Link to live project <a href="https://play.google.com/store/apps/details?id=com.chekkitapp.android&hl=en&gl=US" className="text-[#5271FF] italic">Check out the app on playstore</a></p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
        <div>
          <h2 className="mb-6">Role</h2>
          <p className="leading-8">As a product designer at Chekkit Technologies, I was responsible for redesigning the brand, overall experience, and deliverables such as user stories, user flow, information architecture, wireframes (lo-fi & hifi) visual design, and a clickable prototype in order to improve and grow the number of monthly and daily active users, as well as installation usage, on the ChekkitApp.</p>
        </div>
        <div>
          <h2 className="mb-6">Objective</h2>
          <ol className=" list-decimal pl-5 leading-8">
            <li>Identify usability issues through user research.</li>
            <li>Create and validate design solutions.</li>
            <li>Simplify and improve the onboarding process for the users</li>
            <li>Enhance the application's usability and make it more user-friendly.</li>
            <li>Boost accessibility.</li>
            <li>Reducing the number of steps to reach goals.</li>
            <li>Improve users’ trust for ChekkitApp.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Design Process</h2>
        <img src={DesignProcess} className="w-full" alt="" />
      </section>

      <section>
        <h2 className="mb-6">Identifying The Problem</h2>
        <p>A user-friendly application should be easy to pick up with no effort; nevertheless, ChekkitApp's absence of various additional functionalities is a serious issue that has a negative impact on the product. Users may depart the site in favour of better opportunities on other platforms if it lacks essential features like reporting, point conversion to cash, and store locator. Through my interviews, I learned about users’ habits using ChekkitApp and feature requests for some other features they use in other applications.</p>
        <h3 className="font-bold text-2xl my-4">Data Gathering</h3>
        <p>To gain insight into what could be improved, changed or added, a simple survey research conducted. Here are the most important pieces of information gathered.</p>
      </section>

      <section>
        <h2>Who are the Users</h2>
      </section>
    </div>
  )
}



const Options = styled.div` 
  display: flex;
  align-items: center; 
  gap: 1rem;
  
  label{
    color: #010136B8;
  }
  h5{
    color: #010136;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
div:first-of-type{
  padding-right: 2.5rem;
  border-right: 2px solid #EDDAFF
}
`;