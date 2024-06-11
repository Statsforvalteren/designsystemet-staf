/** @typedef {typeof __propDef.props}  SpinnerProps */
/** @typedef {typeof __propDef.events}  SpinnerEvents */
/** @typedef {typeof __propDef.slots}  SpinnerSlots */
export default class Spinner extends SvelteComponent<{
    [x: string]: any;
    variant?: "default" | "inverted" | "interaction";
    size?: "small" | "medium" | "large" | "xSmall" | "xLarge";
    title?: string;
    className?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpinnerProps = typeof __propDef.props;
export type SpinnerEvents = typeof __propDef.events;
export type SpinnerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: 'default' | 'interaction' | 'inverted';
        size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
        title?: string;
        className?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
