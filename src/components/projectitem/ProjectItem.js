import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const ProjectItem = () => {
    return (
        <ProjectItemContainer>
            <ProjectComponent>
                <ProjectTitle>‣ MyReddit</ProjectTitle>
                <ProjectDesc>
                    <span>
                        • This is a sort of a reddit clone made with React and Next.js on the frontend using TypeScript, Nodejs on the backend, and
                        GraphQL as the query language.
                    </span>
                    <span>• Database used in PostgreSQL, Redis as a cache store, and Apollo platform to transfer data between 
                        the server and the UI.
                    </span>
                </ProjectDesc>
                <ProjectShowcase>
                    <Link to={{ pathname: "https://iamremarkable.withgoogle.com/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Showcase</span>
                    </Link>
                    <Link to={{ pathname: "https://github.com/theMillenniumFalcon/reddit-clone" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Code</span>
                    </Link>
                </ProjectShowcase>
            </ProjectComponent>
            <ProjectComponent>
                <ProjectTitle>‣ Shoes4You</ProjectTitle>
                <ProjectDesc>
                    <span>
                        • This is a E-commerce web application having React as the frontend UI library, Node.js using express on the backend, 
                        the database used is mongoDB.
                    </span>
                    <span>• Redux was used for managing and centralizing the application state and for the payment support, Stripe was used.</span>
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
                <ProjectTitle>‣ Blog App</ProjectTitle>
                <ProjectDesc>
                    <span>
                        • The frontend of the project was build with nextjs using Javascript as the programming language.
                    </span>
                    <span>
                        • GraphQL was used the query language for fullfilling the queries while the the addition and deletion is done 
                        using graphCMS.
                    </span>
                </ProjectDesc>
                <ProjectShowcase>
                    <Link to={{ pathname: "https://next-serverless-bpc5r08e9-themillenniumfalcon.vercel.app/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Showcase</span>
                    </Link>
                    <Link to={{ pathname: "https://github.com/theMillenniumFalcon/graphql-next" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Code</span>
                    </Link>
                </ProjectShowcase>
            </ProjectComponent>
            <ProjectComponent>
                <ProjectTitle>‣ A group chat app</ProjectTitle>
                <ProjectDesc>
                    <span>
                        • This project was made during a hackathon, using React on the frontend and Node.js on the backend.
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
            <ProjectComponent>
                <ProjectTitle>‣ Space Jumper</ProjectTitle>
                <ProjectDesc>
                    <span>
                        • This project was created with the HTML canvas element using Javascript as the programming language.
                    </span>
                    <span>
                        • The stripe animation and other assets were taken from the internet.
                    </span>
                </ProjectDesc>
                <ProjectShowcase>
                    <Link to={{ pathname: "https://cloud-native-hacks-hangout.netlify.app/" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
                        <span>Showcase</span>
                    </Link>
                    <Link to={{ pathname: "https://github.com/theMillenniumFalcon/space-jumper" }} target="_blank" style={{color: "#ff424d", textDecoration: "none"}}>
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
span {
    margin-bottom: 5px;
}
`;

export default ProjectItem