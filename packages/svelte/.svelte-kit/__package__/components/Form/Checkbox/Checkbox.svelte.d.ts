/** @typedef {typeof __propDef.props}  CheckboxProps */
/** @typedef {typeof __propDef.events}  CheckboxEvents */
/** @typedef {typeof __propDef.slots}  CheckboxSlots */
export default class Checkbox extends SvelteComponent<{
    [x: string]: any;
    label: any;
    value: any;
    disabled?: any;
    readOnly?: any;
    checked?: boolean;
    description?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label: any;
        value: any;
        disabled?: any;
        readOnly?: any;
        checked?: boolean;
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
