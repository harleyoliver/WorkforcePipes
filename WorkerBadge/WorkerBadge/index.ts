import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { WorkerBadgeComponent, IWorkerBadgeProps } from "./WorkerBadgeComponent";

export class WorkerBadge implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private _notifyOutputChanged: () => void;
    private _isSelected = false;

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this._notifyOutputChanged = notifyOutputChanged;
        context.mode.trackContainerResize(true);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        
        const props: IWorkerBadgeProps = {
            name: context.parameters.fullName.raw ?? "",
            status: context.parameters.status.raw ?? 0,
            jobTitle: context.parameters.jobTitle.raw ?? "",
            department: context.parameters.department.raw ?? "",
            avatarUrl: context.parameters.avatarImage.raw ?? undefined,
            logoUrl: "assets/logo.svg",
            isSelected: this._isSelected,

            onSelect: () => {
                this._isSelected = !this._isSelected; 
                this._notifyOutputChanged(); 
            }
        };

        return React.createElement(WorkerBadgeComponent, props);
    }

    public getOutputs(): IOutputs {
        return {
            isSelected: this._isSelected
        };
    }

    public destroy(): void {
        // ReactControl handles cleanup
    }
}