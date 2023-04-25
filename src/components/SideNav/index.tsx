import { FC } from 'react';
import { Link } from 'react-scroll';

// Styles
import './SideNav.scss';

// Guard
interface SideNavProps {
    links: string[];
};

// Components

const SideNav: FC<SideNavProps> = ({ links }) => {
    return (
        <nav className='sidenav'>
            <h5
                className='sidenav__header'>
                Jump to
            </h5>
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