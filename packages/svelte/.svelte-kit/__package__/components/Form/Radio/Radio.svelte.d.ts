/** @typedef {typeof __propDef.props}  RadioProps */
/** @typedef {typeof __propDef.events}  RadioEvents */
/** @typedef {typeof __propDef.slots}  RadioSlots */
export default class Radio extends SvelteComponent<{
    [x: string]: any;
    label: any;
    value: any;
    disabled?: any;
    readOnly?: any;
    description?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label: any;
        value: any;
        disabled?: any;
        readOnly?: any;
        description?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
