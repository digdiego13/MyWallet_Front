import styled from "styled-components";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {SignUpOrLoginButtonStyled, SignUpOrLoginInputStyled, SwitchSignUpLoginLinkStyled} from '../shared/sharedStyles';
import UserContext from "../contexts/UserContext";
import AppTitleComponent from "../shared/AppTitleComponent";

export default function SignUpPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();


    function userSignUp (event){

        event.preventDefault();
        const body = {email, password, username}

    }


    return(
        <SignUpDataContainerStyled onSubmit={userSignUp}>
                <AppTitleComponent></AppTitleComponent>
                <SignUpOrLoginInputStyled 
                    type="email" 
                    placeholder="e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <SignUpOrLoginInputStyled 
                    type="username" 
                    placeholder="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <SignUpOrLoginInputStyled 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SignUpOrLoginInputStyled 
                    type="password" 
                    placeholder="Confirm ur password"
                    value={password}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                />
                <SignUpOrLoginButtonStyled type="submit" disabled={isLoading ? true : false}>
                    Sign Up
                </SignUpOrLoginButtonStyled>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <SwitchSignUpLoginLinkStyled>
                        Switch back to log in
                    </SwitchSignUpLoginLinkStyled>
                </Link>
            </SignUpDataContainerStyled>
    )
}

const SignUpPageStyled = styled.div`
    display: flex;
`;

const SignUpDataContainerStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px
`