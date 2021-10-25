import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router";


export default function SubTitleComponent({text, icon}) {

    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    function logOut () {
        localStorage.clear()
        setUser({})
        history.push('/');
    }
    
    return(
        <SubTitleStyle>
            <h2>{text}</h2>
            {icon? <FiLogOut onClick={logOut}></FiLogOut> : ""}
        </SubTitleStyle>
    )
}

const SubTitleStyle = styled.div`
    color:white;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 10px;
    font-family: 'Press Start 2P', cursive;
    font-weight: 700;
`