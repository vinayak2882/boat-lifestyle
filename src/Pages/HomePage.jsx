import React from 'react'
import Best_Sellers from '../components/sections/Best_Sellers'
import Smart_Watches from '../components/sections/Smart_Watches'
import styled from "styled-components";
import { ImageSlider } from '../components/sections/ImagesSlider';
import Trending_Wireless from '../components/sections/Trending_Wireless';
import Trending_Wired from '../components/sections/Trending_Wired';
import Trending_Headphones from '../components/sections/Trending_Headphones';
import Gaming from '../components/sections/Gaming';


const HomeConte = styled.div`
    /* position: fixed;
    top: 0;
    width: 100%;
    height: 88px; */
    background-color:rgb(20,20,20);
    `;

const HomePage = () => {
  return (
   <>
   <HomeConte>
   <ImageSlider/>
   <Best_Sellers/>
   <Smart_Watches/>
   <Trending_Wireless/>
   <Trending_Wired/>
   <Trending_Headphones/>
   <Gaming/>
   </HomeConte>
      </>
  )
}

export default HomePage
