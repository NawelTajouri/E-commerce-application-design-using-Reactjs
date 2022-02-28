import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Slider from '../components/Slider'
import Categories from './../components/Categories';
import Newsletter from './../components/Newsletter';
import  styled  from 'styled-components';

const Container = styled.div`
background-color: rgba(0,0,0,0.3);
`;

const Home = () => {
  return (
    <Container>
     
      <Navbar/>
      <Announcement/> 
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Home