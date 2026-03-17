import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
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
        /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
        const props: IWorkerBadgeProps = {
            name: context.parameters.fullName.raw ?? "",
            status: context.parameters.status.raw ?? 0
        };
        /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

        return React.createElement(WorkerBadgeComponent, props);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // ReactControl handles cleanup
    }
}