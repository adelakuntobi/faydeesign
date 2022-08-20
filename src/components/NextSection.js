// React Icons
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NextSection(props) {
  const { previous, next, prevRoute, nextRoute } = props
  return (
    <NextDiv>
      <Link to={prevRoute}><MdOutlineKeyboardArrowLeft className='text-5xl' />{previous}</Link>
      <Link to={nextRoute}>{next}<MdOutlineKeyboardArrowRight className='text-5xl' /></Link>
    </NextDiv>
  )
}

export const NextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 8rem auto;
  width: 100%;
  max-width: 600px;
  a{
    display: flex;
    align-items: center;    
    color: rgba(36, 36, 36, 0.7);
    text-transform: capitalize;
    font-weight: 700;
    font-size: 20px;
    /* letter-spacing: -1px; */
    svg{
      fill: #242424
    }
  }
`;