import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const WorkItem = () => {
    return (
        <WorkItemContainer>
            <WorkComponent>
                <WorkPosition>‣ Graphics Designer Intern</WorkPosition>
                <WorkOrganization>
                <Link to={{ pathname: "https://yellowfishes.com/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                    <span>Yellow Fishes</span>
                </Link>
                </WorkOrganization>
                <WorkDuration>April 2016 - June 2016</WorkDuration>
                <WorkResponsibilities>
                    <span>
                        • As a graphics designer intern, my main responsibility was 
                        assisting the designers in the branding process.
                    </span>
                    <span>
                        • I wwas also responsible developing the assets' prototypes and being in a continuous to-and-fro 
                        communication with the team during the entire process
                    </span>
                </WorkResponsibilities>
            </WorkComponent>
        </WorkItemContainer>
    )
}

const WorkItemContainer = styled.div`
font-family: 'Source Code Pro', monospace;
color: white;
`;

const WorkComponent = styled.div`
margin-bottom: 30px;
`;

const WorkPosition = styled.div`
font-size: 20px;
font-weight: 400;
margin-bottom: 5px;
`;

const WorkOrganization = styled.div`
color: #ff424d;
font-size: 16px;
font-weight: 400;
margin-left: 15px;
margin-bottom: 5px;
span {
    cursor: pointer;
}
`;

const WorkDuration = styled.div`
color: white;
font-size: 15px;
font-weight: 400;
padding-left: 15px;
margin-bottom: 5px;
`;

const WorkResponsibilities = styled.div`
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

export default WorkItem