import React from 'react'
import styled from 'styled-components'
import TechItem from '../tech/Tech';

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
flex-direction: column;
`;

const Title = styled.div`
border: 1px solid black;
flex: 1;
font-size: 60px;
margin-top: 40px;
padding: 0 40px;
`;

const TechBody = styled.div`
border: 1px solid black;
flex: 7;
`;

const TechWrapper = styled.div`
border: 1px solid black;
height: 100%;
width: 70%;
display: flex;
flex-wrap: wrap;
margin-left: auto;
margin-right: auto;
`;

export default Tech
