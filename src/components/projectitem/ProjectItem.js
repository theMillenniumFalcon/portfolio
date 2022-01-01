import React from 'react'
import styled from "styled-components"
import {responsive2} from "../../responsive"
import {Link} from "react-router-dom"

const ProjectItem = () => {
    return (
        <ProjectItemContainer>
            <ProjectComponent>
                <ProjectTitle>‣ Shoe store web application</ProjectTitle>
                <ProjectDesc>
                    <span>• Data structures and algorithms</span>
                    <span>• Data structures and algorithms</span>
                </ProjectDesc>
                <ProjectShowcase>
                    <Link to={{ pathname: "https://iamremarkable.withgoogle.com/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Showcase</span>
                    </Link>
                    <Link to={{ pathname: "https://github.com/theMillenniumFalcon/shoes_E-commerce_webapp" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Code</span>
                    </Link>
                </ProjectShowcase>
            </ProjectComponent>
            <ProjectComponent>
                <ProjectTitle>‣ A group chat app</ProjectTitle>
                <ProjectDesc>
                    <span>
                        • I made this project during a hackathon, using React on the frontend and node on the backend.
                    </span>
                    <span>
                        • The chat feature was made using getStream.io pre-build components.
                    </span>
                </ProjectDesc>
                <ProjectShowcase>
                    <Link to={{ pathname: "https://cloud-native-hacks-hangout.netlify.app/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Showcase</span>
                    </Link>
                    <Link to={{ pathname: "https://github.com/theMillenniumFalcon/cloud-native-hack-submission" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Code</span>
                    </Link>
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