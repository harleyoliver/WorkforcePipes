import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { WorkerBadgeComponent, IWorkerBadgeProps } from "./WorkerBadgeComponent";

export class WorkerBadge implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private _notifyOutputChanged: () => void;

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
            logoUrl: "assets/logo.svg"
        };

        return React.createElement(WorkerBadgeComponent, props);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // ReactControl handles cleanup
    }
}