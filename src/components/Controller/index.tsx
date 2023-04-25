import { FC, useState, useEffect } from 'react';

// Styles
import './Controller.scss';

// Guard
interface ControllerProps {
    className: string;
    toggleActive: (direction: string) => void;
    currentIndex: number;
    count: number;
};

const Controller: FC<ControllerProps> = ({ className, toggleActive, currentIndex, count }) => {

    return (
        <div className={`controller ${className}`}>
            <div 
                className='controller__back'
                onClick={() => toggleActive('back')}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    className="controller__chevron">
                    <g>
                        <rect width="24" height="24" opacity="0" transform="rotate(90 12 12)" />
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </g>
                </svg>
            </div>
            <div 
                className='controller__context'>
                <span>{currentIndex} of {count}</span>
            </div>
            <div 
                className='controller__next'
                onClick={() => toggleActive('next')}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    className="controller__chevron">
                    <g>
                        <rect width="24" height="24" opacity="0" transform="rotate(90 12 12)" />
                        <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Controller;