import { FC } from 'react';

// Style
import './Frame.scss';

interface FrameProps {
    children: any;
    name: string;
}

const Frame: FC<FrameProps> = ({ children, name}) => {
    return (
        <div className='frame'>
            <div className='frame__header'>
                <svg className='frame__icon' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.13586 6.84315L0.479004 12.5L6.13586 18.1569L11.7927 12.5L6.13586 6.84315ZM12.4998 0.479185L6.84296 6.13604L12.4998 11.7929L18.1567 6.13604L12.4998 0.479185ZM13.2069 12.5L18.8638 6.84315L24.5206 12.5L18.8638 18.1569L13.2069 12.5ZM12.4998 13.2071L6.84296 18.864L12.4998 24.5208L18.1567 18.864L12.4998 13.2071Z" fill="#CBABF9"/>
                </svg>
                <span className='frame__name'>{name}</span>
            </div>
            {children}
        </div>
    );
};

export default Frame;