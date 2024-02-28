import React from 'react';
import './App.css';
import styled from "styled-components";
import {Button} from "./components/Button.styled";
import {myTheme} from "./style/Theme.styled";
import Logotip from "./assets/images/Main-image.png"

function App() {
    return (
        <div className="App">
            <BoxSection>
                <BoxCard>
                    <img src={Logotip} alt="Главное изображение"/>
                    <BoxTextWrapper>
                        <MainText>Headline</MainText>
                        <VarText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                            venen.</VarText>
                        <BoxButtons>
                            <Button typeBtn={"active"} color={myTheme.colors.primary}>See more</Button>
                            <Button typeBtn={"inactive"} color={myTheme.colors.primary}>Save</Button>
                        </BoxButtons>
                    </BoxTextWrapper>
                </BoxCard>
            </BoxSection>
            {/*<BoxSection title={"hghruh"}  text{"hgrg"}  imgSrc={Logo2}/>*/}
            {/*<BoxSection title={"hghruh"}  text{"hgrg"}  imgSrc={Logo2}/>*/}
        </div>
    );
}

const BoxSection = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const BoxCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    width: 300px;
    min-height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 10px;
`
const BoxTextWrapper = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`

const MainText = styled.h1`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #000;
    margin-top: 20px;
`


const VarText = styled.p`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    color: #abb3ba;
    margin-top: 20px;
`
const BoxButtons = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
    
    @media ${myTheme.media.mobile}{
        flex-direction: column;
    }
`

export default App;
