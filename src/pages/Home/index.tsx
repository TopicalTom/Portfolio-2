import { FC, useEffect } from 'react';
import { Element, Link } from 'react-scroll';

// Styles
import './Home.scss';

// Components
import Preview from '../../components/Preview';
import Redirect from '../../components/Redirect';

const Home: FC = () => {

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls initial Project Previews
    }, []);

    return (
        <main className="main">
            <section className="main__container">
                <div className="main__details">
                    <h1 
                        className="main__heading">
                        I'm Thomas Griffiths a Product Designer.
                    </h1>
                    <p className="main__mission">
                        Specializing in crafting novel mobile experiences
                    </p>
                    <Link 
                        className="main__button"
                        to="Projects"
                        smooth={true}
                        duration={500}
                        offset={-120}>
                        <span 
                            className="main__label">
                            See My Work
                        </span>
                    </Link>
                </div>
            </section>
            <Element 
                className="main__projects"
                name="Projects">
                <div className="promo">
                    <Preview 
                        name='rally'
                        classname='promo__preview'
                        video="test"
                    />
                    <div className="promo__details">
                        <h2 className="promo__title">
                            Rally
                        </h2>
                        <p className="promo__description">
                            Description
                        </p>
                        <a 
                            className="promo__cta">
                            <span
                                className="promo__action">
                                Learn More
                            </span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                                className="promo__chevron">
                                <g>
                                    <rect width="24" height="24" opacity="0" transform="rotate(90 12 12)" />
                                    <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <Redirect 
                    title="Fraction"
                    className='main__redirect'
                />
            </Element>
        </main>
    );
};

export default Home;