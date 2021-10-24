import styled from "styled-components";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {SignUpOrLoginButtonStyled, SignUpOrLoginInputStyled, SwitchSignUpLoginLinkStyled} from '../shared/sharedStyles';
import UserContext from "../contexts/UserContext";
import AppTitleComponent from "../shared/AppTitleComponent";
import { postLogin } from "../service";


export default function LoginPage() {

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    function userLogin (event){

        event.preventDefault();
        const body = {email, password}
        setIsLoading(true);
        
        postLogin(body)
             .then((response) => {
                 setIsLoading(false);
                 setUser(
                        {
                            token: response.data.token, 
                            name: response.data.name
                        }
                    );
                 const serializedUser = JSON.stringify( {
                    token: response.data.token, 
                    name: response.data.name
                });
                 localStorage.setItem('storedUser', serializedUser);

                 history.push('/main');
             })
             .catch((err) => {
                 setIsLoading(false);
                 console.log(err)
                if (err.response.status === 500){
                     alert ('Erro de servidor');
                 }
                 else if(err.response.status === 403){
                     alert ('E-mail/senha incorretos');
                 }
                 else{
                     alert("Problema no servidor")
                 }
             });
    
    }

    return (
        <LoginDataContainerStyled onSubmit={userLogin}>
            <AppTitleComponent></AppTitleComponent>
            <SignUpOrLoginInputStyled 
                    type="email" 
                    placeholder="e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <SignUpOrLoginInputStyled 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SignUpOrLoginButtonStyled 
                type="submit" 
                disabled={isLoading ? true : false}>
                    Log In
                </SignUpOrLoginButtonStyled>
                <Link to={'/sign-up'} style={{textDecoration: 'none'}}>
                    <SwitchSignUpLoginLinkStyled>
                        First time? Create an account!
                    </SwitchSignUpLoginLinkStyled>
                </Link>
        </LoginDataContainerStyled>
    )

}

const LoginDataContainerStyled = styled.form`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
`