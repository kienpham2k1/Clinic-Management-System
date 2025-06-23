import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    variant?: 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link'
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    shape?: 'default' | 'circle' | 'round'
    size?: 'large' | 'middle' | 'small'
    htmlType?: 'button' | 'submit' | 'reset'
    value?: string
    disabled?: boolean
    icon?: ReactNode
    iconPosition?: 'start' | 'end'
    toggled?: boolean
    isToggle?: boolean
    onToggleChange?: (state: boolean) => void
}

const Button: React.FC<ButtonProps> = ({
    variant = 'solid',
    type = '',
    shape = 'default',
    size = 'middle',
    htmlType = 'button',
    value = '',
    disabled = false,
    icon,
    iconPosition = 'start',
    toggled,
    isToggle = false,
    onToggleChange,
    ...props
}) => {
    const [internalToggle, setInternalToggle] = useState(false);
    const toggleState = toggled !== undefined ? toggled : internalToggle;

    useEffect(() => {
        if (toggled !== undefined) setInternalToggle(toggled);
    }, [toggled]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (isToggle) {
            const newState = !toggleState;
            if (toggled === undefined) setInternalToggle(newState);
            onToggleChange?.(newState);
        }
        props.onClick?.(e);
    };
    const classes = [
        styles.button,
        styles[variant],
        styles[type],
        styles[shape],
        styles[size],
        toggleState ? styles['active'] : '',
        props.className
    ].filter(Boolean).join(' ');

    return (
        <Fragment>
            <button
                className={classes}
                type={htmlType}
                disabled={disabled}
                onClick={handleClick}
                {...props}>
                {icon && iconPosition === 'start' && <span className={styles.icon}>{icon}</span>}
                {value && <span>{value}</span>}
                {icon && iconPosition === 'end' && <span className={styles.icon}>{icon}</span>}
            </button>
        </Fragment>
    );
};

export default Button;
