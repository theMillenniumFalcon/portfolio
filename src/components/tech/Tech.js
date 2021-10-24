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
border: 1px solid black;
border-radius: 4px;
margin: 10px 50px;
height: 40px;
width:100px;
display: flex;
align-items: center;
justify-content: center;
`;

const Logo = styled.img`
width: 25px;
`;

const Title = styled.div`
font-size: 18px;
margin-left: 4px;
`;

export default TechItem
