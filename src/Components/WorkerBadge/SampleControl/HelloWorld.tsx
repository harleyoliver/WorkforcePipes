import * as React from 'react';
import '../SampleControl/generated/style.css';

export interface IHelloWorldProps {
  name?: string;
}

export const HelloWorld: React.FC<IHelloWorldProps> = ({ name }) => {
  const displayName = name ?? "New Worker";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex items-center p-4 bg-white border-l-4 border-blue-600 shadow-md rounded-r-lg max-w-sm font-sans">
      {/* Avatar Circle */}
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl border border-blue-200">
        {initial}
      </div>
      
      {/* Worker Info */}
      <div className="ml-4 flex-grow">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
          Identity Verified
        </h3>
        <p className="text-lg font-bold text-gray-800 leading-tight">
          {displayName}
        </p>
        
        {/* Status Indicator */}
        <div className="mt-2 flex items-center">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="ml-2 text-[11px] text-gray-500 font-medium uppercase">
            Onboarding Active
          </span>
        </div>
      </div>
    </div>
  );
}