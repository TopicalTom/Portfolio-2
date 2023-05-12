import { FC, useEffect } from 'react';
import { assetsSelector } from '../../store/reducers';
import { useActions } from '../../hooks';
import { useSelector } from 'react-redux';

// Styles
import "./Project.scss";

// Components
import Page from '../../components/Page';
import Section from '../../components/Section';
import SideNav from '../../components/SideNav';
import Card from '../../components/Card';
import Redirect from '../../components/Redirect';
import Preview from '../../components/AppPreview';
import Tags from '../../components/Tags';
import Framework from '../../components/Framework';
import Video from '../../components/Video';
import Image from '../../components/Image';
import Carousel from '../../components/Carousel';
import Caption from '../../components/Caption';
import Quotes from '../../components/Quotes';
import Metrics from '../../components/Metrics';
import SubSection from '../../components/SubSection';

const TouchBase: FC = () => {
    const { fetchAssets } = useActions();
    const { assets, isLoadingAssets } = useSelector(assetsSelector);

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls TouchBase Assets
        fetchAssets('touchbase');
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

    const metrics = [
        {
            value: "85%",
            caption: "Of positions are filled through networking"
        },
        {
            value: "49%",
            caption: "Don't maintain professional relationships"
        },
        {
            value: "25%",
            caption: "Don't invest any time in networking"
        },
    ];

    const quotes = [
        {
            quote: "Networking is the opportunity to speak to somebody who’s in the industry that you’re trying to join or become acquainted with.",
            takeaway: "Networking Objecitve",
        },
        {
            quote: "I think a lot of people think networking is just about job hunting but I think it’s more about building your personal skill set or your knowledge base in order to enter or proceed through an industry.",
            takeaway: "Varied Objectives",
        },
        {
            quote: "I’ve met most of my connections through my educational experiences...but then also you start to slowly expand that group as you meet people through people so it becomes sort of an exponential process.",
            takeaway: "Building a Base",
        },
        {
            quote: "One of the keys to networking would be making sure that you don’t just use and burn some connections…it’s important to actually keep these people in a constant cycle of communication.",
            takeaway: "Constant Reminders",
        },
        {
            quote: "One of the keys to networking would be making sure that you don’t just use and burn some connections…it’s important to actually keep these people in a constant cycle of communication.",
            takeaway: "Constant Reminders",
        },
        {
            quote: "It’s about understanding that if you add value to your connection with these people, then they’re much more likely to be receptive to you asking for a favor or asking to sort of support you.",
            takeaway: "Adding Value",
        },
        {
            quote: "I think it’s really rewarding to be able to help people. If you have a friend who works for a company, you can connect them to make their path to their goals a little easier.",
            takeaway: "Helping Others",
        },
        {
            quote: "I think it all comes down to real communication with a person to understand what their actual goals are. The only person who really knows what they want to achieve is the person themself.",
            takeaway: "Communicating Goals",
        },
        {
            quote: "Endeavoring to also create connections that are outside of just what you work on personally will make you more grounded but also broaden your perspective and open up other opportunities later on.",
            takeaway: "Broaden Network",
        },
        {
            quote: "I think it’s important to bear in mind that these people (prospective networking) are being asked by hundreds of people to share their experience. So if you go into it with the understanding that there’s a good chance this person isn’t going to check in with you, so it is about setting expectations.",
            takeaway: "Managing Expectations",
        },
        {
            quote: "It takes a lot of effort in order to do real authentic networking, because you aren’t just going to get the director, senior vice president or precedent to sit down and have coffee with you...it’s going to take a few touch points.",
            takeaway: "Persistence",
        },
        {
            quote: "Demonstrating you’ve spent some time thinking about what it is that they do and working on understanding their career trajectory will show that you’re actually interested in that person and the information they can pass on.",
            takeaway: "Genuine Interest",
        },
        {
            quote: "The first time you network with somebody it is actually quite easy as you sit down and talk about a job...after that you can’t just ask them for another coffee and ask the same questions over again, because you are wasting their time.",
            takeaway: "Maintaining Interest",
        },
        {
            quote: "If you are properly networking, it shouldn’t really matter if you’re employed or looking for work as you should be continuing to talk and expand your network.",
            takeaway: "Value for Everyone",
        },
        {
            quote: "Progress to me, especially for younger people early on in our careers is about finding the next steps towards a more fulfilling job. Once you are at that point, it’s then about looking back and asking yourself how can I help somebody else get where they need to go?",
            takeaway: "Goal Shift",
        },
        {
            quote: "If your personal brand is one that helps other people, you essentially become a connector in your community, and you become someone who people go to. You become a leader in your industry.",
            takeaway: "Becoming a Leader",
        },
        {
            quote: "A lot of professional networking is done by word of mouth or reputation.",
            takeaway: "WOM",
        },
        {
            quote: "If you are asking big questions, and the people are giving you good responses that are adding value and you are learning, then that’s indicative of a solid connection that you’d like to continue with.",
            takeaway: "Valuable Connections",
        },
        {
            quote: "I feel like sometimes when I’m in a networking situation, it can be a really anxious sort of place because you are talking to strangers and you’re trying to learn more about them.",
            takeaway: "Networking Anxiety",
        },
        {
            quote: "The people I connect with are based on personality, like when I’m talking to someone and I feel like our energy lines up and I don’t feel anxious talking to them. The best connections are when they have a personality that matches mine.",
            takeaway: "Personality Connection",
        },
        {
            quote: "If I know I’m going to a networking event I always try to read a little bit about people ahead of time. I think it makes it easier in networking situations if I am able to bring stuff up but also for them that I’m showing interest in what they do.",
            takeaway: "Conducting Research",
        },
        {
            quote: "Reaching out to people makes me nervous because we are very new and there is a fear of not wanting to look too eager or that I’m trying to suck up to them but I think that’s something that’s in our own heads.",
            takeaway: "Projecting Feelings",
        },
        {
            quote: "I want them to like me for my qualifications, my personality, and I don’t want them to think that if I messaged them that I’m trying to get a step up from other people.",
            takeaway: "Shaping Perceptions",
        },
        {
            quote: "When I think of networking events as they are, they are really awkward and they are kind of a scary thought to have...but once I just go in and start talking to someone and build my own confidence it definitely is a little bit easier.",
            takeaway: "Building Confidence",
        },
        {
            quote: "(On talking to people)One thing about networking events is trying to think of questions that they haven’t heard like 100 times already.",
            takeaway: "Keep it Fresh",
        },
        {
            quote: "I think it’s hard to (network) because being someone who’s young and getting started in the working world, there’s a bit of anxiety when talking to higher level executives or even just someone that’s got more authority than you that they are somehow looking down on you or that there’s some judgement.",
            takeaway: "Feeling of Judgement",
        },
        {
            quote: "If it’s recruiting season for a specific type of job I would network a lot more but if its off season then I’ll probably be like, whatever happens, happens.",
            takeaway: "No Urgency",
        },
        {
            quote: "When initiating conversations, I try to make open ended questions that are targeted towards everyone.",
            takeaway: "Approachable Initiators",
        },
        {
            quote: "I think the best way is to just directly ask and if there is anything I can do at the moment. It’s a very mutual thing. If there is anything that they hint at that might link to something that you’ve done or if you’re interested in doing, that’s an open door.",
            takeaway: "Finding an Opening",
        },
        {
            quote: "(On why they don’t just share numbers) I find that a bit more intrusive, I think, and some people may value those boundaries so I think (using business cards) is a very non intrusive way to be like here’s my information, you can kind of make a judgement call whether or not you connect.",
            takeaway: "No Committment",
        },
        {
            quote: "If the meeting you have or connection you make in the moment has to get somewhere...it’s a lot easier to be like here’s my card if you want to connect and talk further. It’s almost like an open invitation so that they’re not required or obligated to follow up.",
            takeaway: "Open Invite",
        }
    ]

    return (
        <Page className='project'>
            <aside className='project__sidenav'>
                <SideNav links={links} />
            </aside>
            <div className='project__content'>
                <Section 
                    initial
                    name={links[0]}
                    color='rgb(77, 127, 255)'>
                    <h1>TouchBase</h1>
                    <Tags 
                        color='rgb(77, 127, 255)'
                        type='App'
                        role='Independent'
                        duration='Ongoing'
                    />
                    <p>TouchBase is a Swift app that allows for approachable networking through objective based conversation initiators and meetup scheduling within one's personal resume.</p>
                    <p>TouchBase builds on this core experience by leveraging the newly introduced App Clips infrastructure of iOS 14 to enable spontaneous interactions through shareability of networking details with people outside of the app ecosystem.</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                </Section>
                <Section 
                    name={links[1]}
                    color='rgb(77, 127, 255)'>
                    <h2>Transitioning to Networking</h2>
                    <p>As someone who is in the midst of pivoting away from their university degree into a brand new field, the transition can, at times, be daunting.</p>
                    <p>While there are plenty of networking opportunities during an undergraduate degree, I always found myself on the side of the networking facilitators for events and less on the side of the networker. Due to this, the shift to communicating my value and story is a new experience that I was woefully unprepared for and was well outside my comfort zone.</p>
                </Section>
                <Card 
                    title="Observation"
                    color='rgb(77, 127, 255)'
                    caption="Networking is a time-intensive activity which can be draining for people that have very little previous exposure to it."
                />
                <Section 
                    name={links[2]}
                    color='rgb(77, 127, 255)'>
                    <h2>Value of Networking</h2>
                    <p>If networking is so draining to engage in, it’s fair to ask why someone would even bother engaging in it?</p>
                    <p>According to TopResume, “when you invest in your relationships - professional and personal - it can help you develop your skill set, stay on top of the latest trends, keep a pulse on the job market and meet prospective people that will foster your career development.” The importance of this is furthered by Review42 with the following statistics:</p>
                    <Metrics 
                        className='project__metrics'
                        data={metrics}
                    />
                    <p>Aside from the interpersonal value of networking, there is real tangible value for people either new to their careers, or are looking to switch things up, but people just aren’t investing as much time as they should be. Taking this into consideration, there is a clear need to encourage continual engagement of networking by making the practice less draining for those involved.</p>
                </Section>
                <Card 
                    title="How Might We"
                    color='rgb(77, 127, 255)'
                    caption="Make networking a more enjoyable and habitual activity for people at different stages of their career journey."
                />
                <Section 
                    name={links[3]}
                    color='rgb(77, 127, 255)'>
                    <h2>Networking Dynamics</h2>
                    <p>In order to understand the dynamics of the networking experience, and the underlying reasons for why it feels draining and hard to maintain, I conducted three online interviews to get the perspective of individuals who were early on in their careers.</p>
                    <SubSection>
                        <h3>Providing Value</h3>
                        <p>After synthesizing the interview data, a very clear theme began to emerge of a struggle to connect because they weren’t sure how to make their interactions valuable to the person they wanted to connect with. This was exacerbated by perceptions of inequality owing to their age, current skill set or experience level which made them feel like they had very little, or new, to offer people that were more seasoned in their careers.</p>
                        <p>Looking to overcome this barrier, interview participants would conduct preliminary research on the people they wanted to interact with, or had interacted previously with, which unfortunately resulted in networking essentially becoming a research assignment rather than an actual human connection.</p>
                        <Quotes 
                            className='project__carousel'
                            content={quotes}
                        />
                    </SubSection>
                    <SubSection>
                        <h3>Frame of Reference</h3>
                        <p>Using these quotes from above I was able to construct two personas that embody the people I interviewed, and an additional third that was inferred based on online articles and who the people I interviewed were hoping to interact with.</p>
                        <Carousel 
                            className="project__carousel" 
                            type='image' 
                            content={[ assets[1], assets[2], assets[3] ]}
                        />
                        <p>Despite all being at different stages in their career, networking provides an avenue for each of them to progress their lifelong goals. The disconnect for each of these personas comes from the uncertainty of knowing how to communicate and facilitate the “quid pro quo” of networking in a way that feels shared and is sustainable over an extended period of time.</p>
                        <p>While each persona has their own issues with the networking experience, I focused primarily on the perspective of Paulina (prospective persona) as they arguably have the most barriers to overcome due to being new to a field and networking in general.</p>
                    </SubSection>
                </Section>
                <Card 
                    title="Key Takeaway"
                    color='rgb(77, 127, 255)'
                    caption="Networking feels dirty, selfish and forced due to the directness of asking for favours from someone with whom they have little to no prior connection. The hidden nature of one’s aspirations and needs leads to it feeling like a one-sided transaction which is exacerbated by the perceived inequality between people at different stages of their careers."
                />
                <Section 
                    name={links[4]}
                    color='rgb(77, 127, 255)'>
                    <h2>Unhiding Information</h2>
                    <p>Information like one’s background or current roles are readily available on platforms like LinkedIn, but details on what a person is interested in talking about, if they have the time to help, and if they are even willing or capable of doing so sometimes require extensive digging or direct contact to uncover.</p>
                    <p>These unknowns in networking make the process of determining if and how someone should connect with another the challenge that it is, especially when it leads to rejection or ghosting. Therefore, a possible solution to the issue of approachability in networking could be in providing upfront visibility to this vital information.</p>
                    <SubSection>
                        <h3>Modern Solutions</h3>
                        <p>Modern iterations of the networking formula take cues from the online dating scene which allow users to view details on the person they might want to connect with first, to determine if they should reach out.</p>
                        <p>The most notable of these products are Bumble Bizz and Shapr, so I looked to them for inspiration for how they attempt to make networking approachable. The value of these product experiences are their emphasis on prompts, for how to initiate conversations, and suggestions, in the case of how they would like to meet, to help both parties towards their goal of connecting.</p>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[4]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Sharing Details:'
                                caption='Bumble uses their dating platform to allow users to share their professional details and swipe for new connections.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[5]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Profile Prompts:'
                                caption='Bumble utilizes profile prompts to help users quickly transition into a conversation that will be interesting for the recipient.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[6]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Focused Search:'
                                caption='Shapr allows users to filter who they connect with by job titles, goals and interests so that their limited matches are worthwhile.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[7]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Meet Preferences:'
                                caption='Shapr lets users indicate what they would like to be doing when they meet for their in-person networking session.'
                            />
                        </div>
                    </SubSection>
                </Section>
                <Section 
                    name={links[5]}
                    color='rgb(77, 127, 255)'>
                    <h2>Barriers to Connecting</h2>
                    <p>While the current solutions outlined above are great for the discovery of people that fit the criteria of who networkers want to connect with, they have their limitations.</p>
                    <p>Bumble Bizz and Shapr are closed ecosystems which are limited to connecting with people who have already downloaded the app and have no way of sharing your profile details with people through chance encounters. Even LinkedIn, which has the benefit of being web based, forces the viewer to have an account to even look at the account of the person they want to connect with.</p>
                    <SubSection>
                        <h3>Legacy Solution</h3>
                        <p>It’s because of this closed ecosystem that business cards have continued to see use as a form of sharing vital networking details, with the very act of handing someone your card serving as an open invite which says, “let’s continue this relationship”.</p>
                        <p>Unfortunately, this medium has limitations in how much information can be fit on a card, if the details are up-to-date, and whether a contact remembers to follow up which is all dependent on if the user had one on them to share in the first place. Despite these drawbacks, we continue to use business cards as there is value in how little barriers there are between information being shared while also serving as a tangible reminder that an initial connection occurred.</p>
                        <Image
                            className="project__image"
                            content={assets[8]}
                        />
                    </SubSection>
                    <SubSection>
                        <h3>An Open Ecosystem</h3>
                        <p>Based on this, there appeared to be a gap in the market for a solution that allows for the open shareability of business cards, with the approachability of content found in networking/dating app hybrids.</p>
                        <p>To tackle this issue I did some additional research on technology that could enable this product to effectively have an open ecosystem with few if any hurdles to go through in sharing one’s personal details. What I landed on was App Clips which would allow for temporary access to the app experience without a user first needing to download it:</p>
                        <Video 
                            className="project__video"
                            content={assets[9]}
                        />
                    </SubSection>
                </Section>
                <Section 
                    name={links[6]}
                    color='rgb(77, 127, 255)'>
                    <h2>Connect First, Share Later</h2>
                    <p>While I am still in the process of building out the user flow of an MVP experience, my north star for the design of this product was ensuring each aspect of the experience felt approachable and like an open-invite for connection.</p>
                    <p>The focus was therefore on having a genuine chat with someone in the moment, and then allowing the TouchBase experience to communicate what their “call to action” is, without them having to say it on the spot. In that way, TouchBase carries the heavy lifting of the “ask” which can serve as the basis for further communication once that initial connection has been established.</p>
                    <div>
                        <Preview 
                            classname='project__preview'
                            content={assets[0]}
                        />
                        <Caption 
                            className='project__caption'
                            title='Trigger:'
                            caption='TouchBase encourages spontaneous networking by enables profile sharing through an App Clip.'
                        />
                    </div>
                    <div>
                        <Preview 
                            classname='project__preview'
                            content={assets[10]}
                        />
                        <Caption 
                            className='project__caption'
                            title='Action:'
                            caption='TouchBase displays a users call to action cards at the start of their profile to serve as conversation initiators.'
                        />
                    </div>
                    <div>
                        <Preview 
                            classname='project__preview'
                            content={assets[11]}
                        />
                        <Caption 
                            className='project__caption'
                            title='Action:'
                            caption='TouchBase provides a users background for context when deciding to reach out and plan meetups.'
                        />
                    </div>
                    <div>
                        <Preview 
                            classname='project__preview'
                            content={assets[12]}
                        />
                        <Caption 
                            className='project__caption'
                            title='Reward:'
                            caption='TouchBase allows for streamlined meetup planning by suggesting crowdsourced networking spots.'
                        />
                    </div>
                    <div>
                        <Preview 
                            classname='project__preview'
                            content={assets[13]}
                        />
                        <Caption 
                            className='project__caption'
                            title='Investment:'
                            caption='TouchBase showcases a users scheduled meetups front and center to remind users to maintain their connections.'
                        />
                    </div>
                </Section>
                <Section 
                    name={links[7]}
                    color='rgb(77, 127, 255)'>
                    <h2>Making it Habitual</h2>
                    <p>While I am still in the process of building out the user flow of an MVP experience, my north star for the design of this product was ensuring each aspect of the experience felt approachable and like an open-invite for connection.</p>
                    <p>As I build out the rest of the product experience, I will be aligning it to the trusty Hook Model framework to tackle the issue of people struggling to keep networking a habitual activity they engage in regardless of where they are at in their career. While this doesn’t go into the exact form these aspects will take, it will hopefully provide some insight on the type of engagement loop I am seeking to emulate as this project progresses.</p>
                    <Framework 
                        className='project__framework'
                        color='rgb(77, 127, 255)'
                        externalTrigger={[ "Direct Message", "Push Notifications" ]}
                        internalTrigger={[ "Need to Connect", "Vibe Check" ]}
                        action={[ "Opens App", "Shares Details", "Messages Contact" ]}
                        reward={[ "Scheduled Networking Session", "Connects with Contact", "Finds New Opportunity" ]}
                        investment={[ "Establishes Networking Routinue", "Builds Connections", "Network Grows" ]}
                    />
                </Section>
                <Redirect 
                    className='project__redirect'
                    link="/project/shop"
                    name="Shop"
                />
            </div>
        </Page>
    );
};

export default TouchBase;