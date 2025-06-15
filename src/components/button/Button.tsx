import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';

type CustomVariant = 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'danger';

type ButtonProps = Omit<AntdButtonProps, 'type'> & {
    variant?: CustomVariant;
};

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    ...props
}) => {
    const type = variant === 'danger' ? 'primary' : variant; // only pass valid type
    const danger = variant === 'danger';

    return (
        <AntdButton
            type={type as AntdButtonProps['type']} // cast type correctly
            danger={danger}
            {...props}
        />
    );
};
export default Button
