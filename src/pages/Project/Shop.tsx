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
import Image from '../../components/Image';
import Carousel from '../../components/Carousel';
import Video from '../../components/Video';
import Palette from '../../components/Palette';
import Quotes from '../../components/Quotes';
import Caption from '../../components/Caption';
import Metrics from '../../components/Metrics';
import SubSection from '../../components/SubSection';

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

    const metrics = [
        {
            value: "3x",
            caption: "The likelhood of returns for online retailers",
            source: "https://www.nchannel.com/blog/ecommerce-online-return-policy/#more-15366:~:text=According%20to%20the%20NRF%2C%20returns%20are%20three%20times%20more%20prevalent%20for%20online%20retailers."
        },
        {
            value: "17%",
            caption: "Tend to impulse buy knowing they’ll likely return the product",
            source: "https://blog.globalwebindex.com/chart-of-the-week/online-shopping-returns/#top:~:text=17%25%20of%20people%20buy%20different%20colors,knowing%20they%E2%80%99ll%20likely%20return%20the%20product."
        },
        {
            value: "80%",
            caption: "Are deterred by an inconvenient returns policy",
            source: "https://www.nchannel.com/blog/ecommerce-online-return-policy/#more-15366:~:text=An%20inconvenient%20returns%20policy%20deters%2080%25%20of%20shoppers."
        },
        {
            value: "67%",
            caption: "Increase their spending as a repeat customer",
            source: "https://blog.hubspot.com/service/importance-customer-service#cta_button_53_6ecb5be3-74f7-49a2-b845-c947ee4d5804:~:text=This%20is%20because%20repeat%20customers%20are,to%20spend%20less%20on%20operating%20costs."
        },
        {
            value: "46%",
            caption: "Make repeat purchases based on an easy returns policy",
            source: "https://blog.globalwebindex.com/chart-of-the-week/online-shopping-returns/#top:~:text=A%20quick%20and%20easy%20returns%20policy,are%20also%20key%20repeat%20purchase%20drivers."
        },
        {
            value: "50%",
            caption: "Will make repeat purchases due to good customer service",
            source: "https://blog.globalwebindex.com/chart-of-the-week/online-shopping-returns/#top:~:text=A%20quick%20and%20easy%20returns%20policy,are%20also%20key%20repeat%20purchase%20drivers."
        }
    ];

    const quotes = {
            consumers: [
                {
                    quote: "I typically purchase items online if I know my size, I bought the product before or if it was something that I couldn’t purchase locally (as their in-person location closed), otherwise I prefer to go to the mall.",
                    takeaway: "Case-based Online Shopping",
                },
                {
                    quote: "For a new product I was thinking about getting, I browsed the website a couple times over the span of a week deciding on what size, type and color I wanted and then purchased them.",
                    takeaway: "Taking The Time",
                },
                {
                    quote: "(On purchasing from a new place) I didn’t do it the first time as I wanted to think about it. I saw if there’s anything in person I wanted first that I could buy but I decided to try those.",
                    takeaway: "Online Purchases Secondary",
                },
                {
                    quote: "I thought that if I’m going to return these then maybe I’ll try a different color as well because I wasn’t sure if I’d like the color that I actually got. It made me think that maybe next time I’d order two products and then ship one back.",
                    takeaway: "Sampling Products",
                },
                {
                    quote: "(On not ordering two to try) I thought I would be happy with the pair I got as I’ve never ordered shoes online and didn’t feel like spending money on two shoes knowing I would have to return one.",
                    takeaway: "Second Guessing",
                },
                {
                    quote: "I did look up the return policy for this new product as it’s really personalized and if it was an item I’d purchased before I’m probably less likely to return so I wouldn’t look it up.",
                    takeaway: "Return Policy Use",
                },
                {
                    quote: "Reviews are valuable to me because I am able to gauge the true pros and cons associated with the product because even though I can see an image of it, there’s typically no description in terms of what the material will feel like and people are the ones who typically comment on these things.",
                    takeaway: "Looking for Validation",
                },
                {
                    quote: "(On determining whether to get a refund) I didn’t know if I could return it, but I would rather just take a small loss rather than have to go through the hassle of calling them (support) and trying to get a clear answer on whether I could return it. Whereas the other alternative is taking a $10 loss and then selling it on Facebook.",
                    takeaway: "Take a Loss",
                },
                {
                    quote: "I like returning stuff in person a lot more than online as I can just go and say here’s the receipt and item and then they just return it for me on the spot. It puts the onus on me and guarantees an outcome.",
                    takeaway: "In-person Guarantee",
                },
                {
                    quote: "There’s a lot of unknowns in the way things can fall through the cracks when going through the process to make an online return. Like the package can get lost or someone might now have written the information down correctly and there are cases when the item couldn’t even be refunded in the first place.",
                    takeaway: "Return Unknowns",
                },
                {
                    quote: "I like to get a verbal confirmation and some sort of paper trail for my own sake when making a return as it comes back to accountability. With online returns there’s almost a lack of accountability in terms of a delivery, whereas with in-person returns the accountability is on me and I can advocate for myself.",
                    takeaway: "Return Accountability",
                },
                {
                    quote: "I like how some stores have online shopping assistants or chatbots as they are great for asking questions about colors or when something will come back in stock. I value having someone or something readily available to answer questions or clarify things which comes back to the whole personable experience.",
                    takeaway: "Online Help",
                },
            ],
            merchants: [
                {
                    quote: "Refunds are pretty straightforward through Shopify, but exchanges seem more difficult. Any advice for how to handle exchanges?",
                    takeaway: "Exchange Issues",
                },
                {
                    quote: "How can I exchange an item for another size with an online order? Or what about exchanging for a different item? There is no way within Shopify to do this... A very basic function that every retailer does on a regular basis. Please provide a solution!",
                    takeaway: "Online Order Exchanges",
                },
                {
                    quote: "Is it still true that Shopify is unable to handle on online exchange? This seems like an obvious need for an online shopping cart. Please update me if there is a fix, so I don't have to create yet another workaround or purchase another app to fulfill a role that one would think would be inherent in a shopping cart software.",
                    takeaway: "In-Service Solution",
                },
                {
                    quote: "This seems like such a (yet another) obvious thing that should be included in a store setup by default. Why it is included in the POS app, and not the online store is beyond me.",
                    takeaway: "Feature Availability",
                },
                {
                    quote: "We've resolved this by downloading the POS app and using the refund / exchange section on there. It'll also let you pick the item (and check the stock) and will issue a bill / refund if there is a difference in price and refunds can be done in the same way.",
                    takeaway: "Feature Workaround",
                },
                {
                    quote: "There are many, including this one. But none are really free. This one is $10/month - in addition to what I'm already paying shopify..",
                    takeaway: "No Free Solutions",
                },
                {
                    quote: "Using the POS app is a great solution (even if you don't have a physical location, this app is free and syncs with your website). Note that from the POS app, website orders do not show up when you scroll through orders. You do have to search for the order by number.",
                    takeaway: "Free Solution",
                },
                {
                    quote: "The exchange works fine in the POS app, except in cases where the online customer wishes to exchange for items at higher value, thus leaving a balance. There is no way to email the invoice for the balance as a payment option- only cash/ credit.",
                    takeaway: "Lacking Functionality",
                },
                {
                    quote: "You have to create an order in Drafts and then under discount enter the amount you are refunding if they owe you money you have to send an invoice if you owe them money you can just credit them. You have to mark as paid to close it off if they owe you money. You also have to go to the original order and restock the item. Its a bit tricky when there are multiple exchanges.",
                    takeaway: "Manual Work",
                },
            ]
    }

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
                    name={links[0]}>
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
                    color='rgb(90, 49, 244)'>
                    <h2>IRL vs. URL Shopping</h2>
                    <p>Recently I suggested to my sister (a front-line healthcare worker) that she check out Vessi Footwear, a brand I love, as she was in need of shoes that were easy to clean, comfortable and would pair (pun intended) well with her working environment.</p>
                    <p>Unfortunately, when she received her order, the arch support wouldn’t work for her long shifts, and even though she was a fan of the product look she had to return them.</p>
                    <Image 
                        className='project__image'
                        content={assets[1]}
                    />
                    <p>While Vessi is an online-only store, and my sister wouldn’t have had any opportunity to try the product out first anyway, it had me thinking if businesses that were primarily brick-and-mortar have experienced higher returns, among other issues, in their shift to being online.</p>
                </Section>
                <Card 
                    title="Observation"
                    color='rgb(90, 49, 244)'
                    caption="With a drastic shift to online shopping, it's more difficult to know whether a product is what someone wants as they can't physically test them out."
                />
                <Section 
                    name={links[2]}
                    color='rgb(90, 49, 244)'>
                    <h2>Why we should care</h2>
                    <p>It seems almost counterintuitive to make the process of making a return less obtrusive, as you would be losing a sale, but it is in-fact beneficial for merchants in the long-run.</p>
                    <p>Looking over data collected by HubSpot, Smart Insights and, Global Web Index, return policies and the process itself, are deciding factors for whether a customer makes a purchase in the first place and can even lead to a greater CLTV. Some highlights in this data are the following:</p>
                    <Metrics 
                        className='project__metrics'
                        data={metrics}
                    />
                    <p>With an improved return experience clearly having tangible benefits for both customers and merchants, the question I asked myself was:</p>
                </Section>
                <Card 
                    title="How Might We"
                    color='rgb(90, 49, 244)'
                    caption="Ensure customers that have received a product that isn't up to their standards or expectations maintain a positive experience/impression of a business."
                />
                <Section 
                    name={links[3]}
                    color='rgb(90, 49, 244)'>
                    <h2>D2C Shopping Dynamics</h2>
                    <p>Given current events I decided to focus my research on direct to consumer (D2C) merchants as, unlike established big brands or wholesale merchants, they are likely to have been impacted the most in the shift to online and might not have the infrastructure in place for handling online product returns.</p>
                    <p>My approach for gaining context in this space was to conduct three consumer interviews with people in my network while compiling as much information on the merchant perspective to supplement my lack of direct interviews on that front:</p>
                    <SubSection>
                        <h3>Consumer Lens</h3>
                        <p>The biggest pain points for consumers came from the whole process feeling too involved which was only exacerbated by the qualifiers for return requiring manual guess-and-check work for eligibility.</p>
                        <p>Distilling all of the quotes down, the key words that came to light were accountable, personable, convenience and clarity for what consumers sought in an ideal online shopping return experience. Some of the quotes that led to these insights are provided below:</p>
                        <Quotes 
                            className='project__carousel'
                            content={quotes.consumers}
                        />
                    </SubSection>
                    <SubSection>
                        <h3>Merchant Lens</h3>
                        <p>As for the merchant experience, I ventured into the Community Forum and looked into posts about Exchanges / Returns and found the following quotes to fill in my gaps in knowledge that would have been covered through interviews:</p>
                        <Quotes 
                            className='project__carousel'
                            content={quotes.merchants}
                        />
                    </SubSection>
                    <SubSection>
                        <h3>Frame of Reference</h3>
                        <p>I was surprised to learn that while returns and refunds were largely easy to accomplish within the Shopify ecosystem, the exchange process had some friction with merchants having to find workarounds (like using a Shopify POS system to handle online exchanges) or pay extra for third-party apps in order to provide an ideal exchange experience for their customers.</p>
                        <p>Using the quotes I collected, I constructed two personas for use in ensuring the needs, frustrations and constraints of both parties were considered during my ideation and designing phases of this challenge. The two personas can be differentiated based on their role in the return process:</p>
                        <Carousel 
                            className="project__carousel" 
                            type='image' 
                            content={[ assets[2], assets[3] ]}
                        />
                    </SubSection>
                </Section>
                <Card 
                    title="Key Insight"
                    color='rgb(90, 49, 244)'
                    caption="Both consumers and merchants have to engage with multiple touchpoints and inputs in order to complete an online product return which makes the process feel like an inconvenience. This problem is exacerbated by a lack of direction and clarity on how to proceed on the consumer-end, and a lack of in-service features for merchants to use."
                />
                <Section 
                    name={links[4]}
                    color='rgb(90, 49, 244)'>
                    <h2>Less Hurdles, More Helping</h2>
                    <p>Email functions as a great touchpoint for consumers and merchants to facilitate a product return due to its low-barrier of entry, but it is still limiting as there is no structure to facilitate the interaction.</p>
                    <p>In approaching how to improve this experience, I looked to how merchants currently get around these shortcomings in order to provide their customers with a great return experience, for inspiration and guidance.</p>
                    <SubSection>
                        <h3>Current Solutions</h3>
                        <p>While looking into the consumer-facing return experience I stumbled across some Shopify stores using the app integration Loop. Essentially, Loop (below) provides a more user-friendly approach to making a return, with additional return / exchange automation that fits into a merchants’ workflow.</p>
                        <p>Diving deeper into the Shopify App ecosystem I also found the apps AfterShip (below), Exchange It, Returnly and even some users citing the Shopify POS app as a workaround to handle their online exchanges.</p>
                        <Carousel 
                            className="project__carousel" 
                            type='video' 
                            content={[ assets[4], assets[5] ]}
                        />
                    </SubSection>
                    <SubSection>
                        <h3>Shop App</h3>
                        <p>The great thing about the solutions explicitly shown above is that they both have a consumer-facing touchpoint that allows merchants to collect the data they need to effectively complete a refund or exchange. However, in both cases users need to first look up the order they want to return before they can begin the process.</p>
                        <p>This had me thinking of the app Shop (below), as a potential place to facilitate a return request, since the arrival of a package often acts as the triggering event for a consumer to consider making a return:</p>
                        <Video 
                            className='project__video'
                            content={assets[6]}
                        />
                        <p>Shop is also uniquely positioned as a consumer-facing touchpoint within the Shopify ecosystem that already handles a user's orders and could enable users to skip that initial step of searching for an order email required in other current solutions.</p>
                        <p>Furthermore, Shop doesn’t currently facilitate the return process any more effectively than someone who doesn't have the app. It just provides the return policy and an email address to contact, so there is clear room for improvement:</p>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[7]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Returns & Exchanges:'
                                caption='Shop users must find and decipher the return policy before manually sending an email requesting a return.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[8]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Returns & Exchanges:'
                                caption='Guests of the Shopify ecosystem must find their order details and return form on the company website.'
                            />
                        </div>
                    </SubSection>
                    <SubSection>
                        <h3>Leveraging Tech</h3>
                        <p>There is a clear opportunity to improve this process, however, improving the Shop app would only help current Shop users. To make this worthwhile, there had to be a way to provide the same level of assistance to people outside the app.</p>
                        <p>Luckily, with iOS 14 Apple is introducing a new feature known as App Clips which would allow some non-Shop users to access key features of the Shop experience and potentially become users themselves:</p>
                        <Video 
                            className="project__video"
                            content={assets[9]}
                        />
                    </SubSection>
                </Section>
                <Card 
                    title="Feature Positioning"
                    color='rgb(90, 49, 244)'
                    caption="Shop can deliver on effortless in-app returns by providing explicit item eligibility and two-way accountability so consumers can feel confident making online purchases without the usual unknowns of the return process."
                />
                <Section 
                    name={links[5]}
                    color='rgb(90, 49, 244)'>
                    <h2>Building on Foundations</h2>
                    <p>Since my focus was improving the UX of a pre-existing app, it was important to ensure my additions honored the “look” and “values” of the Shop brand.</p>
                    <p>This was important as it would allow me to prevent the transition from current to new additions from feeling jarring and would enable me to tap into the mental model of current users of the Shop app.</p>
                    <SubSection>
                        <h3>Brand Look</h3>
                        <p>Before starting my designs, I took stock of any unique fonts (GT Walsheim Pro), colors (below), interaction states, etc. the app uses. In the cases where there wasn’t an example of what I needed in the current Shop app, I referred to Shopify’s design system Polaris to infer design decisions that would feel right within a Shopify product:</p>
                        <Palette 
                            className='project__palette'
                            content={palette}
                        />
                    </SubSection>
                    <SubSection>
                        <h3>Ensuring Privacy</h3>
                        <p>The Shop app emphasizes its commitment to user privacy so opening up the order details to anyone who might happen to scan a QR code on the package, seems like a major oversight.</p>
                        <p>To tackle this, I looked into the capabilities of App Clips and there is a Location Verification API that would allow the app to check to make sure the package is at the users location to enable access. This would need to be utilized in addition to oAuth services to check the users email as a two-factor approach to ensuring the order details are secured.</p>
                    </SubSection>
                </Section>
                <Card 
                    title="Design Goal"
                    color='rgb(90, 49, 244)'
                    caption="Lessen the support ticket workload for D2C merchants by leveraging the Shop app to improve the return experience for current and potential Shop users."
                />
                <Section 
                    name={links[6]}
                    color='rgb(90, 49, 244)'>
                    <h2>One-Stop Shop</h2>
                    <p>Taking all of this information into consideration, what would an improved product return process look like within the Shop app?</p>
                    <p>Thanks for asking, because I have animated the rough task flow that both users and guests go through on their journey to return a product they were less than satisfied with below:</p>
                    <SubSection>
                        <h3>User Flow</h3>
                        <p>The following screens showcase the journey for users that have downloaded the "Shop" app:</p>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[10]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Order Access:'
                                caption='Users can visit the Shop app from their mobile phone and select the order they are interested in returning.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[11]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Return Options:'
                                caption='Users are able to view product details or proceed to the return policy screen.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[12]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Item Selection:'
                                caption='Users can select elligble items to return using the return policy breakdowns.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[13]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Return Request:'
                                caption='Users are able to bypass providing some return request info thanks to baked-in details.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[14]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Request Status:'
                                caption='Users are redirected to the Home Screen where they can view their pending return request after submission.'
                            />
                        </div>
                    </SubSection>
                    <SubSection>
                        <h3>Guest Flow</h3>
                        <p>The following screens showcase where the journey for users that haven't downloaded the "Shop" app differ from the main flow:</p>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[15]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Order Access:'
                                caption='Guests are able to scan a App Clips or QR code on the product packaging to access the Shop experience.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[16]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Return Options:'
                                caption='Guests are able to view product details/return options but have a prompt to download the full app.'
                            />
                        </div>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[17]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Request Status:'
                                caption='Guests receive an email notification notifying them that their refund request is pending after submission.'
                            />
                        </div>
                    </SubSection>
                </Section>
                <Section 
                    name={links[7]}
                    color='rgb(90, 49, 244)'>
                    <h2>Constraints & Communication</h2>
                    <p>This project was a great testament to working remotely, in the cases of conducting remote interviews and usability tests, as well as applyling an unfamiliar design system to my own work to ensure a seamless UX experience.</p>
                    <p>WIth that being said, there were some pitfalls such as my limited internet access making my work a slog at times, and being an indpendent designer for this project came with some design questions on how to create an interation that adheres to a pre-existing product. Despite the difficulties, it was a great learning experience and truly tested my design and product knowledge.</p>
                </Section>
                <Section 
                    name={links[8]}
                    color='rgb(90, 49, 244)'>
                    <h2>End-to-End Excellence</h2>
                    <p>While I have made great progress in integrating a return/exchange process within the Shop app, there is still more work that needs to be done. Aside from conducting usability tests and determining what the merchant-facing side of things would look like, my next focus would be on in-app selection and return labels.</p>
                    <SubSection>
                        <h3>In-App Selection</h3>
                        <p>The Shop App is currently able to pull different product listings from a Shopify store (shown below) so it might also be possible to pull data of a specific product listing to enable users to make changes for a same-item in-app exchange.</p>
                        <p>While this type of feature seems feasible based on what is currently in the app, I didn’t focus on it for my initial designs as I have lingering questions on app file size since App Clips should not exceed 10MB in size. Therefore, in order to keep the return/exchange experience open to more people, adding this type of feature needs to be weighed over more conventional form fields if it results in a smaller file size.</p>
                        <div>
                            <Preview 
                                classname='project__preview'
                                content={assets[18]}
                            />
                            <Caption 
                                className='project__caption'
                                title='Item Selection:'
                                caption='Shop users must find and decipher the return policy before manually sending an email requesting a return while guests must find their delivery email or find the company support line.'
                            />
                        </div>
                    </SubSection>
                    <SubSection>
                        <h3>Return Labels</h3>
                        <p>For users that don’t usually make online returns, having to print out a new return label can be a significant barrier should they not have a printer at their disposal. To overcome this some merchants provide pre-printed return labels within the original package and other services, such as Happy Returns (below), go a step further by providing in-person kiosks that handles the workload of a return themselves, rather than a user.</p>
                        <Video 
                            className="project__video"
                            content={assets[19]}
                        />
                        <p>However, I believe there are limitations to the solutions currently available and therefore opportunity in this space for potential multi-use shipping labels through peel-away and/or write-to QR functionality to update shipment details dynamically when scanned. This falls outside of the current scope of what I've worked on but would go a long way in making the return/exchange process as hassle free as possible.</p>
                    </SubSection>
                </Section>
                <Redirect 
                    className='project__redirect'
                    link="/project/fraction"
                    name="Fraction"
                />
            </div>
        </Page>
    );
};

export default Shop;