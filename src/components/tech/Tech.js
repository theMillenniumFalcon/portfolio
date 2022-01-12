import React from 'react'
import styled from "styled-components"
import TechItem from '../techitem/TechItem'

const Tech = () => {
    return (
        <ToolContainer>
            <ToolTitle>Tech Stack:</ToolTitle>
            <ToolItemWrapper>
                <TechItem/>
            </ToolItemWrapper>
        </ToolContainer>
    )
}

const ToolContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const ToolTitle = styled.div`
font-size: 30px;
font-weight: 400;
`;

const ToolItemWrapper = styled.div`
margin-top: 25px;
width: 90%;
margin-right: auto;
margin-left: auto;
`;

export default Tech