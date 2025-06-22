import React, { Fragment } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    variant?: 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link'
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    shape?: 'default' | 'circle' | 'round'
    size?: 'large' | 'middle' | 'small'
    htmlType?: 'button' | 'submit' | 'reset'
    value?: string
    disable?: boolean
}

const Button: React.FC<ButtonProps> = ({
    variant = 'solid',
    type = 'primary',
    shape = 'default',
    size = 'middle',
    htmlType = 'button',
    value = '',
    disabled = false,
    ...props
}) => {
    const classes = [
        styles.button,
        styles[type],
        styles[variant],
        styles[size],
        props.className
    ].filter(Boolean).join(' ');

    return (
        <Fragment>
            <button
                className={classes}
                type={htmlType}
                disabled={disabled}
                {...props}>
                {value}
            </button>
        </Fragment>
    );
};

export default Button;
