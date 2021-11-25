import React from 'react'
import styled from "styled-components"

const TechItem = () => {
    return (
        <TechItemContainer>
            Hello
        </TechItemContainer>
    )
}

const TechItemContainer = styled.div`
display: grid;
grid-gap: 25px;
gap: 25px;
font-size: 17px;
grid-template-columns: repeat(8, minmax(0, 1fr));
border: 1px solid white;
`;


export default TechItem
