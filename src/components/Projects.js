import React from 'react';
import styled from 'styled-components';
import Project from './Project';

import real from '../images/real.webm'

const ProjectsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #111;
  padding: 100px 0;
`;
const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px 20px;
  width: 100%;
`;
const Title = styled.h2``;
const Description = styled.p`
  text-align: center;
  margin: 50px 0;
  color: #bdbdbd;
`;
const Animation = styled.div`
  &:nth-of-type(2),
  &:nth-of-type(5),
  &:nth-of-type(8) {
    margin-top: 50px;
  }

  &:nth-of-type(3),
  &:nth-of-type(6),
  &:nth-of-type(9) {
    margin-top: 100px;
  }
`;

export default function Projects() {
  return (
    <ProjectsWrapper id='projects'>
      <div className='container container--secondary'>
        <div className='container container--primary'>
          <Title>My projects</Title>
          <Description className='work__desc section__desc'>
            Check out my portfolio!
          </Description>
          <WorkWrapper className='work__wrapper'>
            <Animation className='work--animation'>
              <Project title='Django Real Estate Website' bgwebm={real} github='https://github.com/petrmbugua/Django-Real-Estate-Website' external='https://github.com/petrmbugua/Django-Real-Estate-Website' />
            </Animation>
          </WorkWrapper>
        </div>
      </div>
    </ProjectsWrapper>
  );
}
