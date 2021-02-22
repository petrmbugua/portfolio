import React from 'react';
import styled from 'styled-components';
import BoardBox from './boardBox';

import aberdare from '../images/aberdare.webm';
import scog from '../images/scog.webm';
import digital from '../images/digital.webm';
import boiler from '../images/boiler.webm';

const BoardWrapper = styled.div`
  width: 100%;
  background: #212121;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 15px;
  top: -50px;
  padding-top: 56.25%;
  transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(-1deg);
`;
const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 10px solid #222;
`;

const Board = () => {
  return (
    <BoardWrapper className='board__container'>
      <Grid className='board__grid'>
        <BoardBox
          bgwebm={aberdare}
          title='Aberdare Flowers'
          url='https://aberdareflowers.co.ke/'
        />
        <BoardBox
          bgwebm={scog}
          title='Scog Flowers'
          url='https://www.scogflowers.com/'
        />
        <BoardBox
          bgwebm={boiler}
          title='Boiler Engineering East Africa Ltd'
          url='https://www.boilerengealtd.com/'
        />
        <BoardBox
          bgwebm={digital}
          title='Digital Stores'
          url='https://digital-stores.tech/'
        />
      </Grid>
    </BoardWrapper>
  );
};

export default Board;
