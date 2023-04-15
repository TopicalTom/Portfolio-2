import { FC, useState } from 'react';

// Styles
import './Header.scss';

// Components
import Button from '../Button';

const Header: FC = () => {
    const [ showDropdown, setShowDropdown ] = useState('');

    const toggleDropdown = (type: string) => {
        setShowDropdown(type);
    };

    return (
        <>
            <header className='header'>
                <nav className='header__nav'>
                    <a
                        className='header__wordmark'
                        onMouseEnter={() => toggleDropdown('')}>
                        <h3>topical</h3>
                        <h3>tom</h3>
                    </a>
                    <ul className='header__links'>
                        <li
                            className='header__link'
                            onMouseEnter={() => toggleDropdown('Work')}>
                            For Work
                            <svg className={`header__drop header__drop`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li
                            className='header__link'
                            onMouseEnter={() => toggleDropdown('Personal')}>
                            For Fun
                            <svg className={`header__drop header__drop`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li
                            className='header__link'
                            onMouseEnter={() => toggleDropdown('')}>
                            About
                        </li>
                    </ul>
                    <Button 
                        className='header__cta'
                        label="Connect" 
                    />
                    <div className='header__options'>
                        <span>:</span>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;