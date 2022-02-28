
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from './../responsive';

const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width:50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props =>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    // // background-color: #${props => props.bg}
`;

const Image = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
    
`;
const InfoContainer = styled.div`
width: 35%;
position: absolute;
height: 100%;
top: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`;
const Title = styled.h1`
    font-size: 50px;
    color: white;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px
    font_height: 300;
    letter-spacing: 3px;
    color: white;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: black;
cursor: pointer;
color: white;
border: 0;
transition: all 0.5s;
border-radius: 10px;
width: auto;
position: relative;

    &:after{
        content: "→";
        font-family: "Font Awesome 5 Pro";
        font-weight: 400;
        position: absolute;
        left: 75%;
        top: 34%;
        right: 5%;
        bottom: 0;
        opacity: 0;

    }
    &:hover{
        background: #aa808a;
        transition: all 0.5s;
        border-radius: 5px;
        box-shadow: 0px 2px 3px #e6bcc6;
        padding: 1.5rem 3.5rem 1.5rem 1.5rem;
    }
    &:hover{
        &:after{
            opacity: 1;
            transition: all 0.5s;
        }
    }
`;

const Slider = () => {
    const [slideIndex,SetSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            SetSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else{
            SetSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
                <Slide bg={item.bg} key={item.id}>
                <Image src={item.img}/>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>

                </Slide>
            ))}
            

        </Wrapper>
        
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider