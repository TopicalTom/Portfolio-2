import { FC } from 'react';

// Styles
import './Palette.scss';

interface Color {
    name?: string;
    light: string;
    dark: string;
}

interface Palette {
    category: string;
    colors: Color[];
}

// Guard
interface PaletteProps {
    className: string;
    content: Palette[]
};

// Components

const Palette: FC<PaletteProps> = ({ className, content }) => {
    return (
        <div className={`palette ${className}`}>
            {content.map(palette => {
                return (
                    <div className="palette__row">
                        <p 
                            className="palette__category">
                            {palette.category}
                        </p>
                        <div className="palette__colors">
                            {palette.colors.map(color => {
                                return (
                                    <div 
                                        className="palette__color"
                                        style={{background: color.light}}>
                                        <div className='palette__wrapper'>
                                            <h4 
                                                className="palette__label">
                                                {color.light}
                                            </h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Palette;