import { FC } from 'react';

// Guard
interface SubSectionProps {
    children: any;
};

// Components

const SubSection: FC<SubSectionProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SubSection;