// React Icons
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"
import styled from "styled-components";

export default function NextSection(props) {
  const { previous, next } = props
  return (
    <NextDiv>
      <p><MdOutlineKeyboardArrowLeft className='text-5xl' />{previous}</p>
      <p>{next}<MdOutlineKeyboardArrowRight className='text-5xl' /></p>
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
  p{
    display: flex;
    align-items: center;    
    color: rgba(36, 36, 36, 0.7);
    text-transform: capitalize;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -1px;
    svg{
      fill: #242424
    }
  }
`;