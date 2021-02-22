import React from 'react';
import styled from 'styled-components';
import bg from '../images/bg.jpg';
import Header from './Header';
import Board from './board';

const HeroSection = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .container__hero--secondary {
    display: flex;
    justify-content: center;
    margin: 5rem 0;
  }
  .colored {
    text-shadow: 0px 0px 10px black;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
`;
const HeroContainer = styled.div`
  justify-content: flex-start;
  position: relative;
  width: 100%;
  margin-top: 100px;
`;
const Left = styled.div`
  width: 50%;
  z-index: 1;
`;
const Greeting = styled.p``;
const Author = styled.h1``;
const Role = styled.h2``;
const Description = styled.p`
  width: 80%;
  margin: 50px 0;
  color: #bdbdbd;
  text-align: left;
`;
const Button = styled.a``;
const Right = styled.div`
  width: 50%;
  z-index: 1;
  position: relative;
  perspective: 700px;
`;


export default function Hero() {
  return (
    <HeroSection id='home'>
      <Header />
      <HeroContainer className='container hero__container'>
        <div className='container__hero--secondary container--secondary'>
          <Container className='container--primary'>
            <Left className='hero__left'>
              <Greeting className='colored'>Hi, I am</Greeting>
              <Author>Peter Mbugua</Author>
              <Role className='hero__sub'>Full Stack Web Developer</Role>
              <Description className='hero__desc section__desc'>
              I love learning new technologies, with focus on full stack technologies, front-end design and functionality. My personal style is simple, modern interactive, responsive and effective.
              </Description>
              <Button href='#projects' className='btn btn--primary'>
                See my work
              </Button>
            </Left>
            <Right className='hero__right'>
              <Board />
            </Right>
           
          </Container>
        </div>
      </HeroContainer>
    </HeroSection>
  );
}
