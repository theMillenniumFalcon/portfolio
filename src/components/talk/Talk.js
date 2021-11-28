import React from 'react'
import styled from "styled-components"
import TalkItem from '../talkitem/TalkItem';

const Talk = () => {
    return (
        <TalkContainer>
            <TalkTitle>My Talks:</TalkTitle>
            <TalkItemWrapper>
                <TalkItem/>
            </TalkItemWrapper>
        </TalkContainer>
    )
}

const TalkContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const TalkTitle = styled.div`
font-size: 30px;
font-weight: 400;
`;

const TalkItemWrapper = styled.div`
margin-top: 20px;
width: 95%;
margin-right: auto;
margin-left: auto;
`;

export default Talk