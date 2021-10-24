import React from 'react'
import styled from 'styled-components'
import Blog from '../blog/Blog'

const BlogList = () => {
    return (
        <BlogContainer>
            <ListText>
                <Title>Some of my blogs:</Title>
                <Desc>
                He sat across from her trying to imagine it was the 
                first time. It wasn't. Had it been a hundred? It quite 
                possibly could have been. Two hundred? Probably not. 
                </Desc>
                <Blog/>
            </ListText>
        </BlogContainer>
    )
}

const BlogContainer = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
`;

const ListText = styled.div`
border: 1px solid black;
width: 100%;
`;

const Title = styled.div`
border: 1px solid black;
flex: 1;
font-size: 60px;
margin-top: 40px;
padding: 0px 40px;
`;

const Desc = styled.p`
border: 1px solid black;
margin-top: 0px;
padding: 0 40px;
font-size: 17px;
`;

export default BlogList
