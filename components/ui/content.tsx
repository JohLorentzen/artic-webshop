import React from 'react';
import ContentImage from './contentImage';

interface ContentProps {
    title: string;
    text: string;
    src: string;
    alt: string; 
}

const Content: React.FC<ContentProps> = ({ title, text, src, alt }) => {
    return (
        <div className="flex h-screen bg-customBlueDark bg-[url('/icons/peaks.svg')] bg-cover bg-center p-6">
            <div className="flex-1 flex items-center justify-center">
                <div className="glassmorphism p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-customOrange text-4xl font-bold mb-4">{title}</h2>
                    <p className="border-customGrey p-4 text-customWhite text-xl font-bold">
                        {text}
                    </p>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="transform rotate-3 transition-transform duration-500 hover:rotate-0 rounded-lg shadow-lg">
                    <ContentImage src={src} alt={alt} />
                </div>
            </div>
        </div>
    );
};

export default Content;
