import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


// Styles 
import "./Button.scss";

// Guard
interface ButtonProps {
    className?: string;
    type: string;
    size: string;
    to: string;
    children: any;
    scroll?: boolean;
    iconized?: boolean;
};

const Button: FC<ButtonProps> = ({
    className,
    type,
    size, 
    to,
    children, 
    scroll,
    iconized
}) => {
    return (
        !scroll
            ?   <Link 
                    className={`button ${type} ${size} ${className} ${iconized}`}
                    to={to}>
                    <span>{children}</span>
                </Link>
            :   <ScrollLink 
                    className={`button ${type} ${size} ${className}`}
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-120}>
                    <span>{children}</span>
                </ScrollLink>

        
    );
};

export default Button;