/** @typedef {typeof __propDef.props}  ClearButtonProps */
/** @typedef {typeof __propDef.events}  ClearButtonEvents */
/** @typedef {typeof __propDef.slots}  ClearButtonSlots */
export default class ClearButton extends SvelteComponent<{
    handleClick: any;
    disabled: any;
    readOnly: any;
    size?: string;
    deleteButtonLabel?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ClearButtonProps = typeof __propDef.props;
export type ClearButtonEvents = typeof __propDef.events;
export type ClearButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        handleClick: any;
        disabled: any;
        readOnly: any;
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
