import { FC } from 'react';

// Guard
interface ButtonProps {
    className?: string;
    type?: string;
    size?: string;
    //icon?: string;
    leftIcon?: boolean;
    rightIcon?: boolean;
    label?: string;
};

const Button: FC<ButtonProps> = ({
    className,
    type,
    size, 
    //icon, 
    leftIcon,
    rightIcon,
    label, 
}) => {
    return (
        <div className={`${className} ${type} ${size}`}>
            {label && <span>{label}</span>}
        </div>
    );
};

export default Button;