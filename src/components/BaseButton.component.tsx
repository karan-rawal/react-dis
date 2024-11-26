import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: red;
`;

export interface IBaseButtonProps {
    label: string;
    onClick: () => void;
}

const BaseButton: React.FC<IBaseButtonProps> = ({
    label,
    onClick,
}) => {
    return (
        <StyledButton onClick={onClick}>
            {label}
        </StyledButton>
    );
}
 
export default BaseButton;