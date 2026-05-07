import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className={`flex flex-col ${center ? 'items-center text-center' : 'sm:flex-row sm:justify-between sm:items-end'} mb-4 md:mb-5 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-red-800 font-['Google_Sans'] uppercase tracking-normal mb-1 sm:mb-0 leading-tight">
        {title}
      </h2>
      {actionText && (
        <Link
          to={actionLink}
          className="group text-red-700 font-bold hover:text-red-900 flex items-center text-base transition-colors mt-2 sm:mt-0"
        >
          {actionText} <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;