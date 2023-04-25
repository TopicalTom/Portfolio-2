import { FC, useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import { featuredSelector } from '../../store/reducers';
import { useActions } from '../../hooks';
import { useSelector } from 'react-redux';

// Styles
import './Home.scss';

// Components
import Preview from '../../components/Preview';
import Redirect from '../../components/DownloadCard';
import Page from '../../components/Page';
import Button from '../../components/Button';

const Home: FC = () => {
    const { fetchFeatured } = useActions();
    const { personalProjects, isLoadingFeatured } = useSelector(featuredSelector);

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls Featured Project Previews
        fetchFeatured();
    }, []);

    return (
        <Page className='main'>
            <section className="main__hero">
                <div className="main__details">
                    <h1 
                        className="main__heading">
                        I'm Thomas Griffiths a Product Designer.
                    </h1>
                    <p className="main__mission">
                        Specializing in building out design systems and crafting novel mobile experiences. Currently looking for a full-time position.
                    </p>
                    <div className='main__actions'>
                        <Button 
                            className='main__cta'
                            type='cta'
                            size='large'
                            to='/project/fraction'>
                            View Latest Work
                        </Button>
                        <Button 
                            className='main__cta'
                            type='secondary'
                            size='large'
                            to='Projects'
                            scroll>
                            Browse other
                        </Button>
                    </div>
                </div>
            </section>
            <Element 
                className="main__projects"
                name="Projects">
                {personalProjects.map((feature) => {
                    return (
                        <section className="promo">
                            <Preview 
                                classname='promo__preview'
                                content={feature.videoPreview}
                            />
                            <div className="promo__details">
                                <h2 
                                    className="promo__title">
                                    {feature.name}
                                </h2>
                                <p 
                                    className="promo__description">
                                    {feature.description}
                                </p>
                                <Button 
                                    type='secondary'
                                    size='medium'
                                    to={`/project/${feature.name.toLowerCase()}`}>
                                    View project
                                </Button>
                            </div>
                        </section>
                    )
                })}
            </Element>
        </Page>
    );
};

export default Home;