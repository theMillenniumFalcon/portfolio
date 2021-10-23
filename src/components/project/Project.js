import React from 'react'
import styled from 'styled-components'

const Project = ({ img, link }) => {
    return (
        <ProjectContainer>
            <Browser>
                <Circle/>
                <Circle/>
                <Circle/>
            </Browser>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" />
            </a>
        </ProjectContainer>
    )
}

const ProjectContainer = styled.div`
width: 30%;
height: 40vh;
margin: 20px 10px;
border: 2px solid rgb(243, 242, 242);
border-radius: 10px 10px 0px 0px;
cursor: pointer;
overflow: hidden;
img {
    width: 100%;
    transition: all 10 sec ease;
    &:hover {
        transform: translateY(-100%);
}
`;

const Browser = styled.div`
height: 20px;
background-color: rgb(243, 242, 242);
display: flex;
align-items: center;
position: sticky;
z-index: 2;
`;

const Circle = styled.div`
width: 6px;
height: 6px;
border-radius: 50%;
margin: 3px;
background-color: white;
`;

export default Project
