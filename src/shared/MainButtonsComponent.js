import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

export default function MainButtonsComponent ({type}) {

    

    return(
        <>
        {type === "entrada" ? 
            
            <Button>
                <LinkStyle to={'/profit'} > 
                  <BiPlusCircle></BiPlusCircle>
                  <p>Nova<br></br>entrada</p>
                </LinkStyle>
            </Button>
           
        :
            
            <Button>
                <LinkStyle to={'/spending'} > 
                   <BiMinusCircle></BiMinusCircle>
                   <p>Nova<br></br>Saida</p>
                </LinkStyle>
            </Button>
            }
        
        </>
    )
}

const Button = styled.button`
    background-color: #CC0000;
    
    padding: 10px;
    height: calc(15vh - 5px);
    width: 48%;
    border-radius:5px;
    border: 2px solid gray;
    text-align:left;
    
`

const LinkStyle = styled(Link)`
color:white;
font-size:20px;
text-decoration:none;
`
