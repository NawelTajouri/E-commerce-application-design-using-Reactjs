import React from "react";
import styled from "styled-components";
import { mobile } from './../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://media.istockphoto.com/photos/golden-trophy-cup-on-dark-background-copy-space-for-text-3d-rendering-picture-id1296652778?b=1&k=20&m=1296652778&s=170667a&w=0&h=guJnyq9Xw1HUsdjZ7wXiKYhlaCdbRUoDxORkS_kt564=")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Wrapper= styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #aa808a;
color: white;
cursor: pointer;
`;
const NavLink = styled.a`
margin: 20px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Link exact to="/login" style={{textDecoration: "none"}}><NavLink>LOGIN IF YOU HAVE AN ACCOUNT</NavLink></Link>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
