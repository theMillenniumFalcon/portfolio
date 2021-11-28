import React from 'react'
import styled from "styled-components"
import BlogItem from '../blogitem/BlogItem';

const Blog = () => {
    return (
        <BlogContainer>
            <BlogTitle>Some of my Blogs:</BlogTitle>
            <BlogItemWrapper>
                <BlogItem/>
            </BlogItemWrapper>
        </BlogContainer>
    )
}

const BlogContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const BlogTitle = styled.div`
font-size: 25px;
font-weight: 400;
`;

const BlogItemWrapper = styled.div`
margin-top: 20px;
width: 95%;
margin-right: auto;
margin-left: auto;
`;

export default Blog