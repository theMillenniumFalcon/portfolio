import React from 'react'
import styled from "styled-components"
import WorkItem from '../workitem/WorkItem';

const Work = () => {
    return (
        <WorkContainer>
            <WorkTitle>Past work Experience:</WorkTitle>
            <WorkItemWrapper>
                <WorkItem/>
            </WorkItemWrapper>
        </WorkContainer>
    )
}

const WorkContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const WorkTitle = styled.div`
font-size: 20px;
font-weight: 400;
`;

const WorkItemWrapper = styled.div`
margin-top: 20px;
width: 80%;
margin-right: auto;
margin-left: auto;
`;

export default Work
