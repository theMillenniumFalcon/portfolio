import React from 'react'
import styled from "styled-components"

const VoluntaryItem = () => {
    return (
        <VoluntaryItemContainer>
            <VoluntaryComponent>
                <VoluntaryPosition>‣ I am Remarkable Facilitator</VoluntaryPosition>
                <VoluntaryOrganization>
                    <span>I am Remarkable</span>
                </VoluntaryOrganization>
                <VoluntaryDuration>December 2021 - Present</VoluntaryDuration>
                <VoluntaryResponsibilities>
                    <span>• Data structures and algorithms</span>
                    <span>• Data structures and algorithms</span>
                </VoluntaryResponsibilities>
            </VoluntaryComponent>
        </VoluntaryItemContainer>
    )
}

const VoluntaryItemContainer = styled.div`
font-family: 'Source Code Pro', monospace;
color: white;
`;

const VoluntaryComponent = styled.div`
margin-bottom: 30px;
`;

const VoluntaryPosition = styled.div`
font-size: 17px;
font-weight: 400;
margin-bottom: 5px;
`;

const VoluntaryOrganization = styled.div`
color: #ff424d;
font-size: 15px;
font-weight: 400;
margin-left: 15px;
margin-bottom: 5px;
span {
    cursor: pointer;
}
`;

const VoluntaryDuration = styled.div`
color: white;
font-size: 15px;
font-weight: 400;
padding-left: 15px;
margin-bottom: 5px;
`;

const VoluntaryResponsibilities = styled.div`
color: white;
display: flex;
flex-direction: column;
font-size: 15px;
font-weight: 400;
padding-left: 15px;
margin-bottom: 5px;
span {
    margin-bottom: 3px;
}
`;

export default VoluntaryItem