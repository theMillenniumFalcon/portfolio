import React from 'react'
import styled from 'styled-components'
import Project from '../project/Project'
import { projects } from '../../data'

const ProjectList = () => {
    return (
        <ListContainer>
            <ListText>
                <Title>Projects I have worked on:</Title>
                <Desc>
                He sat across from her trying to imagine it was the 
                first time. It wasn't. Had it been a hundred? It quite 
                possibly could have been. Two hundred? Probably not. 
                </Desc>
            </ListText>
            <List>
                {projects.map((project) => (
                    <Project key={project.id} img={project.img} link={project.link} />
                ))}
            </List>
        </ListContainer>
    )
}

const ListContainer = styled.div`
display: flex;
flex-direction: column;
`;

const ListText = styled.div`
width: 100%;
`;

const Title = styled.div`
flex: 1;
font-size: 60px;
margin-top: 40px;
padding: 0px 40px;
`;

const Desc = styled.p`
margin-top: 0px;
padding: 0 40px;
font-size: 17px;
`;

const List = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
justify-content: space-between;
width: 70%;
margin-left: auto;
margin-right: auto;
`;

export default ProjectList
