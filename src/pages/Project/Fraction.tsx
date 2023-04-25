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
import Redirect from '../../components/Redirect';
import Preview from '../../components/Preview';
import Tags from '../../components/Tags';
import Video from '../../components/Video';
import Image from '../../components/Image';
import Carousel from '../../components/Carousel';
import Frame from '../../components/Frame';
import Flow from '../../components/Flow';
import FlowChart from '../../components/FlowChart';

const TouchBase: FC = () => {
    const { fetchAssets } = useActions();
    const { assets, isLoadingAssets } = useSelector(assetsSelector);

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls TouchBase Assets
        fetchAssets('fraction');
    }, []);

    const links = [
        "Overview", 
        "Background",
        "Focus",
        "Challenges",
        "Approach",
        "Implementation",
        "Reflection",
        "Next Steps"
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
                    color='#82C882'
                    className='project__section'>
                    <h1>Fraction</h1>
                    <Tags 
                        color='#82C882'
                        type='Full-Time'
                        role='Product Designer'
                        duration='Nov 2021 - Jan 2023'
                    />
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell or make monthly payments.</p>
                    <p>Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <ul>
                        <li>Increase their monthly income</li>
                        <li>Diversify their wealth</li>
                        <li>Pay for large or unexpected expenses</li>
                    </ul>
                    <Image 
                        className='project__image'
                        content={assets[0]}
                    />
                </Section>
                <Section
                    name={links[1]}
                    color='#82C882'
                    className='project__section'>
                    <h2>My Specific Role</h2>
                    <p>I was hired as the second product designer on the “product” team where I balanced work on many projects and wore many hats, namely:</p>
                    <ul>
                        <li>Designing screens for our website and external/internal dashboards</li>
                        <li>Building out component library, style guide and general design system</li>
                        <li>Making updates to our live website on Webflow</li>
                        <li>Preparing onboarding packages for new employees</li>
                        <li>Conducting exploratory interviews to learn about product needs / constraints</li>
                        <li>Leading design feedback sessions to ensure current product iterations aligned with stakeholder goals</li>
                    </ul>
                </Section>
                <Section
                    name={links[2]}
                    color='#82C882'
                    className='project__section'>
                    <h2>The Fraction Ecosystem</h2>
                    <p>The big focus for my time at Fraction, outside of the Design System (we'll get to that), was helping the team build out the end-to-end Fraction Platform. This was a massive undertaking as our platform involved multiple touchpoints for users to complete a variety of actions.</p>
                    <p>The main flow</p>
                    <Image 
                        className='project__image'
                        content={assets[1]}
                    />
                    <Flow 
                        location='Website'
                        action='Starts Application'
                    />
                    <Image 
                        className='project__image'
                        content={assets[2]}
                    />
                    <Flow 
                        location='Website'
                        action='Submits Application'
                    />
                    <Image 
                        className='project__image'
                        content={assets[3]}
                    />
                    <Flow 
                        location='Website'
                        action='Completes Funding Tasks'
                    /> 
                    <Image 
                        className='project__image'
                        content={assets[4]}
                    />
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Image 
                        className='project__image'
                        content={assets[5]}
                    />
                </Section>
                <Section
                    name={links[3]}
                    color='#82C882'
                    className='project__section'>
                    <h2>Underlying Problem Areas</h2>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <h3>1. Nested Instances</h3>
                    <p>While users, namely borrowers, have their own dashboards to complete tasks that relate to funding.</p>
                    <Image 
                        className='project__image'
                        content={assets[6]}
                    />
                    <h3>2. Location Differences</h3>
                    <p>Another challenge that came with its own host of issues relating to legal and compliance was our product was available for both an American and Canadian userbase.</p>
                    <Image 
                        className='project__image'
                        content={assets[7]}
                    />
                    <h3>3. Varying Complexity</h3>
                    <p>Another issue that I had to tackle was handling how aspects of our Platform would scale</p>
                    <Image 
                        className='project__image'
                        content={assets[8]}
                    />
                    <h3>4. Subject to Change</h3>
                    <p>In addition to all of above, there wa</p>
                    <Image 
                        className='project__image'
                        content={assets[9]}
                    />
                </Section>
                <Section
                    name={links[4]}
                    color='#82C882'
                    className='project__section'>
                    <h2>Ensuring Scalability</h2>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Video 
                        className='project__video'
                        content={assets[10]}
                    />
                </Section>
                <Section
                    name={links[5]}
                    color='#82C882'
                    className='project__section'>
                    <h2>Modular Design System</h2>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <h3>Tokens</h3>
                    <p>The foundation of our Design System was built upon tokens </p>
                    <Image 
                        className='project__image'
                        content={assets[11]}
                    />
                    <h3>Themes</h3>
                    <p>These tokens were then used to create "Themes" as a part of our "Design System" style guide to describe difference usages. Usage of these "Themes" could range from simply describing a background or text color, but the combination of multiple "Themes" could be used to describe a "Themed" component.</p>
                    <p>Essentially, our buttons possess "Themes" for different elements such as "Text", "Icon" and "Surface" that allow us to create a Fraction-branded button. See for yourself:</p>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '1rem'}}>
                        <Frame name="Button (Base)">
                            <Image 
                                className='project__asset'
                                content={assets[12]}
                            />
                        </Frame>
                        <Frame name="Button">
                            <Image 
                                className='project__asset'
                                content={assets[13]}
                            />
                        </Frame>
                    </div>
                    <h3>Components</h3>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Frame name="Input (Text)">
                        <Image 
                            className='project__asset'
                            content={assets[14]}
                        />
                        <Image 
                            className='project__asset'
                            content={assets[15]}
                        />
                    </Frame>
                    <Image 
                        className='project__image'
                        content={assets[16]}
                    />
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Frame name="Input (Phone)">
                        <Image 
                            className='project__asset'
                            content={assets[17]}
                        />
                        <Image 
                            className='project__asset'
                            content={assets[18]}
                        />
                    </Frame>
                    <Image 
                        className='project__image'
                        content={assets[19]}
                    />
                    <p>Being able to toggle different values and instances of component variants is great, however, this can become cumbersome if these edited variants we use are used repeatidly and elsewhere in our platform.</p>
                    <ul>
                        <li>Generic</li>
                        <li>Template</li>
                    </ul>
                    <p>So using the Phone Input Component above, we could create a "Template" variant that uses both a phone number input and an associated premade disclaimer banner that satisfies legal and compliance for US-based applications without having to remake this structure every time.</p>
                    <Frame name="Phone Input (USA)">
                        <Image 
                            className='project__asset'
                            content={assets[20]}
                        />
                    </Frame>
                    <h3>Patterns</h3>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Frame name="Table Row (Active Deal)">
                        <Image 
                            className='project__asset'
                            content={assets[21]}
                        />
                    </Frame>
                    <Image 
                        className='project__image'
                        content={assets[22]}
                    />
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Frame name="Table Row (Deals)">
                        <Image 
                            className='project__asset'
                            content={assets[21]}
                        />
                        <Image 
                            className='project__asset'
                            content={assets[23]}
                        />
                        <Image 
                            className='project__asset'
                            content={assets[24]}
                        />
                    </Frame>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Frame name="Table Row (Placeholder)">
                        <Image 
                            className='project__asset'
                            content={assets[25]}
                        />
                    </Frame>
                    <p>Fraction was a Canadian-based financial startup that provided a new solution for homeowners looking to access their home’s equity without needing to sell. Fraction stood out from the traditional Reverse Mortgage and HELOC approaches and gave financial flexibility to those who wanted to:</p>
                    <Frame name="Table">
                        <Image 
                            className='project__asset'
                            content={assets[26]}
                        />
                    </Frame>
                    <h3>Screens</h3>
                    <p>Bringing this all together, we have screens which takes everything above and allows us to make a fairly modular UI that is consistent across our full-platform, regardless of who is designing it.</p>
                    <Frame name="Broker Dashboard (Your Deals)">
                        <Image 
                            className='project__asset'
                            content={assets[27]}
                        />
                    </Frame>
                    <h3>Flows</h3>
                    <p>Bringing this all together, we have screens which takes everything above and allows us to make a fairly modular UI that is consistent across our full-platform, regardless of who is designing it.</p>
                    <Video 
                        className='project__video'
                        content={assets[28]}
                    />
                </Section>
                <Section
                    name={links[6]}
                    color='#82C882'
                    className='project__section'>
                    <h2>My Experience</h2>
                    <p>Suffice to say, this was a big project to take on for my first full-time position at a company in a design role.</p>
                </Section>
                <Section
                    name={links[7]}
                    color='#82C882'
                    className='project__section'>
                    <h2>Our Future Plans</h2>
                    <p>Unfortunately, my time at Fraction was cut short as our company closed in January of 2023 meaning all of the foundational work we had started wouldn't be completed. That said, we had been working towards Fraction's future since the beginning and had the following planned.</p>
                    <h3>Short-term</h3>
                    <p>When I had begun work on our "Design System" and "Component Library", I had banked on Figma adding the ablity to pass values (props) down to nested (child) components, like in a development setting, as it would allow for greater reusability.</p>
                    <p>Luckily, this gambit would have paid off as Figma recently added the ability to "expose" nested instances of components to allow easy access from a top-level (parent) component. Therefore, my next step would have been updating specific components to leverage this feature:</p>
                    <Video 
                        className='project__video'
                        content={assets[29]}
                    />
                    <h3>Long-term</h3>
                    <p>Looking further, we had plans to improve how our design work impacted and interacted with the company at-large.</p>
                    <ul>
                        <li>Design Wiki</li>
                        <li>Development Handoff</li>
                        <li>A / B Testing</li>
                    </ul>
                    <p>Lorem Ipsum</p>
                    <Image 
                        className='project__image'
                        content={assets[30]}
                    />
                </Section>
                <Redirect />
            </div>
        </Page>
    );
};

export default TouchBase;