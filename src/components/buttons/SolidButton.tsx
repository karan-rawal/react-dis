import styled from "styled-components";
import { BaseButton } from "./BaseButton.component";

export interface SolidButtonTheme {
    backgroundColor: string;
    roundness: string;
}

export const SolidButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.button.solid.backgroundColor};
    border: none;
    color: black;
    font-weight: bolder;
    font-size: 1rem;
    border-radius: ${(props) => props.theme.button.solid.roundness};
    text-transform: uppercase;
    padding: 15px;
`