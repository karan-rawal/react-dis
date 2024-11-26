import React from 'react';

export interface IBaseButtonProps {
    label: string;
    onClick: () => void;
}

export const BaseButton: React.FC<IBaseButtonProps> = ({
    label,
    onClick,
    ...props
}) => {
    console.log(props);
    return (
        <button onClick={onClick} {...props}>
            {label}
        </button>
    );
}
 