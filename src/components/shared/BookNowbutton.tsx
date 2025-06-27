import React from 'react';
import styled from 'styled-components';

const Booknow = () => {
  return (
    <StyledWrapper>
      <button className="shimmer-btn">
        <span className="shimmer-text">Book Now</span>
        <span className="shimmer-effect" />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .shimmer-btn {
    position: relative;
    display: inline-block;
    padding: 1rem 1.6rem;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    background: #ff8706;
    border: none;
    border-radius: 0.75rem;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 2px 16px 0 #ff8706a0;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .shimmer-btn:active {
    transform: scale(0.97);
    box-shadow: 0 0 8px 1px #ff8706;
  }
  .shimmer-text {
    position: relative;
    z-index: 2;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .shimmer-effect {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1;
    background: linear-gradient(120deg, transparent 30%, #fff8e1 50%, transparent 70%);
    opacity: 0.7;
    transform: translateX(-100%);
    animation: shimmer-move 1.8s infinite linear;
  }
  @keyframes shimmer-move {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

export default Booknow;
