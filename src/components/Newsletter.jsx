import { Send } from '@material-ui/icons'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { mobile } from './../responsive';
import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
    height: 60vh;
    // background-color: #fcf5f5;
    background-image: url('https://i.pinimg.com/564x/5a/ed/93/5aed93c2c4691a7d80b29ceb5265db2e.jpg');
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: white;
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
color: white;
font-family: 'Tinos', serif;
letter-spacing: 2px;
${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%" })}
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
font-family: 'Tinos', serif;
`;
const Button = styled.button`
flex: 2;
border: none;
background-color: #aa808a;
color: white;
`;

const Newsletter = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
}, [])

  return (
    <Container data-aos="zoom-in">
        <Title>Newsletter</Title>
         <Desc>Get timely updates from your favorite products.</Desc>
         <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
         </InputContainer>

    </Container>
  )
}

export default Newsletter