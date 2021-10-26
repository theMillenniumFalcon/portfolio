import React from 'react'
import styled from 'styled-components'

const TechItem = () => {
    return (
        <Container>
            <Logo src="/assets/logo/typescript.svg"/>
            <Title>Tech</Title>
        </Container>
    )
}

const Container = styled.div`
border-radius: 4px;
margin: 25px 30px;
height: 40px;
width:110px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.2s ease 0s;
&:hover {
    background-color: #E0E0E0;
}
`;

const Logo = styled.img`
width: 25px;
`;

const Title = styled.div`
font-size: 18px;
margin-left: 4px;
`;

export default TechItem
