import React from 'react';

import logotip from "../../assets/images/Main-image.png"

import styled from "styled-components";
import {Card} from "./card/Card";
import {Cardl} from "./card/Card";

export const SectionCard = () => {
    return (
        <StyledSectionCard>
            <Card
                title={"Headline"}
                text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
                logo={logotip}
            />
            <Card
                title={"Headline"}
                text={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
                logo={logotip}
            />
        </StyledSectionCard>
    );
};

const StyledSectionCard=styled.section`
    background-color: limegreen;
    width: 100%;
    height: 100vh;
`