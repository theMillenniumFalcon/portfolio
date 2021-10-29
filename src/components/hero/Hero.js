import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <HeroContainer>
            <LeftContainer>
                <LeftWrapper>
                    <Name>Nishank Priydarshi</Name>
                    <Title>
                        <TitleItem>‣ Student Developer</TitleItem>
                        <TitleItem>‣ UI Designer</TitleItem>
                        <TitleItem>‣ Blogger</TitleItem>
                    </Title>
                    <Desc>
                    The rain and wind abruptly stopped, 
                    but the sky still had the gray swirls of storms in the distance. 
                    Dave knew this feeling all too well. The calm before the storm.
                    </Desc>
                </LeftWrapper>
            </LeftContainer>
            <RightContainer>
                <RightWrapper>

                </RightWrapper>
            </RightContainer>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
display: flex;
height: 100vh;
position: relative;
`;

const LeftContainer = styled.div`
flex: 2;
display: flex;
align-items: center;
justify-content: center;
`;

const LeftWrapper = styled.div`
padding: 50px;
height: 55%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Name = styled.div`
font-size: 72px;
`;

const Title = styled.div`
height: 130px;
`;

const TitleItem = styled.div`
height: 45px;
font-size: 30px;
display: flex;
align-items: center;
`;

const Desc = styled.p`
font-size: 23px;
`;

const RightContainer = styled.div`
flex: 1;
`;

const RightWrapper = styled.div`
padding: 50px;
`;

export default Hero
