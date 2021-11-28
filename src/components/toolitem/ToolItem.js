import React from 'react'
import styled from "styled-components"

const ToolItem = () => {
    return (
        <ToolItemContainer>
            <Item>
                <img src="assets/techlogo/java.png" alt=""/>
                <span>Java</span>
            </Item>
            <Item>
                <img src="assets/techlogo/javascript.png" alt=""/>
                <span>JavaScript</span>
            </Item>
            <Item>
                <img src="assets/techlogo/python.png" alt=""/>
                <span>Python</span>
            </Item>
            <Item>
                <img src="assets/techlogo/react.png" alt=""/>
                <span>React</span>
            </Item>
            <Item>
                <img src="assets/techlogo/graphql.png" alt=""/>
                <span>Graphql</span>
            </Item>
            <Item>
                <img src="assets/techlogo/typescript.png" alt=""/>
                <span>TypeScript</span>
            </Item>
            <Item>
                <img src="assets/techlogo/mongodb.png" alt=""/>
                <span>MongoDB</span>
            </Item>
            <Item>
                <img src="assets/techlogo/postgresql.png" alt=""/>
                <span>Postgresql</span>
            </Item>
            <Item>
                <img src="assets/techlogo/docker.png" alt=""/>
                <span>Docker</span>
            </Item>
            <Item>
                <img src="assets/techlogo/kubernetes.png" alt=""/>
                <span>Kubernetes</span>
            </Item>
            <Item>
                <img src="assets/techlogo/linux.png" alt=""/>
                <span>Linux</span>
            </Item>
            <Item>
                <img src="assets/techlogo/git.png" alt=""/>
                <span>Git</span>
            </Item>
        </ToolItemContainer>
    )
}

const ToolItemContainer = styled.div`
display: grid;
grid-gap: 25px;
gap: 25px;
font-size: 17px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Item = styled.div`
display: flex;
align-items: center;
justify-content: center;
img {
    height: 25px;
    width: 25px;
    margin-right: 5px;
}
span {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.15;
}
`;


export default ToolItem