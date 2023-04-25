import { FC, useEffect } from 'react';
import { assetsSelector } from '../../store/reducers';
import { useActions, useAsset } from '../../hooks';
import { useSelector } from 'react-redux';

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
import Image from '../../components/Image';
import Framework from '../../components/Framework';
import Carousel from '../../components/Carousel';
import Video from '../../components/Video';
import Palette from '../../components/Palette';
import Quotes from '../../components/Quotes';
import Metrics from '../../components/Metrics';

const Rally: FC = () => {
    const { fetchAssets } = useActions();
    const { assets } = useSelector(assetsSelector);

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls Rally Assets
        fetchAssets('rally');
    }, []);

    const links = [
        'Overview',
        'Problem',
        'Define',
        'Research',
        'Concept',
        'Inspiration',
        'Constraints',
        'Pivots',
        'Design',
        'Next Steps'
    ];

    const metrics = [
        {
            value: "80%",
            caption: "Reported significant depressive symptoms"
        },
        {
            value: "65%",
            caption: "Reported increased feelings of loneliness"
        },
        {
            value: "58%",
            caption: "Reported feeling a loss of connectedness"
        },
    ]

    const palette = [
        {
            category: "Accents",
            colors: [
                {
                    name: 'hangout',
                    light: '#FD2D55',
                    dark: ''
                },
                {
                    name: 'grab drinks',
                    light: '#F58F47',
                    dark: ''
                },
                {
                    name: 'get food',
                    light: '#F6C232',
                    dark: ''
                },
                {
                    name: 'be active',
                    light: '#31C488',
                    dark: ''
                },
                {
                    name: 'explore',
                    light: '#4D7FFF',
                    dark: ''
                },
                {
                    name: 'go out',
                    light: '#8637A6',
                    dark: ''
                },
                {
                    name: 'be productive',
                    light: '#F26A9A',
                    dark: ''
                }
            ]
        },
        {
            category: "Shades",
            colors: [
                {
                    light: '#FFFFFF',
                    dark: ''
                },
                {
                    light: '#F1F2F3',
                    dark: ''
                },
                {
                    light: '#EFF3F4',
                    dark: ''
                },
                {
                    light: '#D7D8D9',
                    dark: ''
                },
                {
                    light: '#565859',
                    dark: ''
                },
                {
                    light: '#4C4D4E',
                    dark: ''
                },
                {
                    light: '#000000',
                    dark: ''
                }
            ]
        }
    ];

    return (
        <Page className='project'>
            <aside className='project__sidenav'>
                <SideNav links={links} />
            </aside>
            <div className='project__content'>
                <Section 
                    initial
                    name={links[0]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h1>Rally</h1>
                    <Tags 
                        color='rgb(253, 45, 85)'
                        type='App'
                        role='Independent'
                        duration='Ongoing'
                    />
                    <p>Rally is a React Native app that facilitates the process of organizing in-person hangouts by connecting friends that share social moods.</p>
                    <p>Once connected, users are able to support one-another in organizing hangouts while Rally assists with ideation, by suggesting local places to go, and with logistics, by providing peer-to-peer location sharing.</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                </Section>
                <Section 
                    name={links[1]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>The Impact of Social Distancing</h2>
                    <p>Amid a global pandemic, life has almost come to a standstill with people around the world "coming-together" through "separation" to ensure our healthcare systems stay within their operational capacities. In doing so, the usual bustling spots for social engagements have been hit hard and have had to adapt to stay alive.</p>
                    <p>While there won’t be an issue with people wanting to hangout in-person once restrictions are lifted, reconnecting with old friends could prove challenging for some after a long period of separation. Furthermore, their usual social spots might not have survived and even so, there is a need to branch out to support other social businesses in the road to recovery.</p>
                    <Card 
                        title="Observation"
                        caption="There is a need to reacquaint people to their old social ways when the time comes in order to help friend groups and local social businesses recover."
                        color='rgb(253, 45, 85)'
                    />
                </Section>
                <Section 
                    name={links[2]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>A Problem Worth Solving</h2>
                    <p>While some friend groups have adapted to the times by finding ways to stay remotely connected through online games, zoom-sessions or a variety of other products, others have struggled. One study on the psychological effects of the coronavirus pandemic on young adults (18 - 35) found the following results.</p>
                    <Metrics 
                        className='project__metrics'
                        data={metrics}
                    />
                    <p>Even with the rates of vaccinations increasing across the world and the prospect of being social again being on the horizon, some people might struggle to overcome these feelings of disconnect, and in some cases, physical displacement. Based on this, there appears to be a real need to reacclimate young adults back into their social circles, and mindset, before our local social businesses can truly recover.</p>
                    <Card 
                        title="How Might We"
                        caption="Assist young adults in becoming reacquantited with friends once social restrictions have lifted."
                        color='rgb(253, 45, 85)'
                    />
                </Section>
                <Section 
                    name={links[3]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>The Planning Process</h2>
                    <p>Looking further, I conducted 6 exploratory interview with young adults between the ages of 23 - 25 in order to understand how they go about connecting with friends and making plans. Some of the noteworthy remarks from those interviews are as follows:</p>
                    <Quotes 
                        className='project__carousel'
                        content={[]}
                    />
                    <p>A common frustration people had was with friends not following through with the plans they organized. This was largely due to moods changing and people dropping out between the time a plan was suggested, and when it was going to occur, since coordinating general availability and interest for a particular plan took too long.</p>
                    <p>To overcome this, people would ask specific friends that are known to be more spontaneous, have a proven track record for being down for a specific type of activity, or share their current interest, to build a strong foundation of an idea before bringing it to a larger group. It also became apparent that people take on different roles when making plans which I have narrowed down to three types which are:</p>
                    <Carousel 
                        className="project__carousel" 
                        type='image' 
                        data={[ assets[1], assets[2], assets[3] ]}
                    />
                    <p>For this particular problem I focused on the Social Architect as the primary (target) user as they are the one that ensures a plan comes to fruition and is the one that would feel the most dissuaded when a plan falls apart as they have the highest level of engagement and are the ones tackling roadblocks.</p>
                    <p>The process of organizing plans for Social Architect can be simplified as occurring in three stages which are: determining interest, group coordination, and plan execution with the main dip in experience occurring during that middle phase. Based on interview insights, issues arise in this phase when people don’t solidify a concrete plan earlier on and attempt to accommodate too many people at once leading to plans falling through.</p>
                    <Image 
                        className='project__image'
                        content={assets[4]}
                    />
                    <Card 
                        title="Key Takeaway"
                        caption="Making plans with friends is analogous to playing Go-Fish where the “cards” are one’s current interests or availability and the “game” is the process of finding common ground. The inherent challenge of Go-Fish is that we cannot see the cards of the other player and the only way to determine what they have is to explicitly ask which is the limiting factor."
                        color='rgb(253, 45, 85)'
                    />
                </Section>
                <Section 
                    name={links[4]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>Focusing Intent</h2>
                    <p>A solution to this problem would be in removing the direct transaction of withheld information (i.e. interests and current availability) between friends. In removing this barrier, people could more effectively coordinate around their friends as they would be more informed on what their friends are thinking in the moment.</p>
                    <p>This can be likened to how a prism refracts light as a user would come to our product (prism) with the raw intent to make plans with friends and our product would take that raw intent and focus it into specific moods or interests (spectrum of light) that they could then connect over as depicted below:</p>
                    <Image 
                        className='project__image'
                        content={assets[5]}
                    />
                    <p>Since letting friends know what you are interested in is a core part of the app, making sure the action was clearly communicated and stood out is imperative. Building on the interest spectrum illustrated above, color could be used in a similar manner as “mood rings” that dynamically change to align with whatever “social mood” the user selects.</p>
                    <p>Aside from being useful for communicating system status (usability heuristic), the color could be used as a visual filter associated with content or people most relevant to the user’s current needs throughout the app.</p>
                    <Palette 
                        className='project__palette'
                        content={palette}
                    />
                </Section>
                <Section 
                    name={links[5]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>A Sense of Familiarity</h2>
                    <p>With the value the app is trying to provide determined, I started looking into the core experience loop. Taking the learnings from my interviews and constructed experience map, I aligned the different steps to the Hook Model.</p>
                    <p>This was done as the experience relies on people getting into the habit of posting their current “social mood” whenever it occurs and should encourage a feedback loop by users and aid in a success metric of engagement.</p>
                    <Framework 
                        className='project__framework'
                        color='rgb(253, 45, 85)'
                        externalTrigger={[ "Direct Message", "Push Notifications" ]}
                        internalTrigger={[ "FOMO", "Boredom" ]}
                        action={[ "Create Account", "Starts Rallying", "Messages Friend(s)" ]}
                        reward={[ "Boredom Gone", "Connects with Friends" ]}
                        investment={[ "Social Circle Grows" ]}
                    />
                    <p>Based on the refined loop above, it was clear that the potential experience resembled that of dating apps such as Tinder, Hinge, and Bumble. Looking to avoid navigation issues that impacted my earlier iterations (see pivots section), I looked to these experiences for inspiration. Doing so would enable me to leverage pre-existing mental models from other apps and create a more usable experience for users from the start.</p>
                    <p>The exact screens I looked at and sought to replicate for each section of the core experience loop are as follows:</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[6]}
                    />
                    <h4 className='project__subtext'>Bumble promotes streamlined account creation through a mobile number or quick authentication methods.</h4>
                    <Preview 
                        classname='project__preview'
                        content={assets[7]}
                    />
                    <h4 className='project__subtext'>Bumble uses selectable modes to enable users to focus in on how they want to connect with others.</h4>
                    <Preview 
                        classname='project__preview'
                        content={assets[8]}
                    />
                    <h4 className='project__subtext'>Bumble lets users select tags and input text prompts to further refine how they want to connect.</h4>
                    <Preview 
                        classname='project__preview'
                        content={assets[9]}
                    />
                    <h4 className='project__subtext'>Bumble lets users limit who they want to connect with based on a variety of constraints.</h4>
                    <Preview 
                        classname='project__preview'
                        content={assets[10]}
                    />
                    <h4 className='project__subtext'>Bumble uses push notifications to bring current users back into the app in anticipation of getting matches (FOMO)</h4>
                </Section>
                <Section 
                    name={links[6]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>Low Barrier of Entry</h2>
                    <p>Social messaging apps such as Messenger are successful in part to their low-barrier entry to ensure friend groups are not left fragmented based on cost or mobile device they own. Having the experience be limited to users of one phone type would be counter to that goal of overcoming feelings of disconnect from one-another and would lead to a walled-garden experience.</p>
                    <p>To alleviate these concerns, I did some additional research on the development-side of what would be needed to create a feasible solution. To overcome the barrier-to-entry issue, the app could be developed in React Native, rather than pure native solutions, as it would allow for simultaneous iOS and Android Development and even allow for a web platform to be made for a potential business facing component.</p>
                    <Video 
                        className='project__video'
                        content={assets[11]}
                    />
                    <p>There is also the question of how to validate that this product is actually helping people make plans and in turn help local businesses acquire a new audience. One solution could be through implementing the Pilgrim SDK from FourSquare as it would utilize their “venue check-in” functionality to gain data on if users end up following through with the location-specific plans they suggest. Additionally, the SDK also has the capability of determining when a user is home which could then be cross-referenced for non-venue based hangouts.</p>
                    <Carousel 
                        className="project__carousel" 
                        type='video' 
                        data={[ assets[12], assets[13] ]}
                    />
                </Section>
                <Section 
                    name={links[7]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>Ensuring Clear Flow</h2>
                    <p>Before getting to the current design iteration, I want to illustrate some missteps I made in trying to build out this experience. Due to this being my first big design project I naively got stuck on the idea of building out the product as an iMessage app as I latched onto some interviewees not wanting to get a new app.</p>
                    <p>While this idea had the potential to build upon an ecosystem where people already have friends, after 10 usability tests it became clear that iMessage App Trays are limited both in functionality and familiarity which led to it being confusing to navigate. However, since the core concept was still strong, I decided to take my learnings and pivot towards a full app experience as shown in iteration 3:</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[14]}
                    />
                    <h4 className='project__subtext'><strong>Iteration 1:</strong> Overall flow was confusing, too many clicks to get to the core experience and unclear how UI connected back to messages.</h4>
                    <Preview 
                        classname='project__preview'
                        content={assets[15]}
                    />
                    <h4 className='project__subtext'><strong>Iteration 2:</strong> Flow still confusing, unclear what rally symbols implied with regards to status and how it linked back to messages.</h4>
                    <Preview 
                        classname='project__preview'
                        content={assets[16]}
                    />
                    <h4 className='project__subtext'><strong>Iteration 3:</strong> Streamlined flow but inefficient UI for quickly informing users of their current interest, prompt and discoverability settings.</h4>
                </Section>
                <Section 
                    name={links[8]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>A Focused Experience</h2>
                    <p>In designing the MVP experience, I tried to strike a balance with this initial flow when users set their rally so the experience feels “Focused” rather than “Forced”. What this means is when a user selects the rally, “Go Out” they are still able to connect and see friends that don’t share their rally as well as being able to view other places that are outside their current social mood.</p>
                    <p>This aims to emulate the ebb and flow of plans and how people are able to change their mind and pivot to other plans if that is where there is a greater interest within their social circle. I also adapted iteration 3 of the project based on my new understanding of development constraints and cut down on the overly heavy animation I had used previously to make it something I could feasibly deliver:</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[17]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[18]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[19]}
                    />
                </Section>
                <Section 
                    name={links[9]}
                    color='rgb(253, 45, 85)'
                    className='project__section'>
                    <h2>Expanding the Experience</h2>
                    <p>As it stands, the MVP experience only covers how users can connect over shared "moods," but not where they can go that fits their current "social needs." While enabling users to find places to go is essential for the overall flow of the app, I felt it was important to nail down the infrastructure of making an account, selecting a rally, and creating chats before branching out.</p>
                    <p>I am actively developing these features and plan to beta test before I continue expanding to the next phase of the project, which covers the parts in brackets below:</p>
                    <Framework 
                        className='project__framework'
                        color='rgb(253, 45, 85)'
                        externalTrigger={[ "Direct Message", "Push Notifications" ]}
                        internalTrigger={[ "FOMO", "Boredom" ]}
                        action={[ "Create Account", "Starts Rallying", "Messages Friend(s)" ]}
                        reward={[ "Boredom Gone", "Connects with Friends" ]}
                        investment={[ "Social Circle Grows" ]}
                    />
                </Section>
                <Redirect />
            </div>
        </Page>
    );
};

export default Rally;