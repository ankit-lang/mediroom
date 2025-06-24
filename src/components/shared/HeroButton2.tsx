import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import styled from 'styled-components';

const HeroButton2 = () => {
      return (
            <StyledWrapper>
                  <button>button</button>
            </StyledWrapper>
      );
}

const StyledWrapper = styled.div`
  button {
    padding: 1em 2em;
//     text-transform: uppercase;
 font-weight:bold;
    text-decoration: none;
    letter-spacing: 2px;
    color: transparent;
    border: 2px solid #fb923c ;
//     border-radius:5px;
    font-size: 14px;
    position: relative;
    font-family: inherit;
    background: transparent;
    cursor: pointer;
  }

  button::before {
    content: '  Book Your Stay';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fb923c ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  button:hover::before {
    left: 100%;
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }

  button::after {
    content: "Book Your Stay";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #fb951d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: scale(0) rotateY(0deg);
    opacity: 0;
  }

  button:hover::after {
    left: 0;
    transform: scale(1) rotateY(360deg);
    opacity: 1;
  }`;

export default HeroButton2;
