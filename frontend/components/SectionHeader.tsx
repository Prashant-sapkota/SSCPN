import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  actionText?: string;
  actionLink?: string;
  className?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  actionText, 
  actionLink = "#", 
  className = "",
  center = false 
}) => {
  return (
    <div className={`flex flex-col ${center ? 'items-center text-center' : 'sm:flex-row sm:justify-between sm:items-end'} mb-7 md:mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-red-800 font-serif uppercase tracking-normal mb-2 sm:mb-0 leading-tight">
        {title}
      </h2>
      {actionText && (
        <a 
          href={actionLink} 
          className="group text-red-700 font-bold hover:text-red-900 flex items-center text-base transition-colors mt-2 sm:mt-0"
        >
          {actionText} <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
};

export default SectionHeader;