import React, { Component } from 'react';
import styled from 'styled-components';
// import bannerImage from '../../pics/baybridge_banner.png';
import bannerImage from '../../../pics/baybridge_banner.png';

// const StyledBanner = styled.section`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   font-weight: 600px;
//   color: white;
//   height: 100%;
//   width: 100%;
//   object-fit: contain;
//   background-image: url(${bannerImage});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-color: black;
//   object-fit: contain;
//   height: 607px;
// `;

// const BannerQuoteContainer = styled.div`
//   font-size: 150%;
//   font-weight: 400;
//   color: black;
//   background-color: rgba(255, 255, 255, 0.65);
//   padding: 30px 50px;
//   border-radius: 10px;
//   min-width: 200px;
//   max-width: 800px;
// `;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
class Banner extends Component {
  public render() {
    return (
      <div id="home">
        <StyledImg src={bannerImage} alt="banner-picture" />
      </div>
    );
  }
}

export default Banner;
