import * as React from 'react';

export interface IWorkerBadgeProps {
    avatarUrl?: string;
    logoUrl?: string;
    name: string;
    status: number;
    jobTitle?: string;
    department?: string;
}

export const WorkerBadgeComponent: React.FC<IWorkerBadgeProps> = (props) => {
    const { avatarUrl, name, status, jobTitle, department } = props;

    // 1: Active, 2: Onboarding, 3: Offboarding
    const statusConfig = {
        1: { label: "Active", color: "bg-green-500" },
        2: { label: "Onboarding", color: "bg-yellow-500" },
        3: { label: "Offboarding", color: "bg-red-500" }
    }[status] ?? { label: "Unknown", color: "bg-slate-400" };

    return (
        <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-slate-200 max-w-sm">
            {/* Status Avatar Column */}
            {/* Avatar Section */}
            <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                    {props.avatarUrl ? (
                        /* Show the User's Dataverse Photo */
                        <img 
                            src={props.avatarUrl} 
                            className="w-full h-full object-cover" 
                            alt={props.name} 
                        />
                    ) : (
                        /* FALLBACK: Show the WorkforcePipes Logo icon */
                        <img 
                            src={props.logoUrl}
                            className="w-12 h-12 opacity-60" 
                            alt="WorkforcePipes Logo" 
                        />
                    )
                    }
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

            {/* Company Logo */}
            <div className="absolute top-2 right-2 w-6 h-auto opacity-30">
                <img 
                    src="assets/logo-icon.svg" 
                    alt="WorkforcePipes Brand" 
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};