import styled from "styled-components";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import dayjs from "dayjs";


export default function ItemComponent({item}) {

    const {
        date,
        description,
        box
    } = item;
    console.log(item)

    const isProfit = box>0? true : false;
    const newDateFormat = dayjs(date).format('DD/MM')

    return(
        <ItemStyle>
            <div>
                <DataStyle>{newDateFormat}</DataStyle>
                
                <DescriptionStyle>
                    <p>{description}</p>
                </DescriptionStyle>
            </div>
            <BoxStyle isProfit={isProfit}>{Math.abs(box).toFixed(2)}</BoxStyle>
        </ItemStyle>
    )
}

const ItemStyle = styled.li`
    display: flex;
    margin: 10px 0px;
    justify-content: space-between;
    

    div{
        display: flex;
        gap:18px;
        
        
    }
`

const DataStyle = styled.p`
    color: gray;
`

const DescriptionStyle = styled.div`
    color: black;
    white-space: nowrap;
    overflow-x: scroll;
    max-width: 25vw;
    
    
    
`

const BoxStyle = styled.p`
    color: ${props => props.isProfit? "green" : "red"}
`