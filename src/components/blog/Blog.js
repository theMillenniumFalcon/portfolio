import React from 'react'
import styled from "styled-components"

const Blog = () => {
    return (
        <BLogContainer>
            <BLogTitle>Some of my Blogs:</BLogTitle>
            <BLogItemWrapper>
                
            </BLogItemWrapper>
        </BLogContainer>
    )
}

const BLogContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const BLogTitle = styled.div`
font-size: 25px;
font-weight: 400;
`;

const BLogItemWrapper = styled.div`
margin-top: 20px;
width: 95%;
margin-right: auto;
margin-left: auto;
`;

export default Blog