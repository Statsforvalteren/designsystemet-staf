/** @typedef {typeof __propDef.props}  TextareaProps */
/** @typedef {typeof __propDef.events}  TextareaEvents */
/** @typedef {typeof __propDef.slots}  TextareaSlots */
export default class Textarea extends SvelteComponent<{
    [x: string]: any;
    value: any;
    error?: string;
    size?: "small" | "medium" | "large" | "xsmall";
    label?: string;
    disabled?: boolean;
    readOnly?: boolean;
    description?: string;
    hideLabel?: boolean;
    characterLimit?: any;
    characterLimitLabel?: any;
}, {
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
        error?: string;
        size?: 'xsmall' | 'small' | 'medium' | 'large';
        label?: string;
        disabled?: boolean;
        readOnly?: boolean;
        description?: string;
        hideLabel?: boolean;
        characterLimit?: any;
        characterLimitLabel?: any;
    };
    /**
       * Sets limit for number of characters.
       */ events: {
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
