import React from "react";
import styled from "styled-components";
import { mobile } from './../responsive';
import { Link } from "react-router-dom";
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
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #aa808a;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;
const NavLink = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <NavLink>DO NOT YOU REMEMBER THE PASSWORD?</NavLink>
          <Link exact to="/register" style={{textDecoration: "none"}}><NavLink>CREATE A NEW ACCOUNT</NavLink></Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
