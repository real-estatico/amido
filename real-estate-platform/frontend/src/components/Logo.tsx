import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`font-bold text-white tracking-wider ${sizeClasses[size]} ${className}`} style={{ fontFamily: 'Georgia, serif' }}>
      AMIDO <span className="text-red-900">GROUP</span>
    </div>
  );
};

export default Logo;
