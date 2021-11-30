import React from 'react'
import styled from "styled-components"
import {mobile} from "../../responsive"

const WorkItem = () => {
    return (
        <WorkItemContainer>
            <WorkComponent>
                <WorkPosition>‣ Graphics Designer Intern</WorkPosition>
                <WorkOrganization>
                    <span>Yellow fishes</span>
                </WorkOrganization>
                <WorkDuration>April 2016 - June 2016</WorkDuration>
                <WorkResponsibilities>
                    <span>• Data structures and algorithms</span>
                    <span>• Data structures and algorithms</span>
                </WorkResponsibilities>
            </WorkComponent>
        </WorkItemContainer>
    )
}

const WorkItemContainer = styled.div`
font-family: 'Source Code Pro', monospace;
color: white;
`;

const WorkComponent = styled.div`
margin-bottom: 30px;
`;

const WorkPosition = styled.div`
font-size: 20px;
font-weight: 400;
margin-bottom: 5px;
`;

const WorkOrganization = styled.div`
color: #ff424d;
font-size: 15px;
font-weight: 400;
margin-left: 15px;
margin-bottom: 5px;
${mobile({ fontSize:"17px" })}
span {
    cursor: pointer;
}
`;

const WorkDuration = styled.div`
color: white;
font-size: 15px;
font-weight: 400;
padding-left: 15px;
margin-bottom: 5px;
${mobile({ fontSize:"17px" })}
`;

const WorkResponsibilities = styled.div`
color: white;
display: flex;
flex-direction: column;
font-size: 15px;
font-weight: 400;
padding-left: 15px;
margin-bottom: 5px;
${mobile({ fontSize:"17px" })}
span {
    margin-bottom: 3px;
}
`;

export default WorkItem