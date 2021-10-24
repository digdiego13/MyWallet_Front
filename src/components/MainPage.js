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


export default function MainPage () {

    const {user} = useContext(UserContext);
    const [box, setBox] = useState([]);
    const [loading, setLoading] = useState(true);


    function totalCalculation () {
        let total = 0;

        box.map(item => {
           total+= item.box
        })

        return (total)

    }

    function loadBox() {

        loadBoxServer(user.token)
        .then((res)=> {

            setBox(res.data);
            console.log(res.data);
            setLoading(false);
        })
        .catch((err)=> {
            setLoading(false)
            alert("server problem")})
    }

    useEffect(() => {
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
            <BoxListStyle>
                {box.map(item => {
                    return(
                        <ItemComponent item={item}></ItemComponent>
                    )
                })}
            </BoxListStyle>
            <TotalStyle>
                <p>Total:</p>
                <TotalBoxStyle isProfit={true}>{Math.abs(totalCalculation()).toFixed(2)}</TotalBoxStyle>
            </TotalStyle>
        </WhiteBoardStyle>
        <ButtonsSpacStyle>
            <MainButtonsComponent type={'entrada'}></MainButtonsComponent>
            <MainButtonsComponent type={'saida'}></MainButtonsComponent>
        </ButtonsSpacStyle>
        </>
    )
}

const WhiteBoardStyle = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    margin: auto;
    font-size: 20px;
    height: calc(65vh - 30px);
    position:relative;
`
const BoxListStyle = styled.ul`
    overflow-y: scroll;
`

const TotalStyle = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    position:absolute;
    padding:20px 20px;
    bottom:0px;
    right: 0px;
    left: 0px;
    
`
const TotalBoxStyle = styled.p`
    color: ${props => props.isProfit? 'green' : 'red'}
`

const ButtonsSpacStyle = styled.div`
   display: flex;
   justify-content:space-between;
   margin-top: 20px;
`