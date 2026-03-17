import * as React from 'react';

export interface IWorkerBadgeProps {
    name: string;
    status: number;
}

export const WorkerBadgeComponent: React.FC<IWorkerBadgeProps> = (props) => {
    const { name, status } = props;

    // 1: Active, 2: Onboarding, 3: Offboarding
    const statusConfig = {
        1: { label: "Active", color: "bg-green-500" },
        2: { label: "Onboarding", color: "bg-yellow-500" },
        3: { label: "Offboarding", color: "bg-red-500" }
    }[status] ?? { label: "Unknown", color: "bg-slate-400" };

    return (
        <div className="flex items-center p-3 bg-white rounded-xl border border-slate-200 shadow-sm w-fit min-w-[240px]">
            <div className="relative">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-lg border border-slate-200 uppercase">
                    {name ? name.charAt(0) : "?"}
                </div>
                <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${statusConfig.color}`} />
            </div>
            <div className="ml-4 flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-tight">{name ?? "Worker"}</span>
                <span className="text-xs font-medium text-slate-500 mt-0.5">{statusConfig.label}</span>
            </div>
        </div>
    );
};