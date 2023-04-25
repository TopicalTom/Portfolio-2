import { FC, useEffect } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";

// Styles
import "./Project.scss";

// Components
import Page from '../../components/Page';

const Spacestagram: FC = () => {

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls initial Project Previews
    }, []);

    return (
        <Page className='project'>
            <aside className='project__sidenav'>

            </aside>
            <div className='project__content'>
            <CodeBlock 
                text='import { CodeBlock, dracula } from "react-code-blocks";
                
                function MyCoolCodeBlock({ code, language, showLineNumbers }) {
                  return (
                    <CodeBlock
                      text={code}
                      language={language}
                      showLineNumbers={showLineNumbers}
                      theme={dracula}
                    />
                  );
                }'
                language='typescript'
                showLineNumbers={true}
                wrapLines
                theme={dracula}
            />
            </div>
        </Page>
    );
};

export default Spacestagram;