import React from 'react';
import styled from 'styled-components';
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0;
`;
const Container = styled.div`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 50%;
`;
const Title = styled.h2``;
const Description = styled.p`
  width: 80%;
  margin-top: 50px;
  color: #bdbdbd;
  text-align: left;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 350px));
  margin-top: 25px;
`;
const Item = styled.li`
  position: relative;
  font-size: 14px;
  color: #bdbdbd;
  margin-bottom: 10px;

  &:hover {
    span {
      color: #02d463;
      transition: 0.2s;
    }
  }

  .skill__icon {
    margin-right: 15px;
    color: #02d463;
    width: 15px;
    height: 15px;
  }

  &.skill__jquery {
    transition: 0.2s;

    .skill__icon,
    span {
      color: #333;
    }

    span {
      text-decoration: line-through;
    }
  }
`;
const ItemText = styled.span``;

export default function About() {
  return (
    <AboutSection id='about'>
      <>
        <Container className='container container--primary about__container'>
          <Wrapper className='about__wrapper'>
            <Title>About me</Title>
            <Description className='section__desc'>
              I'm a self taught full stack web developer with a strong digital
              marketing background. I was drawn to the world of web development
              because of the endless possibilities and opportunities to grow and
              build.
            </Description>
            <Description className='section__desc'>
              Technologies that I use:
            </Description>
            <List>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'react']}
                  className='skill__icon'
                />
                <ItemText>Reactjs / Nextjs</ItemText>
              </Item>
             
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'js-square']}
                  className='skill__icon'
                />
                <ItemText>JavaScript / TypeScript</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'node-js']}
                  className='skill__icon'
                />
                <ItemText>Nodejs / Express</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'python']}
                  className='skill__icon'
                />
                <ItemText>Django / Python</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'php']}
                  className='skill__icon'
                />
                <ItemText>PHP</ItemText>
              </Item>
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'html5']}
                  className='skill__icon'
                />
                <ItemText>HTML</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'css3-alt']}
                  className='skill__icon'
                />
                <ItemText>CSS</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon icon={faDatabase} className='skill__icon' />
                <ItemText>MySQL</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon icon={faDatabase} className='skill__icon' />
                <ItemText>PostgreSQL</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon icon={faDatabase} className='skill__icon' />
                <ItemText>MongoDB</ItemText>
              </Item>
          
              <Item>
                <FontAwesomeIcon icon='fire' className='skill__icon' />
                <ItemText>Firebase</ItemText>
              </Item>

              
              <Item>
                <FontAwesomeIcon
                  icon={['fab', 'git']}
                  className='skill__icon'
                />
                <ItemText>Git</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon icon={faServer} className='skill__icon' />
                <ItemText>Namecheap</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon icon={faServer} className='skill__icon' />
                <ItemText>Digital Ocean</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon icon={faServer} className='skill__icon' />
                <ItemText>Heroku</ItemText>
              </Item>

              <Item>
                <FontAwesomeIcon icon={faServer} className='skill__icon' />
                <ItemText>Netlify</ItemText>
              </Item>

              
            </List>
          </Wrapper>
        </Container>
      </>
    </AboutSection>
  );
}
