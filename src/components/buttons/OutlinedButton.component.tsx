import styled from "styled-components";
import { SolidButton } from "./SolidButton";

export interface OutlinedButtonTheme {
    backgroundColor: string;
    roundness: string;
    outlineColor: string;
}

export const OutlinedButton = styled(SolidButton)`
    background-color: ${(props) => props.theme.button.outlined.backgroundColor};
    color: white;
    border: 1px solid ${(props) => props.theme.button.outlined.outlineColor};
    border-radius: ${(props) => props.theme.button.outlined.roundness};
    font-weight: bolder;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 15px;
`;