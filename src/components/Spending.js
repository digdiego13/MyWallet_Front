import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import SubTitleComponent from "../shared/SubTitleComponent";
import { useContext, useState } from "react";
import {SignUpOrLoginButtonStyled, SignUpOrLoginInputStyled, SwitchSignUpLoginLinkStyled} from '../shared/sharedStyles';
import { newTransaction } from "../service";
import UserContext from "../contexts/UserContext";

export default function Spending () {

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const {user} = useContext(UserContext);
    const token = user?.token;
    const history = useHistory();

    if(!user) {
        history.push("/")
        return(<h1>Loading</h1>)
    }
    function saveTransaction (event) {
        event.preventDefault();
        const body = {
            transaction: value,
            description: description
        }
        newTransaction("spend", token, body)
        .then((res)=>{
            setValue('');
            setDescription("");
        })
        .catch((err) => {
            alert(err.response.data);
            if(err.response.status === 401) {
                history.push('/');
            }
        })
    }

    return(
        <>
        <form onSubmit={saveTransaction}>
            <SubTitleComponent text={'New spend'}></SubTitleComponent>
            <SignUpOrLoginInputStyled 
                    type="number" 
                    placeholder="Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
                <SignUpOrLoginInputStyled 
                    type="text" 
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <ButtonsStyle>
                    <Link to={'/main'} style={{textDecoration: 'none'}}>
                        <SignUpOrLoginButtonStyled
                        back={"brown"}>
                            Cancel
                        </SignUpOrLoginButtonStyled>
                    </Link>    
                    <SignUpOrLoginButtonStyled
                    type='submit'
                    back={"red"}>
                        Save it
                    </SignUpOrLoginButtonStyled>
                </ButtonsStyle>
        </form>
        </> 
    )
}       

const ButtonsStyle = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:30px
`