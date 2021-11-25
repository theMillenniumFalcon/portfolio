import React from 'react'
import styled from 'styled-components'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroName>Nishank Priydarshi</HeroName>
            <HeroDesc>
                Hello! My name is Nishank. I'm a computer science student from India.
            </HeroDesc>
            <HeroSocials>
                <SocialIcon>
                    <MailOutlineIcon/>
                </SocialIcon>
                <SocialIcon>
                    <GitHubIcon/>
                </SocialIcon>
                <SocialIcon>
                    <LinkedInIcon/>
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon>
                    <RedditIcon/>
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
font-weight: 300;
line-height: 1.15;
margin-top: 10px;
`;

const HeroSocials = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
padding: 0 10px;
`;

const SocialIcon = styled.div`
color: white;
cursor: pointer;
margin-right: 15px;
&:hover {
    color: #ff424d;
}
`;

export default Hero
