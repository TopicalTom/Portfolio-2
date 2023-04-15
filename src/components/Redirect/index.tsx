import { FC } from 'react';

// Style
import './Redirect.scss';

// Guard
interface RedirectProps {
    className: string;
    title: string;
    toggleable?: boolean;
};

const Redirect: FC<RedirectProps> = ({ className, title, toggleable }) => {
    return (
        <div className={`redirect ${className}`}>
            <h5>{title}</h5>
            <p></p>
            <button></button>
        </div>
    );
};

export default Redirect;