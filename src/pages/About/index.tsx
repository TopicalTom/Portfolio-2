import { FC } from 'react';

// Asset
import Profile from '../../assets/images/IMG_3350.png';

// Styles
import "./About.scss";

// Components
import Page from '../../components/Page';

const About: FC = () => {

    return (
        <Page className='about' >
            <aside className='about__profile'>
                <img 
                    className='about__image'
                    src={Profile}
                />
            </aside>
            <section className='about__content'>
                <h2>A bit about me...</h2>
                <p>While I am no longer building Lego worlds or making Forge Maps on Halo 3 for my friends to play on, creating things has been core to my identity ever since I was a kid. Becoming a Product Designer is just the natural next step, even though the journey to get here wasn't a straightforward one.</p>
                <p>After five-degree changes and some exploration, I stumbled upon the potential of design while working as a marketing designer for a few extracurricular conferences. It was here where I was able to capture the same excitement I felt when working on my childhood extracurriculars by shaping experiences while being able to create an impact on the people that attended.</p>
                <p>Since then, I have been on a mission to pick up as many skills as possible so that I would have the resources to take on any problem thrown my way in creating exceptional experiences.</p>
                <p>I'm not all work though, as I like to balance my life by playing video games with friends, consuming as many movies as possible as I work my way through the IMDB Top 250, or driving my Jeep with the roof down when the weather is just right.</p>
                <p>Make sure to reach out if you want to chat, or have a cool opportunity I might be interested in, as I am currently looking for a new position!</p>
            </section>
        </Page>
    );
};

export default About;