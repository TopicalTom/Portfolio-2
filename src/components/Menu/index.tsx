import { FC } from 'react';

// Styles
import './Menu.scss';

// Guard
interface MenuProps {
    className: string;
    state: boolean;
    action: () => void;
};

const Menu: FC<MenuProps> = ({ className, state, action }) => {
    return (
        <button 
            className={`${className} menu`}
            onClick={action}> 
            {!state 
                ?   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="16" width="14" height="2" rx="1" fill="white"/>
                        <rect x="5" y="11" width="14" height="2" rx="1" fill="white"/>
                        <rect x="5" y="11" width="14" height="2" rx="1" fill="white"/>
                        <rect x="5" y="6" width="14" height="2" rx="1" fill="white"/>
                    </svg>
                :   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="7.75781" y="6.34326" width="14" height="2" rx="1" transform="rotate(45 7.75781 6.34326)" fill="white"/>
                        <rect x="6.34277" y="16.2427" width="14" height="2" rx="1" transform="rotate(-45 6.34277 16.2427)" fill="white"/>
                    </svg>
            }
        </button>
    );
};

export default Menu;