/** @typedef {typeof __propDef.props}  DropdownMenuItemProps */
/** @typedef {typeof __propDef.events}  DropdownMenuItemEvents */
/** @typedef {typeof __propDef.slots}  DropdownMenuItemSlots */
export default class DropdownMenuItem extends SvelteComponent<{
    href?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    IconComponent?: any;
    onClick?: (e: any) => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DropdownMenuItemProps = typeof __propDef.props;
export type DropdownMenuItemEvents = typeof __propDef.events;
export type DropdownMenuItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string;
        target?: '_blank' | '_self' | '_parent' | '_top';
        IconComponent?: any;
        onClick?: (e: any) => void;
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
