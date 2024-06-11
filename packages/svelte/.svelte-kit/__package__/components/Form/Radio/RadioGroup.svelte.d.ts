/** @typedef {typeof __propDef.props}  RadioGroupProps */
/** @typedef {typeof __propDef.events}  RadioGroupEvents */
/** @typedef {typeof __propDef.slots}  RadioGroupSlots */
export default class RadioGroup extends SvelteComponent<{
    value: string;
    error?: string;
    size?: "small" | "medium" | "large" | "xsmall";
    legend?: string;
    disabled?: boolean;
    readOnly?: boolean;
    description?: string;
    required?: boolean;
    defaultValue?: string;
    inline?: boolean;
    hideLegend?: boolean;
}, {
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RadioGroupProps = typeof __propDef.props;
export type RadioGroupEvents = typeof __propDef.events;
export type RadioGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: string;
        error?: string;
        size?: 'xsmall' | 'small' | 'medium' | 'large';
        legend?: string;
        disabled?: boolean;
        readOnly?: boolean;
        description?: string;
        required?: boolean;
        defaultValue?: string;
        inline?: boolean;
        hideLegend?: boolean;
    };
    events: {
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {};
    bindings?: string;
};
export {};
