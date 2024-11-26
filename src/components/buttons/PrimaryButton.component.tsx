import styled from "styled-components";
import { BaseButton } from "./BaseButton.component";

export const PrimaryButton = styled(BaseButton)`
    background-color: color(srgb 0.9728 0.9928 0.1355);
    border: none;
    color: black;
    font-weight: bolder;
    font-size: 1rem;
    border-radius: 2px;
    text-transform: uppercase;
    padding: 15px;
`