import React from 'react'
import styled from "styled-components"

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
                    • Computer vision
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
font-size: 20px;
font-weight: 400;
`;

const SkillItemWrapper = styled.div`
margin-top: 25px;
width: 90%;
margin-right: auto;
margin-left: auto;
display: grid;
grid-gap: 25px;
gap: 25px;
font-size: 17px;
grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const SkillItem = styled.div`

`;

export default Skill