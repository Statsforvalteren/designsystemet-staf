/** @typedef {typeof __propDef.props}  TagProps */
/** @typedef {typeof __propDef.events}  TagEvents */
/** @typedef {typeof __propDef.slots}  TagSlots */
export default class Tag extends SvelteComponent<{
    [x: string]: any;
    variant?: "filled" | "outlined";
    color?: "first" | "second" | "success" | "danger" | "info" | "warning" | "third" | "neutral";
    size?: "small" | "medium" | "xsmall";
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TagProps = typeof __propDef.props;
export type TagEvents = typeof __propDef.events;
export type TagSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: 'filled' | 'outlined';
        color?: 'first' | 'second' | 'third' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';
        size?: 'xsmall' | 'small' | 'medium';
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
