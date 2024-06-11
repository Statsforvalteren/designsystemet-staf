/** @typedef {typeof __propDef.props}  ListItemProps */
/** @typedef {typeof __propDef.events}  ListItemEvents */
/** @typedef {typeof __propDef.slots}  ListItemSlots */
export default class ListItem extends SvelteComponent<{
    [x: string]: any;
    className?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ListItemProps = typeof __propDef.props;
export type ListItemEvents = typeof __propDef.events;
export type ListItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        className?: string;
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
