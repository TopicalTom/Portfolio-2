import { FC } from 'react';

// Style
import './FlowChart.scss';

const FlowChart: FC = () => {
    return (
        <div className='flowchart'>
            <div 
                className='flowchart__card flowchart__card--tokens'>
                <span>Tokens</span>
            </div>
            <div 
                className='flowchart__card flowchart__card--themes'>
                <span>Themes</span>
            </div>
            <div 
                className='flowchart__card flowchart__card--components'>
                <span>Components</span>
            </div>
            <div 
                className='flowchart__card flowchart__card--patterns'>
                <span>Patterns</span>
            </div>
            <div 
                className='flowchart__card flowchart__card--screens'>
                <span>Screens</span>
            </div>
            <div 
                className='flowchart__card flowchart__card--flows'>
                <span>Flows</span>
            </div>
        </div>
    );
};

export default FlowChart;