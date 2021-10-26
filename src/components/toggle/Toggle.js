import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/context';

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }
    return (
        <Container>
            <Icon src="/assets/toggle/sun.png"/>
            <Icon src="/assets/toggle/moon.png"/>
            <Button onClick={handleClick}
                style={{left: theme.state.darkMode ? 0 : 30}}
            />
        </Container>
    )
}

const Container = styled.div`
position: fixed;
width: 55px;
height: 25px;
border-radius: 20px;
border: 1px solid #999;
background-color: white;
top: 10px;
right: 10px;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 999;
`;

const Icon = styled.img`
width: 18px;
height: 18px;
`;

const Button = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: #999;
position: absolute;
cursor: pointer;
`;

export default Toggle
