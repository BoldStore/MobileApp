import Grid3 from '../RandomGrid/grid3';
import Grid2 from '../RandomGrid/grid2';
import Grid1 from '../RandomGrid/grid1';
import Grid4 from '../RandomGrid/grid4';
import React from 'react';

const CollageComponent = props => {
  const min = 1;
  const max = 5;
  const rand = min + Math.floor(Math.random() * (max - min));
  const posts = [
    require('../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
    require('../../assets/images/dummyClothes/dress3.jpg'),
    require('../../assets/images/dummyClothes/varsity.jpg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
    require('../../assets/images/dummyClothes/dress4.jpeg'),
  ];

  return (
    <>
      {rand === 1 ? (
        <Grid1 posts={posts} navigation={props.navigation} />
      ) : (
        <></>
      )}
      {rand === 2 ? (
        <Grid2 posts={posts} navigation={props.navigation} />
      ) : (
        <></>
      )}
      {rand === 3 ? (
        <Grid3 posts={posts} navigation={props.navigation} />
      ) : (
        <></>
      )}
      {rand === 4 ? (
        <Grid4 posts={posts} navigation={props.navigation} />
      ) : (
        <></>
      )}
    </>
  );
};

export default CollageComponent;
