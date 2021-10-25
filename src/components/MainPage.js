import styled from "styled-components";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import AppTitleComponent from "../shared/AppTitleComponent";
import { loadBoxServer } from "../service";
import { useEffect } from "react";
import SubTitleComponent from "../shared/SubTitleComponent";
import ItemComponent from "../shared/ItemComponent";
import MainButtonsComponent from "../shared/MainButtonsComponent";
import { useRef } from "react";


export default function MainPage () {

    const {user, setUser} = useContext(UserContext);
    const [box, setBox] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const listEndRef = useRef(null);

    

    function scrollIntoBotton () {
        listEndRef.current.scrollIntoView({behavior: 'smooth'})
    }
    


    function totalCalculation () {
        let total = 0;
        box.map(item => {
            
           total+= Number(item.box);
        })
       
        return (total)

    }

    function loadBox() {

        loadBoxServer(user.token)
        .then((res)=> {

            setBox(res.data);
            console.log(res.data);
            setLoading(false);
            scrollIntoBotton()
            
        })
        .catch((err)=> {
            history.push('/');
            setLoading(false)
            alert(err.response.data);
        })
    }

    useEffect(() => {
        if(!user) {
            history.push("/")
            return("")
        }
        loadBox()
        
    }, [])

    if(loading) {
        return (
            <p>Loading</p>
        )
    }
    return (
        <>
        <SubTitleComponent text={`Hello, ${user.name.split(" ")[0]}`} icon={true}></SubTitleComponent>
        <WhiteBoardStyle>
            <ul>
                {box.map(item => {
                    return(
                        <ItemComponent item={item}></ItemComponent>
                    )
                })}
            </ul>
            <div ref={listEndRef}></div>
        </WhiteBoardStyle>
        <TotalStyle>
                <p>Total:</p>
                <TotalBoxStyle isProfit={totalCalculation() > 0? true : false}>{totalCalculation().toFixed(2)}</TotalBoxStyle>
            </TotalStyle>
        <ButtonsSpacStyle>
            <MainButtonsComponent type={'entrada'}></MainButtonsComponent>
            <MainButtonsComponent type={'saida'}></MainButtonsComponent>
        </ButtonsSpacStyle>
        </>
    )
}

const WhiteBoardStyle = styled.div`
    background-color: white;
    padding: 20px;
    margin: auto;
    font-size: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: calc(65vh - 100px);
    overflow-y: scroll;
    scroll-behavior: smooth;
`


const TotalStyle = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    padding:20px 20px;
    background-color:white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size:20px;
    
`
const TotalBoxStyle = styled.p`
    color: ${props => props.isProfit? 'green' : 'red'};
`

const ButtonsSpacStyle = styled.div`
   display: flex;
   justify-content:space-between;
   margin-top: 20px;
`