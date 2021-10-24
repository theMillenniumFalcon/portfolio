import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';
import { AccessAlarm } from '@material-ui/icons';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ywhjili', 'template_mk80xnn', formRef.current, 'user_Kv29Ygy0r9BGrHkkmel93')
        .then((result) => {
            console.log(result.text)
            setDone(true)
        }, (error) => {
            console.log(error.text)
        });
    }

    return (
        <Container>
            <LeftContainer>
                <ConnectContainer>
                    Let's connect
                </ConnectContainer>
                <ConnectDesc>
                    My inboxes are always open!
                </ConnectDesc>
                <Icons>
                    <AccessAlarm/>
                </Icons>
            </LeftContainer>
            <RightContainer>
                <Desc>
                    radiusof the equator is the radius of the equator
                </Desc>
                <Form>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <Button>Send</Button>
                        {done && "Thank you..."}
                    </form>
                </Form>
            </RightContainer>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: row;
`;

const LeftContainer = styled.div`
background-color: black;
color: white;
flex: 1;
`;

const ConnectContainer = styled.div`

`;

const ConnectDesc = styled.div`

`;

const Icons = styled.div`

`;

const RightContainer = styled.div`
background-color: white;
color: black;
flex: 1;
display: flex;
flex-direction: column;
`;

const Desc = styled.p`
font-size: 20px;
font-weight: 400;
margin: 40px 20px;
`;

const Form = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
input {
    width: 50%;
    height: 60px;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 30px;
    font-size: 16px;
    padding-left: 10px;
}
textarea {
    width: 100%;
    height: 100px;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px 0px;
    font-size: 16px;
    padding-left: 10px;
}
`;

const Button = styled.button`
border: none;
padding: 15px;
width: 40%;
margin-top: 10px;
background-color: black;
color: white;
font-size: 16px;
font-weight: 500;
cursor: pointer;
`;

export default Contact
