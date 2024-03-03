import React from 'react';
import {Card} from "./card/Card";
import Logotip from "../../assets/images/Main-image.png";
import styled from "styled-components";

export const SectionCard = () => {
    return (
        <CardSection>
            <Card
                title={"Headline"}
                text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
                logo={Logotip}
            />
            <Card
                title={"Headline"}
                text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
                logo={Logotip}
            />
        </CardSection>
    );
};

const CardSection=styled.section`
    background-color: limegreen;
    height: 100vh;
`