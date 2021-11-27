import React from 'react'
import styled from "styled-components"

const BlogItem = () => {
    return (
        <BlogItemContainer>
            <BlogItem>
                <BlogImg></BlogImg>
                <BlogTime></BlogTime>
                <BlogTitle></BlogTitle>
            </BlogItem>
        </BlogItemContainer>
    )
}

const BlogItemContainer = styled.div`
margin-top: 25px;
width: 100%;
margin-right: auto;
margin-left: auto;
display: grid;
grid-gap: 25px;
gap: 15px;
grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const BlogImg = styled.div`

`;

const BlogTime = styled.div`

`;

const BlogTitle = styled.div`

`;

export default BlogItem
