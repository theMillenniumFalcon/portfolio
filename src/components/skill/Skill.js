import React from 'react'
import styled from "styled-components"
import {mobile} from "../../responsive"

const Skill = () => {
    return (
        <SkillContainer>
            <SkillTitle>My skills:</SkillTitle>
            <SkillItemWrapper>
                <SkillItem>
                    • Data structures and algorithms
                </SkillItem>
                <SkillItem>
                    • Full stack web development
                </SkillItem>
                <SkillItem>
                    • Web security
                </SkillItem>
                <SkillItem>
                    • Database management systems
                </SkillItem>
                <SkillItem>
                    • Computer networks
                </SkillItem>
                <SkillItem>
                    • Operating systems
                </SkillItem>
                <SkillItem>
                    • Computer graphics
                </SkillItem>
                <SkillItem>
                    • Object oriented programming
                </SkillItem>
                <SkillItem>
                    • Containerization
                </SkillItem>
                <SkillItem>
                    • Linux machines
                </SkillItem>
                {/* <SkillItem>
                    • Neural networks
                </SkillItem>
                <SkillItem>
                    • Machine learning
                </SkillItem>
                <SkillItem>
                    • Reinforcement learning
                </SkillItem>
                <SkillItem>
                    • Natural language processing
                </SkillItem> */}
            </SkillItemWrapper>
        </SkillContainer>
    )
}

const SkillContainer = styled.div`
margin-top: 40px;
font-family: 'Source Code Pro', monospace;
color: white;
`;

const SkillTitle = styled.div`
font-size: 30px;
font-weight: 400;
`;

const SkillItemWrapper = styled.div`
margin-top: 25px;
width: 90%;
margin-right: auto;
margin-left: auto;
display: grid;
grid-gap: 25px;
gap: 15px;
grid-template-columns: repeat(2, minmax(0, 1fr));
${mobile({ gridTemplateColumns:"repeat(1, minmax(0, 1fr))" })}
`;

const SkillItem = styled.div`
font-size: 17px;
${mobile({ fontSize:"18px" })}
`;

export default Skill