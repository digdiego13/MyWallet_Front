import styled from "styled-components";

export default function AppTitleComponent() {
    return(
        <TitleStyle>E-Wallet</TitleStyle>
    )
}

const TitleStyle = styled.h1`
    margin: 30px 10px;
    font-family: 'Press Start 2P', cursive;
    color:white;
    font-size: 30px;
`