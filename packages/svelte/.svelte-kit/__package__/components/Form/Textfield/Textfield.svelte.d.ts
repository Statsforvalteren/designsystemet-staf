/** @typedef {typeof __propDef.props}  TextfieldProps */
/** @typedef {typeof __propDef.events}  TextfieldEvents */
/** @typedef {typeof __propDef.slots}  TextfieldSlots */
export default class Textfield extends SvelteComponent<{
    [x: string]: any;
    value: any;
    error?: string;
    size?: "small" | "medium" | "large" | "xsmall";
    label?: string;
    disabled?: boolean;
    readOnly?: boolean;
    description?: string;
    type?: "number" | "search" | "text" | "email" | "password" | "tel" | "url";
    hideLabel?: boolean;
    prefix?: string;
    suffix?: string;
    characterLimit?: any;
    characterLimitLabel?: any;
}, {
    input: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextfieldProps = typeof __propDef.props;
export type TextfieldEvents = typeof __propDef.events;
export type TextfieldSlots = typeof __propDef.slots;
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
        type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
        hideLabel?: boolean;
        prefix?: string;
        suffix?: string;
        characterLimit?: any;
        characterLimitLabel?: any;
    };
    events: {
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {}; /**
       * Label for the textfield.
       */
    exports?: {};
    bindings?: string;
};
export {};
