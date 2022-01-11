import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const VoluntaryItem = () => {
    return (
        <VoluntaryItemContainer>
            <VoluntaryComponent>
                <VoluntaryPosition>‣ I am Remarkable Facilitator</VoluntaryPosition>
                <VoluntaryOrganization>
                <Link to={{ pathname: "https://iamremarkable.withgoogle.com/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                    <span>I am Remarkable</span>
                </Link>
                </VoluntaryOrganization>
                <VoluntaryDuration>January 2022 - Present</VoluntaryDuration>
                <VoluntaryResponsibilities>
                    <span>
                        • As a facilitator my role involves hosting workshops and being an ambassador for #IamRemarkable within my personal and professional networks.
                    </span>
                </VoluntaryResponsibilities>
            </VoluntaryComponent>
            <VoluntaryComponent>
                <VoluntaryPosition>‣ Event Coordinator</VoluntaryPosition>
                <VoluntaryOrganization>
                <Link to={{ pathname: "https://spectraverseincusivity.wordpress.com/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                    <span>Spectraverse</span>
                </Link>
                </VoluntaryOrganization>
                <VoluntaryDuration>April 2017 - August 2018</VoluntaryDuration>
                <VoluntaryResponsibilities>
                    <span>
                        • My role as an event coordinator was to ensure that all the activities and events went without any troubles and prolems.
                    </span>
                    <span>
                        • I also actively took part in various campaigns and drives raising awareness among the public.
                    </span>
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
font-size: 20px;
font-weight: 400;
margin-bottom: 5px;
`;

const VoluntaryOrganization = styled.div`
color: #ff424d;
font-size: 16px;
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
    margin-bottom: 5px;
}
`;

export default VoluntaryItem