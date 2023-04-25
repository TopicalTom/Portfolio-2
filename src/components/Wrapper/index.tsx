import { FC } from 'react';

// Styles
import './Wrapper.scss';

interface WrapperProps {
    children: any;
    action: any;
}

const Wrapper: FC<WrapperProps> = ({ action, children }) => {

    return (
        <div className='wrapper' onMouseLeave={action}>
            {children}
        </div>
    );
};

export default Wrapper;