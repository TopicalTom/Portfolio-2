import { FC } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Footer.scss';

// Assets
import resume from "../../assets/files/ThomasGriffithsResume.pdf";

const Footer: FC = () => {
    let year = new Date().getFullYear();
    
    const projectLinks = [
        {
            label: 'For Work',
            links: [
                {
                    name: 'Fraction',
                    pathname: '/project/fraction',
                    type: 'internal'
                }
            ]
        },
        {
            label: 'For Fun',
            links: [
                {
                    name: 'Rally',
                    pathname: '/project/rally',
                    type: 'internal'
                },
                {
                    name: 'TouchBase',
                    pathname: '/project/touchbase',
                    type: 'internal'
                },
                {
                    name: 'Shop',
                    pathname: '/project/shop',
                    type: 'internal'
                },
                {
                    name: 'Shoppies',
                    pathname: 'https://github.com/TopicalTom/Shoppies',
                    type: 'external'
                },
                {
                    name: 'Spacestagram',
                    pathname: 'https://github.com/TopicalTom/Spacestagram',
                    type: 'external'
                },
            ]
        }
    ]

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__top'>
                    <Link 
                        className="footer__wordmark" 
                        to="/">
                        <h3>topicaltom</h3>
                    </Link>
                    <nav className="footer__nav">
                        {projectLinks.map(group => {
                            return (
                                <div className="footer__section">
                                    <span 
                                        className="footer__label">
                                        {group.label}
                                    </span>
                                    <ul className="footer__links">
                                        {group.links.map(link => {
                                            return (
                                                <li>
                                                {link.type === 'internal' 
                                                    ?   <Link 
                                                            to={link.pathname}>
                                                            {link.name}
                                                        </Link>
                                                    :   <a
                                                            href={link.pathname}>
                                                            {link.name}
                                                        </a>
                                                }
                                            </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                        <div className="footer__section">
                            <span 
                                className="footer__label">
                                Connect
                            </span>
                            <ul className="footer__links">
                                <li><Link
                                    to='/about'>
                                    About
                                </Link></li>
                                <li><a 
                                    href={resume}
                                    download="ThomasGriffithsResume">
                                    Resume
                                </a></li>
                                <li><Link 
                                    to='mailto:thomasvgriffiths@gmail.com'>
                                    Contact
                                </Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="footer__break" />
                <div className="footer__bottom">
                    <div className='footer__socials'>
                        <a
                            className="footer__social"
                            href="https://www.linkedin.com/in/topicaltom/"
                            aria-label="LinkedIn Social Link">
                            <svg className="footer__icon" viewBox="0 0 510 510">
                                <path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
                                    M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9
                                    S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204
                                    V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z"
                                />
                            </svg>
                        </a>
                        <a
                            className="footer__social"
                            href="https://github.com/TopicalTom"
                            aria-label="Github Social Link">
                            <svg className="footer__icon" viewBox="0 0 568.034 568.034"> 
                                <path d="M550.99,0H17.051C8.948,0,2.381,6.567,2.381,14.67v538.694c0,8.104,6.567,14.67,14.67,14.67h177.498v-0.129
                                    c8.011-0.092,14.149-4.577,14.431-12.166c0.728-19.725,0.214-39.492,0.214-58.562c-14.296,0.667-27.944,2.473-41.438,1.695
                                    c-29.762-1.714-52.632-14.413-64.493-43.556c-7.026-17.265-17.613-32.032-34.101-41.886c-3.079-1.842-5.771-4.554-8.127-7.308
                                    c-3.079-3.592-2.503-7.282,2.362-8.268c4.908-0.998,10.27-1.695,15.11-0.79c19.009,3.568,32.154,15.49,42.216,31.347
                                    c19.896,31.371,50.521,40.974,84.976,26.487c1.921-0.808,4.363-2.766,4.725-4.553c2.778-13.887,7.968-26.549,18.427-37.65
                                    c-11.628-2.154-22.399-3.739-32.962-6.188c-30.417-7.038-57.742-19.7-77.724-44.848c-16.303-20.514-23.758-44.528-27.185-70.086
                                    c-5.367-40.031-0.563-77.503,26.928-109.493c1.389-1.616,2.142-4.927,1.524-6.94c-6.885-22.497-5.833-44.805,0.991-67.051
                                    c3.581-11.683,4.578-12.265,16.5-10.637c0.729,0.098,1.438,0.281,2.161,0.404c23.898,3.954,44.468,15.526,64.731,27.95
                                    c2.724,1.671,6.873,2.711,9.866,1.983c48.397-11.744,96.702-11.695,145.093,0.043c2.809,0.679,6.561-0.288,9.247-1.695
                                    c11.016-5.759,21.561-12.454,32.718-17.914c12.98-6.346,26.652-11.12,41.371-10.857c2.576,0.049,6.561,2.509,7.423,4.786
                                    c8.856,23.464,10.723,47.375,3.666,71.794c-0.753,2.607,0.367,6.322,1.769,8.892c6.965,12.779,16.689,24.572,21.096,38.127
                                    c13.434,41.316,8.538,82.229-9.749,121.06c-16.757,35.594-47.834,53.63-84.621,62.933c-12.424,3.14-25.153,5.049-38.556,7.681
                                    c17.564,18.348,20.318,40.74,20.006,64.192c-0.324,24.192-0.238,48.391-0.251,72.589c-0.006,11.72,5.11,18.195,14.039,18.574
                                    c-0.006,0.037,188.723,0.037,188.723,0.037V14.67C565.653,6.567,559.087,0,550.99,0z"
                                />
                            </svg>
                        </a>
                        <a
                            className="footer__social"
                            href="https://www.instagram.com/topicaltom/"
                            aria-label="Insta Social Link">
                            <svg className="footer__icon" viewBox="0 0 44 44">
                                <path d="M30.5,1 C34.4,1.2 37.4,2.3 39.5,4.5 C41.6,6.7 42.8,9.6 43,13.5 C43,15.0428571 43.0929847,17.7945153 43.0996265,21.8446383 L43.0994306,24.4702123 C43.0968112,27.5942602 43.0821429,29.7857143 43,31.1 C42.8,35 41.7,38 39.5,40.1 C37.3,42.2 34.4,43.4 30.5,43.6 C29.1962963,43.6814815 26.9631001,43.6965706 23.9086064,43.6993649 L19.5297877,43.6994306 C16.4057398,43.6968112 14.2142857,43.6821429 12.9,43.6 C9,43.4 6,42.3 3.9,40.1 C1.8,38 0.6,35 0.4,31.1 C0.307407407,29.6185185 0.300548697,26.9367627 0.300040644,23.213499 L0.300040644,21.386501 C0.300548697,17.6632373 0.307407407,14.9814815 0.4,13.5 C0.6,9.6 1.7,6.6 3.9,4.5 C6,2.4 9,1.2 12.9,1 C14.3814815,0.907407407 17.0632373,0.900548697 20.786501,0.900040644 L22.6000364,0.900036443 C26.4076531,0.900510204 29.0142857,0.907142857 30.5,1 Z M21.6,11.3 C18.5,11.3 15.9,12.4 13.8,14.5 C11.7,16.7 10.6,19.2 10.6,22.3 C10.6,25.4 11.7,28 13.8,30.1 C16,32.2 18.5,33.3 21.6,33.3 C24.7,33.3 27.3,32.2 29.4,30.1 C31.5,27.9 32.6,25.4 32.6,22.3 C32.6,19.2 31.5,16.6 29.4,14.5 C27.3,12.3 24.7,11.3 21.6,11.3 Z M21.6,15.1 C23.6,15.1 25.3,15.8 26.7,17.2 C28.1,18.6 28.8,20.4 28.8,22.3 C28.8,24.2 28.1,25.9 26.7,27.3 C25.3,28.7 23.6,29.4 21.6,29.4 C19.6,29.4 17.9,28.7 16.5,27.3 C15.1,26 14.4,24.3 14.4,22.3 C14.4,20.3 15.1,18.6 16.5,17.2 C17.9,15.8 19.6,15.1 21.6,15.1 Z M33.1,8.2 C32.4,8.2 31.8,8.5 31.3,9 C30.8,9.5 30.5,10.1 30.5,10.8 C30.5,11.5 30.8,12.1 31.3,12.6 C31.8,13.1 32.4,13.4 33.1,13.4 C33.8,13.4 34.4,13.1 34.9,12.6 C35.4,12.1 35.7,11.5 35.7,10.8 C35.7,10.1 35.4,9.5 34.9,9 C34.4,8.5 33.8,8.2 33.1,8.2 Z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className='footer__copyright'>
                        <span>© {year}</span>
                        <span>|</span>
                        <a 
                            className="footer__source" 
                            href="https://github.com/TopicalTom/Portfolio-2"
                            aria-label="Portfolio Code Repository">
                            Built in React
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;