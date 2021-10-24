import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { FiLogOut } from "react-icons/fi";


export default function SubTitleComponent({text, icon}) {

    const {user} = useContext(UserContext);
    
    return(
        <SubTitleStyle>
            <h2>{text}</h2>
            {icon? <FiLogOut></FiLogOut> : ""}
        </SubTitleStyle>
    )
}

const SubTitleStyle = styled.div`
    color:white;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    margin: 30px 10px;
    font-family: 'Press Start 2P', cursive;
    font-weight: 700;
`