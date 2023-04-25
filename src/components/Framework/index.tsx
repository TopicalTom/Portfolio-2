import { FC } from 'react';

// Styles
import './Framework.scss';

// Guard
interface FrameworkProps {
    className: string;
    color?: string;
    externalTrigger?: string[];
    internalTrigger?: string[];
    action?: string[];
    reward?: string[];
    investment?: string[];
};

const Framework: FC<FrameworkProps> = ({ 
    className, 
    color,
    externalTrigger, 
    internalTrigger, 
    action, 
    reward, 
    investment 
}) => {
    return (
        <div className={`framework ${className}`}>
            <div className='framework__section framework__section--trigger'>
                <span 
                    className='framework__label'
                    style={{ 'color': color }}>
                    Trigger
                </span>
                <div className='framework__subsection'>
                    <h5 
                        className='framework__sublabel'>
                        External
                    </h5>
                    <ul className='framework__items'>
                        {externalTrigger?.map(item => {
                            return (
                                <li 
                                    className='framework__item'>
                                    {item}
                                </li>
                        )})}
                    </ul>
                </div>
                <div className='framework__subsection'>
                    <h5 
                        className='framework__sublabel'>
                        Internal
                    </h5>
                    <ul className='framework__items'>
                        {internalTrigger?.map(item => {
                            return (
                                <li 
                                    className='framework__item'>
                                    {item}
                                </li>
                        )})}
                    </ul>
                </div>
            </div>
            <div className='framework__section framework__section--action'>
                <span 
                    className='framework__label'
                    style={{ 'color': color }}>
                    Action
                </span>
                <ul className='framework__items'>
                    {action?.map(item => {
                        return (
                            <li 
                                className='framework__item'>
                                {item}
                            </li>
                    )})}
                </ul>
            </div>
            <div className='framework__section framework__section--reward'>
                <span 
                    className='framework__label'
                    style={{ 'color': color }}>
                    Reward
                </span>
                <ul className='framework__items'>
                    {reward?.map(item => {
                        return (
                            <li 
                                className='framework__item'>
                                {item}
                            </li>
                    )})}
                </ul>
            </div>
            <div className='framework__section framework__section--investment'>
                <span 
                    className='framework__label'
                    style={{ 'color': color }}>
                    Investment
                </span>
                <ul className='framework__items'>
                    {investment?.map(item => {
                        return (
                            <li 
                                className='framework__item'>
                                {item}
                            </li>
                    )})}
                </ul>
            </div>
        </div>
    );
};

export default Framework;