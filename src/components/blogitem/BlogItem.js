import React from 'react'
import styled from "styled-components"

const BlogItem = () => {
    return (
        <BlogItemContainer>
            <Blog>
                <BlogImg>
                    <img src="assets/blogcovers/1.jpg" alt="" />
                </BlogImg>
                <BlogTime>December 2021</BlogTime>
                <BlogName>Getting started with freelancing</BlogName>
            </Blog>
            <Blog>
                <BlogImg>
                    <img src="assets/blogcovers/1.jpg" alt="" />
                </BlogImg>
                <BlogTime>December 2021</BlogTime>
                <BlogName>Getting started with freelancing</BlogName>
            </Blog>
            <Blog>
                <BlogImg>
                    <img src="assets/blogcovers/1.jpg" alt="" />
                </BlogImg>
                <BlogTime>December 2021</BlogTime>
                <BlogName>Getting started with freelancing</BlogName>
            </Blog>
            <Blog>
                <BlogImg>
                    <img src="assets/blogcovers/1.jpg" alt="" />
                </BlogImg>
                <BlogTime>December 2021</BlogTime>
                <BlogName>Getting started with freelancing</BlogName>
            </Blog>
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

const Blog = styled.div`
margin-bottom: 15px;
`;

const BlogImg = styled.div`
img{
    height: 180px;
    width: 300px;
    object-fit: cover;
}
`;

const BlogTime = styled.div`
font-size: 15px;
font-weight: 400;
margin-bottom: 5px;
`;

const BlogName = styled.div`
font-size: 17px;
font-weight: 400;
`;

export default BlogItem
