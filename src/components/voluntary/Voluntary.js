import React from 'react'
import styled from "styled-components"
import VoluntaryItem from '../voluntaryitem/VoluntaryItem';

const Voluntary = () => {
    return (
        <VoluntaryContainer>
            <VoluntaryTitle>Voluntary Experience:</VoluntaryTitle>
            <VoluntaryItemWrapper>
                <VoluntaryItem/>
            </VoluntaryItemWrapper>
        </VoluntaryContainer>
    )
}

const VoluntaryContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const VoluntaryTitle = styled.div`
font-size: 25px;
font-weight: 400;
`;

const VoluntaryItemWrapper = styled.div`
margin-top: 20px;
width: 95%;
margin-right: auto;
margin-left: auto;
`;

export default Voluntary