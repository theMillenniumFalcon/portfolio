import React from 'react'
import styled from 'styled-components'

const Tech = () => {
    return (
        <TechContainer>
            <Title>Tech I am familiar with:</Title>
            <TechBody>
                <TechWrapper>
                    <TechItem>
                        <Logo src="/assets/logo/java.svg"/>
                        <TechTitle>Java</TechTitle>
                    </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/python.svg"/>
                            <TechTitle>Python</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/javascript.svg"/>
                            <TechTitle>Javascript</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/typescript.svg"/>
                            <TechTitle>Typescript</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/react.svg"/>
                            <TechTitle>React</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/mongodb.svg"/>
                            <TechTitle>MongoDB</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/redis.svg"/>
                            <TechTitle>Redis</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/graphql.svg"/>
                            <TechTitle>Graphql</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/gradle.svg"/>
                            <TechTitle>Gradle</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/aws.svg"/>
                            <TechTitle>AWS</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/docker.svg"/>
                            <TechTitle>Docker</TechTitle>
                        </TechItem>
                        <TechItem>
                            <Logo src="/assets/logo/git.svg"/>
                            <TechTitle>Git CLI</TechTitle>
                        </TechItem>
                </TechWrapper>
            </TechBody>
        </TechContainer>
    )
}

const TechContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Title = styled.div`
flex: 1;
font-size: 60px;
margin-top: 40px;
padding: 0 40px;
`;

const TechBody = styled.div`
flex: 7;
`;

const TechWrapper = styled.div`
height: 100%;
width: 70%;
display: flex;
flex-wrap: wrap;
margin-left: auto;
margin-right: auto;
`;

const TechItem = styled.div`
border-radius: 4px;
margin: 25px 30px;
height: 40px;
width:110px;
display: flex;
align-items: center;
justify-content: center;
`;

const Logo = styled.img`
width: 25px;
`;

const TechTitle = styled.div`
font-size: 18px;
margin-left: 4px;
`;


export default Tech
