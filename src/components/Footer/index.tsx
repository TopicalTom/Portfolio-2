import { FC } from 'react';

// Styles
import './Footer.scss';

// Components

const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__top'>
                    <a 
                        className="footer__wordmark" 
                        href="/">
                        <h3>topicaltom</h3>
                    </a>
                    <div className="footer__nav">
                        <div className="footer__section">
                            <span 
                                className="footer__label">
                                For Work
                            </span>
                            <ul className="footer__links">
                                <li><a
                                    className="footer__link footer__link--external"
                                    href="https://github.com/TopicalTom/Rally">
                                    Fraction
                                </a></li>
                            </ul>
                        </div>
                        <div className="footer__section">
                            <span 
                                className="footer__label">
                                For Fun
                            </span>
                            <ul className="footer__links">
                                <li><a
                                    className="footer__link footer__link--internal"
                                    href="/project/rally">
                                    Rally
                                </a></li>
                                <li><a
                                    className="footer__link footer__link--internal"
                                    href="/project/touchbase">
                                    TouchBase
                                </a></li>
                                <li><a
                                    className="footer__link footer__link--internal"
                                    href="/project/shop">
                                    Shop
                                </a></li>
                                <li><a
                                    className="footer__link footer__link--external"
                                    href="https://github.com/TopicalTom/Shoppies">
                                    Shoppies
                                </a></li>
                                <li><a
                                    className="footer__link footer__link--external"
                                    href="https://github.com/TopicalTom/Spacestagram">
                                    Spacestagram
                                </a></li>
                            </ul>
                        </div>
                        <div className="footer__section">
                            <span 
                                className="footer__label">
                                Connect
                            </span>
                            <ul className="footer__links">
                                <li><a
                                    className="footer__link footer__link--internal"
                                    href="/about">
                                    About
                                </a></li>
                                <li><a
                                    className="footer__link footer__link--internal"
                                    //href={resume} 
                                    download="ThomasGriffithsResume" 
                                    aria-label="Digital Product Designer Resume Download Link">
                                    Resume
                                </a></li>
                                <li><a
                                    className="footer__link footer__link--internal"
                                    href="/contact">
                                    Contact
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer__bottom'>

                </div>
            </div>
        </footer>
    );
};

export default Footer;