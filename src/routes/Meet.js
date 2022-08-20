import styled from "styled-components";
import Faydee from "../assets/images/faydee.svg";

export default function Meet() {
  return (
    <div className="container flex">
      <div className="w-full lg:w-8/12 pt-8">
        <TextLight><span>Meet me</span></TextLight>
        <H1WithGradient className="">Interface<span>,</span> experience<span>,</span> Product<span>.</span></H1WithGradient>
        <DivWithPTag>
          <p>
            I am a self-taught designer who uses design thinking, user research, and experience strategy to create user centric products. I currently work as a Product Designer at <a className="font-bold cursor-pointer hover:text-primary duration-700 " href="https://chekkitapp.com" rel="noreferrer" target="_blank">Chekkit Technologies</a>, saving lives by helping people differentiate original products from fake ones.
          </p>
          <p>
            My current position as a Designer has allowed me to hone my design skills while also participating in design thinking, sketching, user research, interaction and prototyping, product wireframing, visualization, testing, analyzing, communicating and frontend development (HTML and CSS). I am a skilled user of design software such as Figma and Adobe products such as PS, Ai, and XD.
          </p>
          <p>
            I have been a product designer for around three years, and throughout that time I have developed a strong understanding of the design process and learned how to make things that are both functional and user-friendly. I aspire to solve user problems by creating unique, significant solutions that improve users' overall digital and offline experiences. I have a proven track record of success, which I attribute to my ability to collaborate closely with team members and clients to fully grasp their needs and goals.
          </p>
          <p>
            When I am off the canvas, I help upcoming designers grow through thought leadership content across my social media channels.
          </p>
        </DivWithPTag>
      </div>
      <div>
        <img src={Faydee} alt="" />
      </div>
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
