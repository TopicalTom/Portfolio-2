import { FC } from 'react';

// Style
import './DownloadCard.scss';

import Resume from '../../assets/images/ThomasGriffithsResumeImage.png';
import resume from "../../assets/files/ThomasGriffithsResume.pdf";

const DownloadCard: FC = () => {
    return (
        <div className='downloadcard'>
            <a 
                className='downloadcard__container'
                href={resume}
                download="ThomasGriffithsResume">
                <h2>Are you hiring?</h2>
                <p>Download my resume</p>
                <img 
                    src={Resume}
                />
            </a>
        </div>
    );
};

export default DownloadCard;