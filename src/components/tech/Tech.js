import React from 'react'
import styled from "styled-components"
import TechItem from '../techitem/TechItem';

const Tech = () => {
    return (
        <TechContainer>
            <TechTitle>Tech I am familiar with:</TechTitle>
            <TechItemWrapper>
                <TechItem/>
            </TechItemWrapper>
        </TechContainer>
    )
}

const TechContainer = styled.div`
margin-top: 20px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const TechTitle = styled.div`
font-size: 25px;
font-weight: 400;
`;

const TechItemWrapper = styled.div`
margin-top: 10px;
`;

export default Tech
