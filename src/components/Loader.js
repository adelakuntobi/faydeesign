import React from 'react'
import styled from 'styled-components'

export default function Loader() {
  return (
    <LoaderStyle>
      <span className='loader'></span>
    </LoaderStyle>
  )
}


const LoaderStyle = styled.div`
  .loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #F3E5FF;
  box-shadow: 32px 0 #F3E5FF, -32px 0 #F3E5FF;
  position: relative;
  animation: flash 0.3s ease-in infinite alternate;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  left: -64px;
  top: 0;
  background: #F3E5FF;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform-origin: 35px -35px;
  transform: rotate(45deg);
  animation: hitL 0.3s ease-in infinite alternate;
}

.loader::after {
  left: 64px;
  transform: rotate(-45deg);
  transform-origin: -35px -35px;
  animation: hitR 0.3s ease-out infinite alternate;
}

@keyframes flash {
  0%  , 100%{
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 0.25);
  }
  25% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 1);
  }
  50% {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 32px 0 rgba(255, 255, 255, 0.25), -32px 0 rgba(255, 255, 255, 0.25);
  }
  75% {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 32px 0 rgba(255, 255, 255, 1), -32px 0 rgba(255, 255, 255, 0.25);
  }
}

@keyframes hitL {
 0% {
   transform: rotate(45deg);
   background-color: rgba(255, 255, 255, 1);
  }
25% , 100% {
   transform: rotate(0deg);
  background-color: rgba(255, 255, 255, 0.25);
  }
}

@keyframes hitR {
 0% , 75% {
   transform: rotate(0deg);
   background-color: rgba(255, 255, 255, 0.25);
  }
 100% {
   transform: rotate(-45deg);
  background-color: rgba(255, 255, 255, 1);
  }
}
`