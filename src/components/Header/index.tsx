import { FC, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Styles
import './Header.scss';

// Components
import Button from '../Button';
import Dropdown from '../Dropdown';
import PageHeader from '../PageHeader';
import Wrapper from '../Wrapper';
import Menu from '../Menu';

const Header: FC = () => {
    const location = useLocation();
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ content, setContent ] = useState('none');

    const showingFunProjects = content === 'fun' && showDropdown;
    const showingWorkProjects = content === 'work' && showDropdown;

    const openDropdown = () => { setShowDropdown(true) };
    const closeDropdown = () => { setShowDropdown(false) };
    
    const toggleContent = (type: string) => { setContent(type) };
    const toggleDropdown = () => { 
        showDropdown ? closeDropdown() : openDropdown();
        setContent('none'); 
    };
    const handleDropdown = (type: string) => { 
        if (!showDropdown) { openDropdown(); };
        setContent(type);
    };

    // Page Change Watcher
    useEffect(() => {
        closeDropdown();

        // Scrolls to Top
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
        });
    }, [location]);

    return (
        <Wrapper action={() => closeDropdown()}>
            <header className='header'>
                <nav className='header__nav'>
                    <Link
                        className='header__wordmark'
                        to='/'
                        onMouseEnter={() => closeDropdown()}>
                        <h3>topical</h3>
                        <h3>tom</h3>
                    </Link>
                    <ul className='header__links'>
                        <li
                            className={`header__link ${showingWorkProjects && 'active'}`}
                            onMouseEnter={() => handleDropdown('work')}>
                            Work
                            <svg className={`header__drop ${showingWorkProjects && 'active'}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li
                            className={`header__link ${showingFunProjects && 'active'}`}
                            onMouseEnter={() => handleDropdown('fun')}>
                            Fun
                            <svg className={`header__drop ${showingFunProjects && 'active'}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li><Link
                            className='header__link'
                            onMouseEnter={() => closeDropdown()}
                            to='/about'>
                            About
                        </Link></li>
                    </ul>
                    <div className='header__actions'>
                        <Button 
                            type={location.pathname !== '/' ? 'cta' : 'secondary'}
                            size='small'
                            to='mailto:thomasvgriffiths@gmail.com'>
                            Contact
                        </Button>
                    </div>
                    <div className='header__menu'>
                        <Menu 
                            className='header__hamburger'
                            action={toggleDropdown}
                            state={showDropdown}
                        />
                    </div>
                </nav>
            </header>
            {showDropdown 
                ?   <Dropdown 
                        className='header__dropdown' 
                        activeType={content}
                        action={setContent}
                    /> 
                :   null
            }
            {!showDropdown && location.pathname !== '/' 
                ?   <PageHeader title="" /> 
                :   null
            }
        </Wrapper>
    );
};

export default Header;

/*
import { FC, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Styles
import './Header.scss';

// Components
import Button from '../Button';
import Dropdown from '../Dropdown';
import PageHeader from '../PageHeader';
import Wrapper from '../Wrapper';
import Menu from '../MobileMenu';

const Header: FC = () => {
    const location = useLocation();
    const [ showDropdown, setShowDropdown ] = useState('');
    const [ content, setContent ] = useState('');

    const isFunProjects = showDropdown === 'fun';
    const isWorkProjects = showDropdown === 'work';

    const toggleDropdown = (type: string) => {
        setShowDropdown(type);
    };

    const toggleContent = (type: string) => {
        setContent(type);
    };

    // Page Change Watcher
    useEffect(() => {
        // Resets dropdown when page changes
        toggleDropdown('');
    }, [location]);

    return (
        <Wrapper action={() => toggleDropdown('')}>
            <header className='header'>
                <nav className='header__nav'>
                    <Link
                        className='header__wordmark'
                        to='/'
                        onMouseEnter={() => toggleDropdown('')}>
                        <h3>topical</h3>
                        <h3>tom</h3>
                    </Link>
                    <ul className='header__links'>
                        <li
                            className={`header__link ${isWorkProjects && 'active'}`}
                            onMouseEnter={() => toggleDropdown('work')}>
                            Work
                            <svg className={`header__drop ${isWorkProjects && 'active'}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li
                            className={`header__link ${isFunProjects && 'active'}`}
                            onMouseEnter={() => toggleDropdown('fun')}>
                            Fun
                            <svg className={`header__drop ${isFunProjects && 'active'}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li><Link
                            className='header__link'
                            onMouseEnter={() => toggleDropdown('')}
                            to='/about'>
                            About
                        </Link></li>
                    </ul>
                    <div className='header__actions'>
                        <Button 
                            type={location.pathname !== '/' ? 'cta' : 'secondary'}
                            size='small'
                            to='mailto:thomasvgriffiths@gmail.com'>
                            Contact
                        </Button>
                    </div>
                    <div className='header__menu'>
                        <Menu />
                    </div>
                </nav>
            </header>
            {showDropdown !== '' 
                ?   <Dropdown 
                        className='header__dropdown' 
                        type={showDropdown}
                    /> 
                :   null
            }
            {showDropdown == '' && location.pathname !== '/' 
                ?   <PageHeader title="" /> 
                :   null
            }
        </Wrapper>
    );
};

export default Header;

*/