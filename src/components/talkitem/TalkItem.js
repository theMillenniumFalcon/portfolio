import React from 'react'
import styled from "styled-components"
import {responsive2} from "../../responsive"

const TalkItem = () => {
    return (
        <TalkItemContainer>
            <Talk>
                <TalkImg>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" />
                </TalkImg>
                <TalkTime>December 2021</TalkTime>
                <TalkName>Getting started with freelancing</TalkName>
            </Talk>
            <Talk>
                <TalkImg>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" />
                </TalkImg>
                <TalkTime>December 2021</TalkTime>
                <TalkName>Getting started with freelancing</TalkName>
            </Talk>
            <Talk>
                <TalkImg>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" />
                </TalkImg>
                <TalkTime>December 2021</TalkTime>
                <TalkName>Getting started with freelancing</TalkName>
            </Talk>
            <Talk>
                <TalkImg>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" />
                </TalkImg>
                <TalkTime>December 2021</TalkTime>
                <TalkName>Getting started with freelancing</TalkName>
            </Talk>
        </TalkItemContainer>
    )
}

const TalkItemContainer = styled.div`
margin-top: 25px;
width: 100%;
margin-right: auto;
margin-left: auto;
display: grid;
grid-gap: 25px;
gap: 15px;
grid-template-columns: repeat(2, minmax(0, 1fr));
${responsive2({ gridTemplateColumns:"repeat(1, minmax(0, 1fr))" })}
`;

const Talk = styled.div`
margin-bottom: 15px;
`;

const TalkImg = styled.div`
iframe{
    height: 180px;
    width: 300px;
    object-fit: cover;
}
`;

const TalkTime = styled.div`
font-size: 15px;
font-weight: 400;
margin-bottom: 5px;
`;

const TalkName = styled.div`
font-size: 17px;
font-weight: 400;
`;

export default TalkItem
