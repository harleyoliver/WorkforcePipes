import * as React from 'react';

export interface IWorkerBadgeProps {
    avatarUrl?: string;
    logoUrl?: string;
    name: string;
    status: number;
    jobTitle?: string;
    department?: string;
    onSelect: () => void;
    isSelected: boolean;
}

const departmentThemes: Record<string, string> = {
    "Engineering": "border-sky-500 bg-sky-50 text-sky-700",
    "Sales": "border-emerald-500 bg-emerald-50 text-emerald-700",
    "Marketing": "border-rose-500 bg-rose-50 text-rose-700",
    "Executive": "border-violet-600 bg-violet-50 text-violet-800",
    "Operations": "border-amber-500 bg-amber-50 text-amber-700",
    "Default": "border-slate-200 bg-white text-slate-600"
};

export const WorkerBadgeComponent: React.FC<IWorkerBadgeProps> = (props) => {
    const { avatarUrl, name, status, jobTitle, department } = props;

    // 1: Active, 2: Onboarding, 3: Offboarding
    const statusConfig = {
        1: { label: "Active", color: "bg-green-500" },
        2: { label: "Onboarding", color: "bg-yellow-500" },
        3: { label: "Offboarding", color: "bg-red-500" }
    }[status] ?? { label: "Unknown", color: "bg-slate-400" };

    const currentTheme = departmentThemes[department ?? ""] || departmentThemes.Default;

    return (
        <div
            onClick={props.onSelect}
            className={`
                flex items-center p-3 rounded-xl shadow-sm border-2 
                transition-all duration-300 cursor-pointer
                hover:shadow-md hover:scale-[1.02] active:scale-[0.98]
                ${currentTheme} max-w-sm relative overflow-hidden
                ${props.isSelected ? 'ring-4 ring-indigo-500 shadow-xl' : 'ring-0'}
            `}>
            {props.isSelected && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white p-1 rounded-bl-lg">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )}
            {/* Avatar Section */}
            <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                    {props.avatarUrl ? (
                        <img 
                            src={props.avatarUrl} 
                            className="w-full h-full object-cover" 
                            alt={props.name} 
                        />
                    ) : (
                        <img 
                            src={props.logoUrl}
                            className="w-12 h-12 opacity-60" 
                            alt="WorkforcePipes Logo" 
                        />
                    )}
                </div>
                
                {/* Status Dot */}
                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${statusConfig.color}`} />
            </div>

            {/* Text Content Column */}
            <div className="ml-4 flex flex-col overflow-hidden text-left">
                <h3 className="text-sm font-bold text-slate-900 truncate">
                    {name || "Unknown Worker"}
                </h3>
                <p className="text-xs font-medium text-indigo-600 truncate uppercase tracking-tight">
                    {jobTitle ?? "Position Not Set"}
                </p>
                <div className="flex items-center mt-1">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                        {department ?? "General"}
                    </span>
                    <span className="mx-1 text-slate-300">•</span>
                    <span className="text-[10px] font-medium text-slate-500">
                        {statusConfig.label}
                    </span>
                </div>
            </div>
        </div>
    );
};