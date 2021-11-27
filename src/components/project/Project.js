import React from 'react'
import styled from "styled-components"
import ProjectItem from '../projectitem/ProjectItem';

const Project = () => {
    return (
        <ProjectContainer>
            <ProjectTitle>Projects I have worked on:</ProjectTitle>
            <ProjectItemWrapper>
                <ProjectItem/>
            </ProjectItemWrapper>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const ProjectTitle = styled.div`
font-size: 25px;
font-weight: 400;
`;

const ProjectItemWrapper = styled.div`
margin-top: 20px;
width: 95%;
margin-right: auto;
margin-left: auto;
`;

export default Project