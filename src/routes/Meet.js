import styled from "styled-components";
// import Faydee from "../assets/images/faydee.svg";

export default function Meet() {
  return (
    <div className="container flex">
      <div className="w-full pt-8">
        <TextLight><span>Meet me</span></TextLight>
        <H1WithGradient className="">Interface<span>,</span> experience<span>,</span> Product<span>.</span></H1WithGradient>
        <DivWithPTag>
          <p>
           Hey! nice to meet you 👋 I am Faidat, but I am fondly called <em>Faydee</em>. I am a self-taught designer who uses design thinking, user research, and experience strategy to create user-centric products that help solves human problems.I aspire to solve user problems by creating unique, significant solutions that improve users' overall digital experiences. I am passionate about creating impactful products that balance business goals and users’ needs. I am currently crafting exciting products at <a className="font-bold cursor-pointer hover:text-primary duration-700 " href="https://chekkitapp.com" rel="noreferrer" target="_blank">Chekkit Technologies</a>,
          </p>
          <p>
          I started my tech career as a front-end developer before I ventured into product design full-time, which gives me an edge to communicate better with developers and also have an idea of what the functional part of products looks like. I have a proven track record of success, which I attribute to my ability to collaborate closely with team members and clients to fully grasp their needs and goals. I am proficient across various design tools such as Figma and Adobe Creative Suite. Experienced in Fintech, Healthtech, Logistics, Edtech, and more.
          </p>
          <p>
          I enjoy sleeping, making new friends, and traveling. I have recently launched my design page, <a className="font-bold cursor-pointer hover:text-primary duration-700 " href="https://www.instagram.com/faydeesigns/" rel="noreferrer" target="_blank">@Faydeesigns</a> on Instagram to train new designers just getting started in their design journey. I find it immensely rewarding and a way to give back to the design community. I also generally participate in speaking activities to share my journey into the tech space and design talks.
          </p>
        </DivWithPTag>
      </div>
      {/* <div>
        <img src={Faydee} alt="" />
      </div> */}
    </div>
  )
}




const H1WithGradient = styled.h1`
  background: linear-gradient(93.39deg, #794CFE 3.03%, #F07DC2 101.15%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-weight: 800;
  font-size: 3.75rem;
  line-height: 120%;
  letter-spacing: -2px;
  span{
    font-size: 4rem;
    background: linear-gradient(93.39deg, #000 3.03%, #000 101.15%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* color: black !important; */
  }
`;

const DivWithPTag = styled.div`
  p{
    margin-bottom: 1rem;
    &:last-of-type{
      margin-bottom: 0; 
    }
  }
`;

export const TextLight = styled.div`
  h3{
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    text-transform: capitalize;
    color: #9B51E0;
    margin: 10px 0;
  }
  span{
    background-color: #FCF9FF;
    color: #9B51E0;
    padding: 1rem;
    display: inline-block;
    border-radius: 1rem;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    h3{
      font-size: 28px;
    line-height: 36px;
    margin: 7px 0;
    }
    span{
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }
  }
`;
