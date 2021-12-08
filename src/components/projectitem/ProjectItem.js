import React from 'react'
import styled from "styled-components"
import {responsive1, responsive2} from "../../responsive"

const ProjectItem = () => {
    return (
        <ProjectItemContainer>
            <ProjectComponent>
                <ProjectTitle>‣ I am Remarkable Facilitator</ProjectTitle>
                <ProjectDesc>
                    <span>• Data structures and algorithms</span>
                    <span>• Data structures and algorithms</span>
                </ProjectDesc>
                <ProjectShowcase>
                    <span>Showcase</span>
                    <span>Code</span>
                </ProjectShowcase>
            </ProjectComponent>
            <ProjectComponent>
                <ProjectTitle>‣ I am Remarkable Facilitator</ProjectTitle>
                <ProjectDesc>
                    <span>• Data structures and algorithms</span>
                    <span>• Data structures and algorithms</span>
                </ProjectDesc>
                <ProjectShowcase>
                    <span>Showcase</span>
                    <span>Code</span>
                </ProjectShowcase>
            </ProjectComponent>
            <ProjectComponent>
                <ProjectTitle>‣ I am Remarkable Facilitator</ProjectTitle>
                <ProjectDesc>
                    <span>• Data structures and algorithms</span>
                    <span>• Data structures and algorithms</span>
                </ProjectDesc>
                <ProjectShowcase>
                    <span>Showcase</span>
                    <span>Code</span>
                </ProjectShowcase>
            </ProjectComponent>
        </ProjectItemContainer>
    )
}

const ProjectItemContainer = styled.div`
font-family: 'Source Code Pro', monospace;
color: white;
`;

const ProjectComponent = styled.div`
margin-bottom: 30px;
`;

const ProjectTitle = styled.div`
font-size: 20px;
font-weight: 400;
margin-bottom: 5px;
`;

const ProjectShowcase = styled.div`
color: #ff424d;
font-size: 15px;
font-weight: 400;
margin-left: 15px;
margin-bottom: 5px;
${responsive2({ fontSize:"17px" })}
span {
    cursor: pointer;
    margin-right: 30px;
}
`;

const ProjectDesc = styled.div`
color: white;
display: flex;
flex-direction: column;
font-size: 15px;
font-weight: 400;
padding-left: 15px;
margin-bottom: 5px;
${responsive2({ fontSize:"17px" })}
span {
    margin-bottom: 3px;
}
`;

export default ProjectItem