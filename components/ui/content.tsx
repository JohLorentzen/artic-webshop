import React from 'react';
import ContentImage from './contentImage';
import { cn } from '@/lib/utils';

interface ContentProps {
  className?: string;
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 bg-customDarkBlue',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Content;
