/** @typedef {typeof __propDef.props}  DropdownMenuGroupProps */
/** @typedef {typeof __propDef.events}  DropdownMenuGroupEvents */
/** @typedef {typeof __propDef.slots}  DropdownMenuGroupSlots */
export default class DropdownMenuGroup extends SvelteComponent<{
    label?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownMenuGroupProps = typeof __propDef.props;
export type DropdownMenuGroupEvents = typeof __propDef.events;
export type DropdownMenuGroupSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label?: string;
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
