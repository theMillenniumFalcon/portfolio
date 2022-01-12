import React from 'react'
import styled from "styled-components"
import {responsive2} from "../../responsive"

const TechItem = () => {
    return (
        <TechItemContainer>
            <Item>
                <img src="assets/techlogo/java.png" alt=""/>
                <span>Java</span>
            </Item>
            <Item>
                <img src="assets/techlogo/javascript.png" alt=""/>
                <span>JavaScript</span>
            </Item>
            <Item>
                <img src="assets/techlogo/typescript.png" alt=""/>
                <span>TypeScript</span>
            </Item>
            <Item>
                <img src="assets/techlogo/react.png" alt=""/>
                <span>React</span>
            </Item>
            <Item>
                <img src="assets/techlogo/next.png" alt=""/>
                <span>Nextjs</span>
            </Item>
            <Item>
                <img src="assets/techlogo/redux.png" alt=""/>
                <span>Redux</span>
            </Item>
            <Item>
                <img src="assets/techlogo/tailwind.png" alt=""/>
                <span>Tailwind</span>
            </Item>
            <Item>
                <img src="assets/techlogo/graphql.png" alt=""/>
                <span>Graphql</span>
            </Item>
            <Item>
                <img src="assets/techlogo/mongodb.png" alt=""/>
                <span>MongoDB</span>
            </Item>
            {/* <Item>
                <img src="assets/techlogo/postgresql.png" alt=""/>
                <span>Postgresql</span>
            </Item> */}
            <Item>
                <img src="assets/techlogo/docker.png" alt=""/>
                <span>Docker</span>
            </Item>
            {/* <Item>
                <img src="assets/techlogo/spring.png" alt=""/>
                <span>Spring</span>
            </Item> */}
            <Item>
                <img src="assets/techlogo/linux.png" alt=""/>
                <span>Linux</span>
            </Item>
            <Item>
                <img src="assets/techlogo/git.png" alt=""/>
                <span>Git</span>
            </Item>
        </TechItemContainer>
    )
}

const TechItemContainer = styled.div`
margin-top: 25px;
width: 90%;
margin-right: auto;
margin-left: auto;
display: grid;
grid-gap: 25px;
gap: 15px;
grid-template-columns: repeat(3, minmax(0, 1fr));
${responsive2({ gridTemplateColumns:"repeat(1, minmax(0, 1fr))" })}
`;

const Item = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 5px;
cursor: default;
img {
    height: 25px;
    width: 25px;
    margin-right: 10px;
}
span {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.15;
    ${responsive2({ fontSize:"16px" })}
}
`;


export default TechItem