import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'styles/Theme';

const heartbeat = keyframes`
  from {
   transform: scale(1);
   transform-origin: center center;
   animation-timing-function: ease-out;
  }
  10% {
   transform: scale(0.97);
   animation-timing-function: ease-in;
  }
  17% {
   transform: scale(0.99);
   animation-timing-function: ease-out;
  }
  33% {
   transform: scale(0.97);
   animation-timing-function: ease-in;
  }
  45% {
   transform: scale(1);
   animation-timing-function: ease-out;
  }
`;

export const Container = styled.section`
  width: 400px;
  padding: 40px;
  margin: 20px auto;
  border-radius: 20px;
  outline: 3px dashed ${theme.colors.red};
  background-color: ${theme.colors.white};
`;

export const TitleMain = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  animation: ${heartbeat} 3s ease-in-out infinite;
`;

export const TitleSecond = styled.h2`
  margin-bottom: 20px;
`;

export const Options = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  flex-basis: calc((100% - 30px) / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${theme.colors.white};
  border-radius: 4px;
  border: 1px solid transparent;

  /* не можу розібратися, як використовувати кольори */
  border-color: ${props => {
    switch (props.name) {
      case 'good':
        return '#0aa335';
      case 'neutral':
        return '#2398d7';
      case 'bad':
        return '#b5153a';
      default:
        return 'black';
    }
  }};

  color: ${props => {
    switch (props.name) {
      case 'good':
        return '#0aa335';
      case 'neutral':
        return '#2398d7';
      case 'bad':
        return '#b5153a';
      default:
        return 'black';
    }
  }};

  transition-property: color, background-color, box-shadow;
  transition-delay: 250ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    color: ${theme.colors.white};
    background-color: ${props => {
      switch (props.name) {
        case 'good':
          return '#0aa335';
        case 'neutral':
          return '#2398d7';
        case 'bad':
          return '#b5153a';
        default:
          return 'white';
      }
    }};

    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Paragraf = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;
