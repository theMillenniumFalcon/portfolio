import React from 'react'
import styled from 'styled-components'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import {mobile} from "../../responsive"
import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <HeroContainer>
            <HeroName>Nishank Priydarshi</HeroName>
            <HeroDesc>
                Hello! My name is Nishank. I'm a computer science student from 🇮🇳.
                I am a keen learner📕 and deeply passionate about Software development💻 and innovations.
            </HeroDesc>
            <HeroSocials>
                <SocialIcon>
                    <Link to={{ pathname: "mailto: nishankpr435@gmail.com"}} target="_blank" style={{color: "white"}}>
                        <MailOutlineIcon/>
                    </Link>
                </SocialIcon>
                <SocialIcon>
                    <Link to={{ pathname: "https://github.com/theMillenniumFalcon" }} target="_blank" style={{color: "white"}}>
                        <GitHubIcon/>
                    </Link>
                </SocialIcon>
                <SocialIcon>
                    <Link to={{ pathname: "https://www.linkedin.com/in/nishank-priydarshi-2526551ba/" }} target="_blank" style={{color: "white"}}>
                        <LinkedInIcon/>
                    </Link>
                </SocialIcon>
                <SocialIcon>
                    <Link to={{ pathname: "https://twitter.com/nishankpr" }} target="_blank" style={{color: "white"}}>
                        <TwitterIcon/>
                    </Link>
                </SocialIcon>
            </HeroSocials>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
margin-top: 50px;
font-family: 'Source Code Pro', monospace;
`;

const HeroName  = styled.div`
color: #ff424d;
font-size: 30px;
font-weight: 500;
`;

const HeroDesc = styled.div`
color: white;
box-sizing: border-box;
font-size: 17px;
font-weight: 400;
line-height: 1.15;
margin-top: 10px;
${mobile({ fontSize:"19px" })}
`;

const HeroSocials = styled.div`
display: flex;
align-items: center;
margin-top: 15px;
padding: 0 10px;
`;

const SocialIcon = styled.div`
color: white;
cursor: pointer;
margin-right: 15px;
`;

export default Hero
