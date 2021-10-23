import React from 'react'
import styled from 'styled-components'

const Divider = () => {
    return (
        <DividerComponent>
            <DividerItem/>
        </DividerComponent>
    )
}

const DividerComponent = styled.div`
width: 95%;
margin-left: auto;
margin-right: auto;
`;

const DividerItem = styled.hr`
background-color: black;
width: 100%;
height: 3px;
`;

export default Divider
