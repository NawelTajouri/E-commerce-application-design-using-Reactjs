import { Badge, withStyles } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from './../responsive';

const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 1;
  ${mobile({ height: "50px" })}
  
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: white;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: white;
  font-family: 'Syne Mono', monospace;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  font-family: 'Noto Serif Display', serif;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  customBadge: {
    backgroundColor: props => props.color,
    color: "white"
  }
});

function SimpleBadge(props) {
  const { classes } = props;
  return (
    <div>
      <Badge
        classes={{ badge: classes.customBadge }}
        className={classes.margin}
        badgeContent={4}
      >
        <ShoppingCartOutlined />
      </Badge>
    </div>
  );
}
const StyledBadge = withStyles(styles)(SimpleBadge);

const Navbar = () => {
 
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"white", fontSize:20}}/>
          </SearchContainer>
        </Left>
        <Center>
        <Link exact to="/" style={{textDecoration: "none"}}><Logo>LEWAN.</Logo></Link>
        </Center>
        <Right>
          <Link exact to="/register" style={{textDecoration: "none"}}><MenuItem>REGISTER</MenuItem></Link>
          <Link exact to="/login"style={{textDecoration: "none"}}><MenuItem>SIGN IN</MenuItem></Link>
          <Link exact to="/cart" style={{textDecoration: "none"}}><MenuItem>

            <StyledBadge color="#aa808a" />
          </MenuItem></Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
