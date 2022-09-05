
// Styled Components
import styled from "styled-components";

// Images
import Overview from "../../assets/images/chekkit/overview.svg";
import DesignProcess from "../../assets/images/chekkit/design.svg";
import DataGathering from "../../assets/images/chekkit/chart.svg";
import UserPoints from "../../assets/images/chekkit/user-pain-point.svg";
import Reviews from "../../assets/images/chekkit/review.svg";
import Users from "../../assets/images/chekkit/testimony.svg";
import Solution from "../../assets/images/chekkit/solution.svg";
import Architecture from "../../assets/images/chekkit/architecture.svg";
import UserFlow from "../../assets/images/chekkit/user-flow.svg";
import Sketches from "../../assets/images/chekkit/sketches.svg";
import Onboarding from "../../assets/images/chekkit/onboarding.svg";
import Homepage from "../../assets/images/chekkit/homepage.svg";
import Adding from "../../assets/images/chekkit/adding-product.svg";
import Tracking from "../../assets/images/chekkit/tracking.svg";
import Rewards from "../../assets/images/chekkit/rewards.svg";


import NextSection from "../../components/NextSection";
import { FLITWIRE, HOMEPAGE } from "../../utils/pageUrl";


export default function Chekkit() {
  const pageInfo = [
    {
      title: "Who are the Users",
      desc: "Based on the interviews, my research, and my general understanding of the target user base. I've crafted a few brief user stories to better identify and define who our users are, what they require, and why they need the product.",
      img: Users
    },
    {
      title: "Providing a solution",
      desc: "After the problem discovery and validation using these research methods, I Identified and defined difficulties, pain points, and solutions that may be redesigned to improve user experiences in attaining their end goal, prioritizing the earlier defined problems using the processes listed below.",
      img: Solution
    },
    {
      title: "Using insights to design",
      desc: "After defining the problem, validating the problem and potential solutions through user research, and investigating similar competitors to uncover similar patterns to aid in the design of the correct flow, The next stage is to explore creative solutions, create wireframes, and high-fidelity designs based on user feedback.",
    },
    {
      title: "information architecture",
      desc: "The navigation, structure, and components of the website and extension were visualised using information architecture. It also assisted in determining, via multiple iterations, which portions, pages, or structures are required and which are not. When building a new information architecture for ChekkitApp, one of the most important aspects was basing it on key user data gathered through user research.",
      img: Architecture
    },
    {
      title: "User flow",
      desc: "To avoid users from abandoning the application at onboarding phase, I would be focusing on building simpler onboarding flows and making the application's navigation as simple as possible.",
      img: UserFlow
    },
    {
      title: "Sketches",
      desc: "I collated and completed simple drawings, layout, features, and concepts based on the user research I had done when I finished designing the user flow.",
      img: Sketches
    },
    {
      title: "Wireframes",
      desc: "Based on preliminary user research and demands, I generated semi-low fidelity wireframes to help me focus on key functions, elements, and actions and suggest new product design improvements and layouts before starting the visual design.",
    },
    {
      title: "Style Guide",
      desc: "I created a style guide that contained type guides, colours, components, and icons guide. ",
    },
  ]
  return (
    <ComponentWithBigP className='container'>
      <HeadingSection>
        <p className='text-primary'>A redesign of ChekkitApp</p>
        <h3 className=''>A counterfeit detection and reporting application to protect people from fraudulent products.</h3>
        <ul className='items-center gap-6 my-6'>
          <li className='bg-primary-text'>UX Design</li>
          <li className='bg-primary-text'>UI Design</li>
          <li className='bg-primary-text'>Prototype &amp; Testing </li>
        </ul>
      </HeadingSection>

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
        <img src={DesignProcess} alt="" />
      </section>

      <section>
        <div>
          <h2 className="mb-6">Identifying The Problem</h2>
          <p>A user-friendly application should be easy to pick up with no effort; nevertheless, ChekkitApp's absence of various additional functionalities is a serious issue that has a negative impact on the product. Users may depart the site in favour of better opportunities on other platforms if it lacks essential features like reporting, point conversion to cash, and store locator. Through my interviews, I learned about users’ habits using ChekkitApp and feature requests for some other features they use in other applications.</p>
        </div>
        <div>
          <h3 className="font-bold text-2xl my-4">Data Gathering</h3>
          <p>To gain insight into what could be improved, changed or added, a simple survey research conducted. Here are the most important pieces of information gathered.</p>
          <img src={DataGathering} className="w-full mt-4" alt="" />
        </div>
        <div>
          <h3 className="font-bold text-2xl mt-6">User Pain Points</h3>
          <img src={UserPoints} className="w-full" alt="" />
        </div>
        <div>
          <h3 className="font-bold text-2xl my-6">Some customer reviews on Google playstore</h3>
          <img src={Reviews} className="w-full" alt="" />
        </div>
      </section>

      {
        pageInfo.map((item, index) => {
          return (
            <SectionAndImg>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <img src={item.img} alt="" />
            </SectionAndImg>
          )
        })
      }

      <WithoutSpacing>
        <h2>final visual design</h2>
        <h4 >Creating a seamless onboarding process to improve the retention rate of registration.</h4>
        <p>The splash screen, a series of sliding screens outlining the main features of the application, and the registration procedure are the first elements of the onboarding solution.
          For the splash screen, I chose to use symbols to represent scan, airtime, and cash as well as a picture of a person using their phone to scan and also shopping with the logo in the middle, which leads to a welcome page that gives you the choice to log in or sign up. The user can also just continue to scan from the welcome screen.</p>
        <p>In contrast to the outdated designs, I chose a more contemporary strategy for the sliding screens. People can immediately relate to what a picture says, unlike scan icons, which not everyone can recognise. For this reason, I chose an image of a person scanning a product.</p>
        <p>Since users are not all situated in Nigeria, I added a location field to the onboarding registration form. I also included a screen where users could obtain a one-time password to confirm their account using the phone number they had previously supplied. Users have also commented that they don't know what the PIN area is for when they sign up; thus, in my redesign, I used an icon in addition to words to clarify what the pin is for. Finally, I made sure I rectified the old design's neglect for users who forget their passwords.</p>
        <img src={Onboarding} alt="" />
        <h4 >Redesigning the homepage and adding more engaging functionalities.</h4>
        <p>I choose a design that is more up to date and has more functionality than the present design. Users would want to see certain features that were not included in the existing designs. With the help of the feedback I gathered, I made sure to keep the wallet balance while improving the appearance and ensuring that users could quickly use the scan button. Users also expressed dissatisfaction with not receiving notifications, so I added that to the homepage and other pages. Furthermore, a user should be able to access their account or profile from any tab on the application.</p>
        <p>Moving on to the Survey section, I included a collection of surveys from various brands on the homepage. I made care to provide brief but precise information about the surveys, such as the duration, amount of questions each survey contains, and the linked prize, on each survey card in addition to a survey tracker that allows users to keep track of the progress of each survey (the level they are in each survey). I included two more screens that the earlier designs did not have.</p>
        <img src={Homepage} alt="" />
        <h4>Reworking the product authentication interface and the procedures needed to confirm a product's authenticity.</h4>
        <p>The early design required many steps to confirm a product's authenticity. The basic design missed several crucial features and employed poor UX design, which had a negative impact on the experiences of many users. I developed solutions for the redesign based on research analysis and fundamental design concepts to establish a suitable layout structure with hierarchy, usability, and accessibility in mind.</p>
        <p>On scan completion, the outcome is either positive or negative. I took sure to create interactive popups for both successes and failures on the application for a better user experience.</p>
        <p>After a product has been verified, the confirmation message is the product information screen, which should provide comprehensive information about the product being verified. In comparison to the previous design, I have incorporated a few more significant details that the user will find extremely beneficial, such as the medicine pamphlets in case they require further important information.</p>
        <img src={Adding} alt="" />
        <h4>Keeping records of activities done on scanning as well as tracking report status.</h4>
        <p>One of the shortcomings of the app was pointed out to be the scan and report history, where users were unable to keep track of their scan and report activity. This issue was resolved by combining the report and scan operations into a single screen so that users could simultaneously monitor both actions. They can even go farther to discover additional details on a certain scan or report history.  Tracking of submitted reports to know the status of each report was well taken care of as well</p>
        <img src={Tracking} alt="" />
        <h4>Improving rewards and points into the scanning and survey-taking functions.</h4>
        <p>Chekkit participates in reward programs, one of the best ways to keep users returning. I carefully enhanced the points redemption process and kept track of how points were earned and used.</p>
        <img src={Rewards} alt="" />
      </WithoutSpacing>

      <SectionAndImg>
        <h2>Results and metrics</h2>
        <p>The redesign enhanced user experience and resulted in an increase in product authentications; our registration retention rate climbed by 80%. as the number of drop-offs during onboarding was low compared to before.  We also received over 100k product scans from consumers, up from 4k when I first started the revamp. Also, reviews from our apple appstore and google playstore was pretty impressive.</p>
      </SectionAndImg>

      <NextSection previous="Return Home" next="Flitwire"
        prevRoute={HOMEPAGE} nextRoute={FLITWIRE} />

    </ComponentWithBigP>
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

export const ComponentWithBigP = styled.div`
  @media (min-width: 1024px) { 
    p{
      font-size: 20px;
      line-height: 1.5;
    }
  }
`;

export const HeadingSection = styled.section`
  p{
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h3{
    line-height: 1.25;
    font-weight: 700;
    font-size: 2.25rem/* 48px */;
  }
`;
const SectionAndImg = styled.section`
  img{
    width: 100%;
  }
  p{
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const WithoutSpacing = styled(SectionAndImg)`
    h4{
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #242424;
    }
    p{
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
`