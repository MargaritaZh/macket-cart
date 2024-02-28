import {css} from "styled-components";

import styled from "styled-components";
import {myTheme} from "../style/Theme.styled";
import {MyAnimation} from "../style/animations/Animations";

type ButtonPropsType = {
    typeBtn: "active" | "inactive"
    color?:string
}
export const Button = styled.button<ButtonPropsType>`
    border: none;
    padding: 4px 10px 6px 10px;
    border-radius: 5px;
    width: 86px;
    height: 30px;


    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;


    ${props => props.typeBtn === "active" && css<ButtonPropsType>`
        border: 2px solid ${props => props.color || "red"};
        background-color: ${props => props.color || "red"};
        color: #fff;
        
        &:hover{
            cursor: pointer;
            border:2px solid ${myTheme.colors.secondary};
           background-color: ${myTheme.colors.secondary};
            color: black;
        }
    `}

    ${props => props.typeBtn === "inactive" && css<ButtonPropsType>`
        border: 2px solid ${props=>props.color||"red"};
        background-color: transparent;
        color: ${props=>props.color||"red"};
        
        &:hover {
            cursor: pointer;
            border: 2px solid ${myTheme.colors.secondary};
            background-color: ${myTheme.colors.secondary};
            color: black;
            
            //анимация
            animation: ${MyAnimation} 2s infinite;
        }
    `}
`