import { FC, useEffect, useState } from 'react';

// Styles
import "./Project.scss";

// Components
import Page from '../../components/Page';
import Section from '../../components/Section';
import SideNav from '../../components/SideNav';
import Card from '../../components/Card';
import Redirect from '../../components/Redirect';
import Preview from '../../components/Preview';
import Tags from '../../components/Tags';

const TouchBase: FC = () => {
    const [isActive, setActive] = useState('');

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls TouchBase Assets
    }, []);

    const links = [
        "Overview", 
        "Problem", 
        "Define",
        "Research",
        "Ideation",
        "Constraints",
        "Design",
        "Next Steps" 
    ];

    return (
        <Page title='TouchBase' className='project'>
            <aside className='project__sidenav'>
                <SideNav 
                    links={links}
                    active={isActive}
                />
            </aside>
            <div className='project__content'>
                <Section 
                    initial
                    name={links[0]}
                    className='project__section'>
                    <h1>TouchBase</h1>
                    <Tags 
                        color='blue'
                        type='App'
                        role='Independent'
                        duration='Ongoing'
                    />
                    <p>TouchBase is a Swift app that allows for approachable networking through objective based conversation initiators and meetup scheduling within one's personal resume.</p>
                    <p>TouchBase builds on this core experience by leveraging the newly introduced App Clips infrastructure of iOS 14 to enable spontaneous interactions through shareability of networking details with people outside of the app ecosystem.</p>
                    <Preview 
                        name='touchbase'
                        classname='project__preview'
                        video=""
                    />
                </Section>
                <Section 
                    name={links[1]}
                    className='project__section'>
                    <h2>Transitioning to Networking</h2>
                    <p>As someone who is in the midst of pivoting away from their university degree into a brand new field, the transition can, at times, be daunting.</p>
                    <p>While there are plenty of networking opportunities during an undergraduate degree, I always found myself on the side of the networking facilitators for events and less on the side of the networker. Due to this, the shift to communicating my value and story is a new experience that I was woefully unprepared for and was well outside my comfort zone.</p>
                    <Card 
                        title="Observation"
                        caption="Networking is a time-intensive activity which can be draining for people that have very little previous exposure to it."
                    />
                </Section>
                <Section 
                    name={links[2]}
                    className='project__section'>
                    <h2>Value of Networking</h2>
                    <p>If networking is so draining to engage in, it’s fair to ask why someone would even bother engaging in it?</p>
                    <p>According to TopResume, “when you invest in your relationships - professional and personal - it can help you develop your skill set, stay on top of the latest trends, keep a pulse on the job market and meet prospective people that will foster your career development.” The importance of this is furthered by Review42 with the following statistics:</p>
                    <>Metrics</>
                    <p>Aside from the interpersonal value of networking, there is real tangible value for people either new to their careers, or are looking to switch things up, but people just aren’t investing as much time as they should be. Taking this into consideration, there is a clear need to encourage continual engagement of networking by making the practice less draining for those involved.</p>
                    <Card 
                        title="How Might We"
                        caption="Make networking a more enjoyable and habitual activity for people at different stages of their career journey."
                    />
                </Section>
                <Section 
                    name={links[3]}
                    className='project__section'>
                    <h2>Networking Dynamics</h2>
                    <p>In order to understand the dynamics of the networking experience, and the underlying reasons for why it feels draining and hard to maintain, I conducted three online interviews to get the perspective of individuals who were early on in their careers.</p>
                    <p>After synthesizing the interview data, a very clear theme began to emerge of a struggle to connect because they weren’t sure how to make their interactions valuable to the person they wanted to connect with. This was exacerbated by perceptions of inequality owing to their age, current skill set or experience level which made them feel like they had very little, or new, to offer people that were more seasoned in their careers.</p>
                    <p>Looking to overcome this barrier, interview participants would conduct preliminary research on the people they wanted to interact with, or had interacted previously with, which unfortunately resulted in networking essentially becoming a research assignment rather than an actual human connection.</p>
                    <>Quote Carousel</>
                    <p>Using these quotes from above I was able to construct two personas that embody the people I interviewed, and an additional third that was inferred based on online articles and who the people I interviewed were hoping to interact with.</p>
                    <>Persona Carousel</>
                    <p>Despite all being at different stages in their career, networking provides an avenue for each of them to progress their lifelong goals. The disconnect for each of these personas comes from the uncertainty of knowing how to communicate and facilitate the “quid pro quo” of networking in a way that feels shared and is sustainable over an extended period of time.</p>
                    <p>While each persona has their own issues with the networking experience, I focused primarily on the perspective of Paulina (prospective persona) as they arguably have the most barriers to overcome due to being new to a field and networking in general. To illustrate her journey, I have constructed the following journey map:</p>
                    <>Journey Map</>
                    <Card 
                        title="Key Takeaway"
                        caption="Networking feels dirty, selfish and forced due to the directness of asking for favours from someone with whom they have little to no prior connection. The hidden nature of one’s aspirations and needs leads to it feeling like a one-sided transaction which is exacerbated by the perceived inequality between people at different stages of their careers."
                    />
                </Section>
                <Section 
                    name={links[4]}
                    className='project__section'>
                    <h2>Unhiding Information</h2>
                    <p>Information like one’s background or current roles are readily available on platforms like LinkedIn, but details on what a person is interested in talking about, if they have the time to help, and if they are even willing or capable of doing so sometimes require extensive digging or direct contact to uncover.</p>
                    <p>These unknowns in networking make the process of determining if and how someone should connect with another the challenge that it is, especially when it leads to rejection or ghosting. Therefore, a possible solution to the issue of approachability in networking could be in providing upfront visibility to this vital information. Modern iterations of the networking formula take cues from the online dating scene which allow users to view details on the person they might want to connect with first, to determine if they should reach out.</p>
                    <p>The most notable of these products are Bumble Bizz and Shapr, so I looked to them for inspiration for how they attempt to make networking approachable. The value of these product experiences are their emphasis on prompts, for how to initiate conversations, and suggestions, in the case of how they would like to meet, to help both parties towards their goal of connecting.</p>
                    <>Promos</>
                </Section>
                <Section 
                    name={links[5]}
                    className='project__section'>
                    <h2>Barriers to Connecting</h2>
                    <p>While the current solutions outlined above are great for the discovery of people that fit the criteria of who networkers want to connect with, they have their limitations.</p>
                    <p>Bumble Bizz and Shapr are closed ecosystems which are limited to connecting with people who have already downloaded the app and have no way of sharing your profile details with people through chance encounters. Even LinkedIn, which has the benefit of being web based, forces the viewer to have an account to even look at the account of the person they want to connect with.</p>
                    <p>It’s because of this closed ecosystem that business cards have continued to see use as a form of sharing vital networking details, with the very act of handing someone your card serving as an open invite which says, “let’s continue this relationship”.</p>
                    <p>Unfortunately, this medium has limitations in how much information can be fit on a card, if the details are up-to-date, and whether a contact remembers to follow up which is all dependent on if the user had one on them to share in the first place. Despite these drawbacks, we continue to use business cards as there is value in how little barriers there are between information being shared while also serving as a tangible reminder that an initial connection occurred.</p>
                    <>Card Promo</>
                </Section>
                <Section 
                    name={links[6]}
                    className='project__section'>
                    <h2>Connect First, Share Later</h2>
                    <p>Based on this, there appeared to be a gap in the market for a solution that allows for the open shareability of business cards, with the approachability of content found in networking/dating app hybrids.</p>
                    <p>To tackle this issue I did some additional research on technology that could enable this product to effectively have an open ecosystem with few if any hurdles to go through in sharing one’s personal details. What I landed on was App Clips which would allow for temporary access to the app experience without a user first needing to download it:</p>
                    <>App Clips Video</>
                    <p>The focus was therefore on having a genuine chat with someone in the moment, and then allowing the TouchBase experience to communicate what their “call to action” is, without them having to say it on the spot. In that way, TouchBase carries the heavy lifting of the “ask” which can serve as the basis for further communication once that initial connection has been established.</p>
                    <>Promos</>
                </Section>
                <Section 
                    name={links[7]}
                    className='project__section'>
                    <h2>Making it Habitual</h2>
                    <p>While I am still in the process of building out the user flow of an MVP experience, my north star for the design of this product was ensuring each aspect of the experience felt approachable and like an open-invite for connection.</p>
                    <p>As I build out the rest of the product experience, I will be aligning it to the trusty Hook Model framework to tackle the issue of people struggling to keep networking a habitual activity they engage in regardless of where they are at in their career. While this doesn’t go into the exact form these aspects will take, it will hopefully provide some insight on the type of engagement loop I am seeking to emulate as this project progresses.</p>
                    <>Hook Model</>
                </Section>
            </div>
            <Redirect 
                title="Shop"
                className='project__redirect'
            />
        </Page>
    );
};

export default TouchBase;