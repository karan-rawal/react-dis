import React from 'react';

export interface IBaseButtonProps {
    label: string;
    onClick: () => void;
}

const BaseButton: React.FC<IBaseButtonProps> = ({
    label,
    onClick,
}) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}
 
export default BaseButton;