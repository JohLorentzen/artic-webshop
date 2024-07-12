import React from 'react';

import { cn } from '@/lib/utils';

interface ContentProps {
  className?: string;
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'bg-color-customDarkBlue h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Content;
