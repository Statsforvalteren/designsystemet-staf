/** @typedef {typeof __propDef.props}  SearchProps */
/** @typedef {typeof __propDef.events}  SearchEvents */
/** @typedef {typeof __propDef.slots}  SearchSlots */
export default class Search extends SvelteComponent<{
    [x: string]: any;
    value: any;
    error?: string;
    size?: "small" | "medium" | "large" | "xsmall";
    label?: string;
    disabled?: boolean;
    description?: string;
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
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
        error?: string;
        size?: 'xsmall' | 'small' | 'medium' | 'large';
        label?: string;
        disabled?: boolean;
        description?: string;
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
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
