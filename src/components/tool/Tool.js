import React from 'react'
import styled from "styled-components"
import ToolItem from '../toolitem/ToolItem';

const Tool = () => {
    return (
        <ToolContainer>
            <ToolTitle>Tools I am familiar with:</ToolTitle>
            <ToolItemWrapper>
                <ToolItem/>
            </ToolItemWrapper>
        </ToolContainer>
    )
}

const ToolContainer = styled.div`
margin-top: 30px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const ToolTitle = styled.div`
font-size: 20px;
font-weight: 400;
`;

const ToolItemWrapper = styled.div`
margin-top: 20px;
width: 80%;
margin-right: auto;
margin-left: auto;
`;

export default Tool
