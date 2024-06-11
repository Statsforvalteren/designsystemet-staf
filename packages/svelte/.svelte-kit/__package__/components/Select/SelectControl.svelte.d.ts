/** @typedef {typeof __propDef.props}  SelectControlProps */
/** @typedef {typeof __propDef.events}  SelectControlEvents */
/** @typedef {typeof __propDef.slots}  SelectControlSlots */
export default class SelectControl extends SvelteComponent<{
    multiple: any;
    inputId: any;
    placeholder: any;
    hasFilter: any;
    readOnly: any;
    removeOption: any;
    handleSelectControlClick: any;
    handleFilterChange: any;
    searchLabel: any;
    disabled: any;
    error: any;
    clearAll: any;
    clearable: any;
    size: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectControlProps = typeof __propDef.props;
export type SelectControlEvents = typeof __propDef.events;
export type SelectControlSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        multiple: any;
        inputId: any;
        placeholder: any;
        hasFilter: any;
        readOnly: any;
        removeOption: any;
        handleSelectControlClick: any;
        handleFilterChange: any;
        searchLabel: any;
        disabled: any;
        error: any;
        clearAll: any;
        clearable: any;
        size: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
