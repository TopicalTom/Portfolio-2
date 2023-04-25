import { FC } from 'react';

// Style
import './DownloadCard.scss';

import Resume from '../../assets/images/ThomasGriffithsResumeImage.png';

const DownloadCard: FC = () => {
    return (
        <div className='downloadcard'>
            <h2>Like what you see?</h2>
            <p>Download my resume</p>
            <img 
                src={Resume}
            />
        </div>
    );
};

export default DownloadCard;