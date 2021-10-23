import React from 'react'
import styled from 'styled-components'
import TechItem from '../techItem/TechItem';

const Tech = () => {
    return (
        <TechContainer>
            <Title>Tech I am familiar with:</Title>
            <TechBody>
                <TechWrapper>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                    <TechItem/>
                </TechWrapper>
            </TechBody>
        </TechContainer>
    )
}

const TechContainer = styled.div`
border: 1px solid black;
display: flex;
height: 100vh;
flex-direction: column;
`;

const Title = styled.div`
border: 1px solid black;
flex: 1;
font-size: 60px;
margin-top: 50px;
padding: 0 40px;
`;

const TechBody = styled.div`
border: 1px solid black;
flex: 7;
`;

const TechWrapper = styled.div`
border: 1px solid black;
height: 100%;
width: 60%;
display: grid;
grid-gap: 25px;
gap: 25px;
margin-left: auto;
margin-right: auto;
grid-template-columns: repeat(4, minmax(0, 1fr));
`;

export default Tech
