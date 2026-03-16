import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld, IHelloWorldProps } from "./HelloWorld";
import * as React from "react";

export class WorkerBadge implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: React.ReactElement<IHelloWorldProps>;

    constructor() { }

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary): void {
        // Initialization logic if needed
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        // Grab the values from the properties defined in the manifest
        const nameValue = context.parameters.fullName.raw || "New Worker";
        const statusParam = context.parameters.status;
        const statusValue = statusParam.raw ? Number(statusParam.raw) : 0;
        const systemLabel = (statusParam as any).formatted;
    
        const labelMap: { [key: number]: string } = {
            1: "Active",
            2: "Onboarding",
            3: "Offboarding"
        };

        const statusText = (systemLabel && isNaN(Number(systemLabel))) 
            ? systemLabel 
            : labelMap[statusValue] || "Unknown";

        // Pass the values as a 'prop' to the React component
        return React.createElement(
            HelloWorld, {
                name: nameValue,
                status: statusValue,
                statusLabel: statusText
            }
        );
    }

    public getOutputs(): IOutputs {
        return { };
    }

    public destroy(): void {
        // Cleanup
    }
}