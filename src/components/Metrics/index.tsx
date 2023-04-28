import { FC } from 'react';

// Style
import './Metrics.scss';

// Guards
interface Metric {
    value: string;
    caption: string;
    source?: string;
}

interface MetricsProps {
    className: string;
    data: Metric[]
};

const Metrics: FC<MetricsProps> = ({ className, data }) => {
    return (
        <div className={`metrics ${className}`}>
            {data.map(metric => {
                return (
                    <div className='metrics__card'>
                        <h3>{metric.value}</h3>
                        <span>{metric.caption}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default Metrics;