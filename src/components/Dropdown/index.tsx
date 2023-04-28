import { FC } from 'react';
import { Link } from 'react-router-dom';
import { featuredSelector } from '../../store/reducers';
import { useSelector } from 'react-redux';

// Styles
import './Dropdown.scss';

// Components
import Button from '../Button';
import Tile from '../Tile';

// Guard
interface DropdownProps {
    className: string;
    activeType: string;
    action: (type: string) => any
};

const Dropdown: FC<DropdownProps> = ({ 
    className, 
    activeType, 
    action
}) => {
    const { personalProjects, workProjects } = useSelector(featuredSelector);

    console.log(activeType);

    return (
        <div className={`dropdown ${className}`}>
            <div className='dropdown__container'>
                <div className="dropdown__details">
                    <h3>Featured</h3>
                    <p>Select a project:</p>
                </div>
                <div className={`dropdown__content dropdown__content--${activeType}`}>
                    <div 
                        className='dropdown__heading'
                        onClick={() => action('work')}>
                        <h3>For Work</h3>
                        <svg className={`dropdown__drop ${activeType === 'work' ? 'active' : null}`} viewBox="0 0 24 24">
                            <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                        </svg>
                    </div>
                    <div className={`dropdown__section dropdown__section--work ${activeType === 'work' ? 'active': 'hidden' }`}>
                        {workProjects.map((feature) => {
                            return (
                                <Tile 
                                    className='dropdown__tile dropdown__tile--fun'
                                    type='Design System'
                                    platform='web'
                                    pathname={`/project/${feature.name.toLowerCase()}`}
                                    content={feature}
                                />
                            )
                        })}
                    </div>
                    <div
                        className='dropdown__heading'
                        onClick={() => action('fun')}>
                        <h3>For Fun</h3>
                        <svg className={`dropdown__drop ${activeType === 'fun' ? 'active' : null}`} viewBox="0 0 24 24">
                            <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                        </svg>
                    </div>
                    <div className={`dropdown__section dropdown__section--fun ${activeType === 'fun' ? 'active': 'hidden' }`}>
                        {personalProjects.map((feature) => {
                            return (
                                <Tile 
                                    className='dropdown__tile dropdown__tile--fun'
                                    type='App'
                                    platform='mobile'
                                    pathname={`/project/${feature.name.toLowerCase()}`}
                                    content={feature}
                                />
                            )
                        })}
                    </div>
                    <Link
                        className='dropdown__heading'
                        to="About">
                        <h3>About</h3>
                    </Link>
                </div>
            </div>
            <div className='dropdown__actions'>
                <Button 
                    className='' 
                    to='mailto:thomasvgriffiths@gmail.com' 
                    type='cta'
                    size='large'>
                    Contact Me
                </Button>
            </div>
        </div>
    )
};

export default Dropdown;