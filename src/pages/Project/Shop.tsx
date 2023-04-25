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
import Preview from '../../components/Preview';
import Tags from '../../components/Tags';
import Image from '../../components/Image';
import Carousel from '../../components/Carousel';
import Video from '../../components/Video';
import Palette from '../../components/Palette';

const Shop: FC = () => {
    const { fetchAssets } = useActions();
    const { assets, isLoadingAssets } = useSelector(assetsSelector);

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls Shop Assets
        fetchAssets('shop');
    }, []);

    const links = [
        "Overview", 
        "Problem", 
        "Define",
        "Research",
        "Ideation",
        "Constraints",
        "Design",
        "Reflection",
        "Next Steps" 
    ];

    const palette = [
        {
            category: "Primary",
            colors: [
                {
                    light: '#5A31F4',
                    dark: ''
                },
                {
                    light: '#B2A2FA',
                    dark: ''
                },
            ]
        },
        {
            category: "Status",
            colors: [
                {
                    light: '#08CF9D',
                    dark: ''
                },
                {
                    light: '#00966F',
                    dark: ''
                },
                {
                    light: '#EEC200',
                    dark: ''
                },
                {
                    light: '#FCF1CD',
                    dark: ''
                },
                {
                    light: '#BF4E40',
                    dark: ''
                },
                {
                    light: '#FDD1CF',
                    dark: ''
                },
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
                },
            ]
        },
    ];

    return (
        <Page className='project'>
            <aside className='project__sidenav'>
                <SideNav links={links} />
            </aside>
            <div className='project__content'>
                <Section 
                    initial
                    color='rgb(90, 49, 244)'
                    name={links[0]}
                    className='project__section'>
                    <h1>Shop</h1>
                    <Tags 
                        color='rgb(90, 49, 244)'
                        type='App'
                        role='Independent'
                        duration='Ongoing'
                    />
                    <p>For my design submission I took on the return process for online shopping which led me to do a UX improvement for the pre-existing Shop app.</p>
                    <p>At a high-level, I focused on how consumers go about requesting a product return through the Shop app, while reducing the app barrier of entry by leveraging the App Clips infrastructure to allow non-users to access the core features I designed.</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                </Section>
                <Section 
                    name={links[1]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>IRL vs. URL Shopping</h2>
                    <p>Recently I suggested to my sister (a front-line healthcare worker) that she check out Vessi Footwear, a brand I love, as she was in need of shoes that were easy to clean, comfortable and would pair (pun intended) well with her working environment.</p>
                    <p>Unfortunately, when she received her order, the arch support wouldn’t work for her long shifts, and even though she was a fan of the product look she had to return them.</p>
                    <Image 
                        className='project__image'
                        content={assets[1]}
                    />
                    <p>While Vessi is an online-only store, and my sister wouldn’t have had any opportunity to try the product out first anyway, it had me thinking if businesses that were primarily brick-and-mortar have experienced higher returns, among other issues, in their shift to being online.</p>
                    <Card 
                        title="Observation"
                        color='rgb(90, 49, 244)'
                        caption="With a drastic shift to online shopping, it's more difficult to know whether a product is what someone wants as they can't physically test them out."
                    />
                </Section>
                <Section 
                    name={links[2]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>Why we should care</h2>
                    <p>It seems almost counterintuitive to make the process of making a return less obtrusive, as you would be losing a sale, but it is in-fact beneficial for merchants in the long-run.</p>
                    <p>Looking over data collected by HubSpot, Smart Insights and, Global Web Index, return policies and the process itself, are deciding factors for whether a customer makes a purchase in the first place and can even lead to a greater CLTV. Some highlights in this data are the following:</p>
                    <>Metrics</>
                    <p>With an improved return experience clearly having tangible benefits for both customers and merchants, the question I asked myself was:</p>
                    <Card 
                        title="How Might We"
                        color='rgb(90, 49, 244)'
                        caption="Ensure customers that have received a product that isn't up to their standards or expectations maintain a positive experience/impression of a business."
                    />
                </Section>
                <Section 
                    name={links[3]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>D2C Shopping Dynamics</h2>
                    <p>Given current events I decided to focus my research on direct to consumer (D2C) merchants as, unlike established big brands or wholesale merchants, they are likely to have been impacted the most in the shift to online and might not have the infrastructure in place for handling online product returns.</p>
                    <p>My approach for gaining context in this space was to conduct three consumer interviews with people in my network while compiling as much information on the merchant perspective to supplement my lack of direct interviews on that front:</p>
                    <h3>Consumer Lens</h3>
                    <p>The biggest pain points for consumers came from the whole process feeling too involved which was only exacerbated by the qualifiers for return requiring manual guess-and-check work for eligibility.</p>
                    <p>Distilling all of the quotes down, the key words that came to light were accountable, personable, convenience and clarity for what consumers sought in an ideal online shopping return experience. Some of the quotes that led to these insights are provided below:</p>
                    <>Consumer Quotes</>
                    <h3>Merchant Lens</h3>
                    <p>As for the merchant experience, I ventured into the Community Forum and looked into posts about Exchanges / Returns and found the following quotes to fill in my gaps in knowledge that would have been covered through interviews:</p>
                    <>Merchant Quotes</>
                    <p>I was surprised to learn that while returns and refunds were largely easy to accomplish within the Shopify ecosystem, the exchange process had some friction with merchants having to find workarounds (like using a Shopify POS system to handle online exchanges) or pay extra for third-party apps in order to provide an ideal exchange experience for their customers.</p>
                    <p>Using the quotes I collected, I constructed two personas for use in ensuring the needs, frustrations and constraints of both parties were considered during my ideation and designing phases of this challenge. The two personas can be differentiated based on their role in the return process:</p>
                    <Carousel 
                        className="project__carousel" 
                        type='image' 
                        data={[ assets[2], assets[3] ]}
                    />
                    <p>From there, I mapped out the full return process from the perspective of both personas to understand how both parties interact in order to visualize problem areas and begin to outline areas of opportunity in addressing this problem:</p>
                    <Card 
                        title="Key Insight"
                        color='rgb(90, 49, 244)'
                        caption="Both consumers and merchants have to engage with multiple touchpoints and inputs in order to complete an online product return which makes the process feel like an inconvenience. This problem is exacerbated by a lack of direction and clarity on how to proceed on the consumer-end, and a lack of in-service features for merchants to use."
                    />
                </Section>
                <Section 
                    name={links[4]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>Less Hurdles, More Helping</h2>
                    <p>Email functions as a great touchpoint for consumers and merchants to facilitate a product return due to its low-barrier of entry, but it is still limiting as there is no structure to facilitate the interaction.</p>
                    <p>In approaching how to improve this experience, I looked to how merchants currently get around these shortcomings in order to provide their customers with a great return experience, for inspiration and guidance.</p>
                    <h3>Current Solutions</h3>
                    <p>While looking into the consumer-facing return experience I stumbled across some Shopify stores using the app integration Loop. Essentially, Loop (below) provides a more user-friendly approach to making a return, with additional return / exchange automation that fits into a merchants’ workflow.</p>
                    <p>Diving deeper into the Shopify App ecosystem I also found the apps AfterShip (below), Exchange It, Returnly and even some users citing the Shopify POS app as a workaround to handle their online exchanges.</p>
                    <Carousel 
                        className="project__carousel" 
                        type='video' 
                        data={[ assets[4], assets[5] ]}
                    />
                    <h3>Shop App</h3>
                    <p>The great thing about the solutions explicitly shown above is that they both have a consumer-facing touchpoint that allows merchants to collect the data they need to effectively complete a refund or exchange. However, in both cases users need to first look up the order they want to return before they can begin the process.</p>
                    <p>This had me thinking of the app Shop (below), as a potential place to facilitate a return request, since the arrival of a package often acts as the triggering event for a consumer to consider making a return:</p>
                    <Video 
                        className='project__video'
                        content={assets[6]}
                    />
                    <p>Shop is also uniquely positioned as a consumer-facing touchpoint within the Shopify ecosystem that already handles a user's orders and could enable users to skip that initial step of searching for an order email required in other current solutions.</p>
                    <p>Furthermore, Shop doesn’t currently facilitate the return process any more effectively than someone who doesn't have the app. It just provides the return policy and an email address to contact, so there is clear room for improvement:</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <h3>Leveraging Tech</h3>
                    <p>There is a clear opportunity to improve this process, however, improving the Shop app would only help current Shop users. To make this worthwhile, there had to be a way to provide the same level of assistance to people outside the app.</p>
                    <p>Luckily, with iOS 14 Apple is introducing a new feature known as App Clips which would allow some non-Shop users to access key features of the Shop experience and potentially become users themselves:</p>
                    <Video 
                        className="project__video"
                        content={assets[2]}
                    />
                    <Card 
                        title="Feature Positioning"
                        color='rgb(90, 49, 244)'
                        caption="Shop can deliver on effortless in-app returns by providing explicit item eligibility and two-way accountability so consumers can feel confident making online purchases without the usual unknowns of the return process."
                    />
                </Section>
                <Section 
                    name={links[5]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>Building on Foundations</h2>
                    <p>Since my focus was improving the UX of a pre-existing app, it was important to ensure my additions honored the “look” and “values” of the Shop brand.</p>
                    <p>This was important as it would allow me to prevent the transition from current to new additions from feeling jarring and would enable me to tap into the mental model of current users of the Shop app.</p>
                    <h3>Brand Look</h3>
                    <p>Before starting my designs, I took stock of any unique fonts (GT Walsheim Pro), colors (below), interaction states, etc. the app uses. In the cases where there wasn’t an example of what I needed in the current Shop app, I referred to Shopify’s design system Polaris to infer design decisions that would feel right within a Shopify product:</p>
                    <Palette 
                        className='project__palette'
                        content={palette}
                    />
                    <h3>Ensuring Privacy</h3>
                    <p>The Shop app emphasizes its commitment to user privacy so opening up the order details to anyone who might happen to scan a QR code on the package, seems like a major oversight.</p>
                    <p>To tackle this, I looked into the capabilities of App Clips and there is a Location Verification API that would allow the app to check to make sure the package is at the users location to enable access. This would need to be utilized in addition to oAuth services to check the users email as a two-factor approach to ensuring the order details are secured.</p>
                    <Card 
                        title="Design Goal"
                        color='rgb(90, 49, 244)'
                        caption="Lessen the support ticket workload for D2C merchants by leveraging the Shop app to improve the return experience for current and potential Shop users."
                    />
                </Section>
                <Section 
                    name={links[6]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>One-Stop Shop</h2>
                    <p>Taking all of this information into consideration, what would an improved product return process look like within the Shop app?</p>
                    <p>Thanks for asking, because I have animated the rough task flow that both users and guests go through on their journey to return a product they were less than satisfied with below:</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <p>Some key differences for the guest flow can be found below:</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                </Section>
                <Section 
                    name={links[7]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>Constraints & Communication</h2>
                    <p>This project was a great testament to working remotely, in the cases of conducting remote interviews and usability tests, as well as applyling an unfamiliar design system to my own work to ensure a seamless UX experience.</p>
                    <p>WIth that being said, there were some pitfalls such as my limited internet access making my work a slog at times, and being an indpendent designer for this project came with some design questions on how to create an interation that adheres to a pre-existing product. Despite the difficulties, it was a great learning experience and truly tested my design and product knowledge.</p>
                </Section>
                <Section 
                    name={links[8]}
                    color='rgb(90, 49, 244)'
                    className='project__section'>
                    <h2>End-to-End Excellence</h2>
                    <p>While I have made great progress in integrating a return/exchange process within the Shop app, there is still more work that needs to be done. Aside from conducting usability tests and determining what the merchant-facing side of things would look like, my next focus would be on in-app selection and return labels.</p>
                    <h3>In-App Selection</h3>
                    <p>The Shop App is currently able to pull different product listings from a Shopify store (shown below) so it might also be possible to pull data of a specific product listing to enable users to make changes for a same-item in-app exchange.</p>
                    <p>While this type of feature seems feasible based on what is currently in the app, I didn’t focus on it for my initial designs as I have lingering questions on app file size since App Clips should not exceed 10MB in size. Therefore, in order to keep the return/exchange experience open to more people, adding this type of feature needs to be weighed over more conventional form fields if it results in a smaller file size.</p>
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <Preview 
                        classname='project__preview'
                        content={assets[0]}
                    />
                    <h3>Return Labels</h3>
                    <p>For users that don’t usually make online returns, having to print out a new return label can be a significant barrier should they not have a printer at their disposal. To overcome this some merchants provide pre-printed return labels within the original package and other services, such as Happy Returns (below), go a step further by providing in-person kiosks that handles the workload of a return themselves, rather than a user.</p>
                    <Video 
                        className="project__video"
                        content={assets[2]}
                    />
                    <p>However, I believe there are limitations to the solutions currently available and therefore opportunity in this space for potential multi-use shipping labels through peel-away and/or write-to QR functionality to update shipment details dynamically when scanned. This falls outside of the current scope of what I've worked on but would go a long way in making the return/exchange process as hassle free as possible.</p>
                </Section>
                <Redirect />
            </div>
        </Page>
    );
};

export default Shop;