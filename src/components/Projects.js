import React from 'react';
import styled from 'styled-components';
import Project from './Project';

import real from '../images/real.webm';
import mern_ecommerce from '../images/mern-ecommerce.webm';
import typescript_cart from '../images/typescript-cart.webm';
import delivery from '../images/delivery.webm'


import aberdare from '../images/aberdare.webm';
import scog from '../images/scog.webm';
import digital from '../images/digital.webm';
import boiler from '../images/boiler.webm';


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
              <Project
                title='MERN Delivery Web App'
                bgwebm={delivery}
                github='https://github.com/petrmbugua/mern-delivery-website'
                external='https://tranquil-hamlet-31910.herokuapp.com/'
              />
            </Animation>

            <Animation className='work--animation'>
              <Project
                title='Django Real Estate Website'
                bgwebm={real}
                github='https://github.com/petrmbugua/Django-Real-Estate-Website'
                external='https://github.com/petrmbugua/Django-Real-Estate-Website'
              />
            </Animation>

            <Animation className='work--animation'>
              <Project
                title='MERN Ecommerce Project'
                bgwebm={mern_ecommerce}
                github='https://github.com/petrmbugua/mern-ecommerce'
                external='https://github.com/petrmbugua/mern-ecommerce'
              />
            </Animation>

            <Animation className='work--animation'>
              <Project
                title='React TypeScript Project'
                bgwebm={typescript_cart}
                github='https://github.com/petrmbugua/Shopping-Cart-with-React-and-TypeScript'
                external='https://github.com/petrmbugua/Shopping-Cart-with-React-and-TypeScript'
              />
            </Animation>

            <Animation className='work--animation'>
              <Project
                title='Django Flowers Website'
                bgwebm={scog}
                github='https://github.com/petrmbugua'
                external='https://www.scogflowers.com/'
              />
            </Animation>

            <Animation className='work--animation'>
              <Project
                title='Django Engineering Website'
                bgwebm={boiler}
                github='https://github.com/petrmbugua'
                external='https://www.boilerengealtd.com/'
              />
            </Animation>

            <Animation className='work--animation'>
              <Project
                title='Django Ecommerce'
                bgwebm={digital}
                github='https://github.com/petrmbugua'
                external='https://digital-stores.tech/'
              />
            </Animation>

            <Animation className='work--animation'>
              <Project
                title='Flowers Landing Page'
                bgwebm={aberdare}
                github='https://github.com/petrmbugua'
                external='https://aberdareflowers.co.ke/'
              />
            </Animation>

          </WorkWrapper>
        </div>
      </div>
    </ProjectsWrapper>
  );
}
