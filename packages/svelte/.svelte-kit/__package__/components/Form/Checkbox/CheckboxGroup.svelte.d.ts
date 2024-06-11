/** @typedef {typeof __propDef.props}  CheckboxGroupProps */
/** @typedef {typeof __propDef.events}  CheckboxGroupEvents */
/** @typedef {typeof __propDef.slots}  CheckboxGroupSlots */
export default class CheckboxGroup extends SvelteComponent<{
    error?: string;
    size?: string;
    legend?: string;
    disabled?: boolean;
    readOnly?: boolean;
    description?: string;
    value?: any[];
    required?: boolean;
    defaultValue?: any[];
    hideLegend?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CheckboxGroupProps = typeof __propDef.props;
export type CheckboxGroupEvents = typeof __propDef.events;
export type CheckboxGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        error?: string;
        size?: string;
        legend?: string;
        disabled?: boolean;
        readOnly?: boolean;
        description?: string;
        value?: any[];
        required?: boolean;
        defaultValue?: any[];
        hideLegend?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {};
    bindings?: string;
};
export {};
