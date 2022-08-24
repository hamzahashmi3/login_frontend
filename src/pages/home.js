import React from 'react';
import { StyledTitle, StyledSubTitle, Avatar, StyledButton } from '../components/Styles';

// logo
import Logo from "./../assets/logo.png"


const home = () => {
  return (
    <div>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        width: "100%",
        padding: "15px",
        display: "flex",
        justifyCOntent: "flex-start"
      }}>
        <Avatar image={Logo} />
      </div>
        <StyledTitle size={65}> welcome to Authenticator </StyledTitle>
        <StyledSubTitle size={27}> feel free to explore our authenticator </StyledSubTitle>
    
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">SignUp</StyledButton>
    </div>
  )
}

export default home;
