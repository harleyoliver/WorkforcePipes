import * as React from 'react';
import '../SampleControl/generated/style.css';

export interface IHelloWorldProps {
  name?: string;
  status?: number; 
  statusLabel?: string;
}

export const HelloWorld: React.FC<IHelloWorldProps> = ({ name, status, statusLabel }) => {
  const displayName = name ?? "New Worker";

  const getStatusConfig = (val: number | undefined) => {
    switch(val) {
      case 1: return { color: 'bg-green-500', ping: 'bg-green-400', animate: true };
      case 2: return { color: 'bg-blue-500', ping: 'bg-blue-400', animate: true };
      case 3: return { color: 'bg-amber-500', ping: '', animate: false };
      default: return { color: 'bg-slate-300', ping: '', animate: false };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className="flex items-center p-4 bg-white border-l-4 border-blue-600 shadow-md rounded-r-lg max-w-sm font-sans">
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xl border border-slate-200">
        {displayName.charAt(0).toUpperCase()}
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
          Identity Verified
        </h3>
        <p className="text-lg font-bold text-gray-800 leading-tight">
          {displayName}
        </p>
        
        <div className="mt-2 flex items-center">
          <span className="relative flex h-2 w-2">
            {config.animate && (
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.ping} opacity-75`}></span>
            )}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${config.color}`}></span>
          </span>
          <span className="ml-2 text-[11px] text-gray-500 font-medium uppercase tracking-wider">
            {statusLabel || "Unknown Status"}
          </span>
        </div>
      </div>
    </div>
  );
}