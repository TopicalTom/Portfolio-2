import { FC, useState, useEffect } from 'react';

// Style
import './Quotes.scss';

// Components
import Controller from '../Controller';

interface Quote {
    title: string;
    caption: string;
    author?: string;
}

// Guard
interface QuotesProps {
    className: string;
    content: Quote[];
};

const Quotes: FC<QuotesProps> = ({ className, content }) => {
    const [ active, setActive ] = useState(content[0]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const toggleActive = (direction: string) => {
        let newIndex = currentIndex;

        switch (direction) {
            case 'back':
                if (currentIndex > 0) {
                    setActive(content[newIndex--]);
                    setCurrentIndex(newIndex--);
                } else {
                    setActive(content[content.length]);
                    setCurrentIndex(content.length);
                }
                break;
            case 'next':
                if (currentIndex < content.length - 1) {
                    setActive(content[newIndex++]);
                    setCurrentIndex(newIndex++);
                } else {
                    setActive(content[0]);
                    setCurrentIndex(0);
                }
        };
    };

    // Grab assets from Firebase
    useEffect(() => {
        // Pulls Rally Assets
        setActive(content[0]);
    }, [content]);

    return (
        <div className={`quotes ${className}`}>
            <div>

            </div>
            <Controller 
                className='quotes__controller'
                count={content.length}
                currentIndex={currentIndex}
                toggleActive={toggleActive}
            />
        </div>
    );
};

export default Quotes;