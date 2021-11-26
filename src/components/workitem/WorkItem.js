import React from 'react'
import styled from "styled-components"

const WorkItem = () => {
    return (
        <WorkItemContainer>
            <WorkComponent>
                <WorkPosition>Graphics Designer Intern</WorkPosition>
                <WorkOrganization>Yellow Fishes</WorkOrganization>
                <WorkDuration>April 2016 - June 2016</WorkDuration>
                <WorkResponsibilities></WorkResponsibilities>
            </WorkComponent>
        </WorkItemContainer>
    )
}

const WorkItemContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const WorkComponent = styled.div`

`;

const WorkPosition = styled.div`

`;

const WorkOrganization = styled.div`

`;

const WorkDuration = styled.div`

`;

const WorkResponsibilities = styled.div`

`;

export default WorkItem
