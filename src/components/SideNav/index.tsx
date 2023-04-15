import { FC } from 'react';
import { Link } from 'react-scroll';

// Styles
import './SideNav.scss';

// Guard
interface SideNavProps {
    links: string[];
    active: string;
};

// Components

const SideNav: FC<SideNavProps> = ({ links, active }) => {
    return (
        <nav className='sidenav'>
            <h3 
                className='sidenav__header'>
                Jump to
            </h3>
            <ul 
                className='sidenav__links'>
                {links.map(link => {
                    return (
                        <li>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                className="sidenav__link"
                                smooth={true}
                                offset={-240}
                                duration={500}
                                >
                                {link}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default SideNav;