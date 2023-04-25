import { FC } from 'react';
import { Link } from 'react-router-dom';
import { featuredSelector } from '../../store/reducers';
import { useActions } from '../../hooks';
import { useSelector } from 'react-redux';

// Styles
import './Dropdown.scss';
import Preview from '../Preview';

// Assets
import overlay from "../../assets/overlay/iPhoneOverlay.svg";
import fraction from "../../assets/images/Post-funded-Dashboard.png";


// Guard
interface DropdownProps {
    className: string;
    type: string;
};

// Components

const Dropdown: FC<DropdownProps> = ({ className, type }) => {
    const { personalProjects, workProjects } = useSelector(featuredSelector);

    return (
        <>
            <div className={`dropdown ${className}`}>
                <div className='dropdown__container'>
                    <div className="dropdown__details">
                        <h3>Featured</h3>
                        <p>Select a project:</p>
                    </div>
                    <div className={`dropdown__content dropdown__content--${type === 'Work' ? 'work' : 'fun'}`}>
                        {type === 'Fun' ? personalProjects.map((feature) => {
                            return (
                                <Link
                                    to={`/project/${feature.name.toLowerCase()}`}
                                    className='dropdown__card dropdown__card--fun'>
                                    <img 
                                        className='dropdown__overlay' 
                                        src={overlay}
                                        alt=""
                                    />
                                    <video
                                        id={`${feature.name}`}
                                        className='dropdown__video'
                                        src={feature.videoPreview.file} 
                                        //autoPlay
                                        loop
                                        playsInline
                                        muted
                                    />
                                        <h3>{feature.name}</h3>
                                        <h5>App</h5>
                                </Link>
                            )
                        }) : <></>}
                        {type === 'Work' && <>
                            <Link to={`/project/fraction`} className='dropdown__card dropdown__card--work '>
                                <img 
                                    className='dropdown__new' 
                                    src={workProjects[0].imagePreview.file}
                                    alt=""
                                />
                                <h3>Fraction</h3>
                                <h5>Design System</h5>
                            </Link>
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Dropdown;