/** @typedef {typeof __propDef.props}  MultiSelectOptionProps */
/** @typedef {typeof __propDef.events}  MultiSelectOptionEvents */
/** @typedef {typeof __propDef.slots}  MultiSelectOptionSlots */
export default class MultiSelectOption extends SvelteComponent<{
    option: any;
    disabled: any;
    readOnly: boolean;
    removeOption: Function;
    size?: string;
    deleteButtonLabel?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MultiSelectOptionProps = typeof __propDef.props;
export type MultiSelectOptionEvents = typeof __propDef.events;
export type MultiSelectOptionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        option: any;
        disabled: any;
        readOnly: boolean;
        removeOption: Function;
        size?: string;
        deleteButtonLabel?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
