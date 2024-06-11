/** @typedef {typeof __propDef.props}  AlertProps */
/** @typedef {typeof __propDef.events}  AlertEvents */
/** @typedef {typeof __propDef.slots}  AlertSlots */
export default class Alert extends SvelteComponent<{
    [x: string]: any;
    severity?: "success" | "danger" | "info" | "warning";
    elevated?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AlertProps = typeof __propDef.props;
export type AlertEvents = typeof __propDef.events;
export type AlertSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        severity?: 'info' | 'warning' | 'success' | 'danger';
        elevated?: boolean;
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
