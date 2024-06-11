/** @typedef {typeof __propDef.props}  DropdownMenuProps */
/** @typedef {typeof __propDef.events}  DropdownMenuEvents */
/** @typedef {typeof __propDef.slots}  DropdownMenuSlots */
export default class DropdownMenu extends SvelteComponent<{
    size?: "small" | "medium" | "large";
    onClose?: () => void;
    placement?: "right" | "left" | "top" | "bottom" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
    anchorEl?: HTMLElement;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        C: {
            MenuGroup: typeof MenuGroup;
            MenuItem: typeof MenuItem;
            Divider: typeof Divider;
        };
    };
}> {
}
export type DropdownMenuProps = typeof __propDef.props;
export type DropdownMenuEvents = typeof __propDef.events;
export type DropdownMenuSlots = typeof __propDef.slots;
import MenuGroup from './DropdownMenuGroup.svelte';
import MenuItem from './DropdownMenuItem.svelte';
import Divider from './Divider.svelte';
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: 'small' | 'medium' | 'large';
        onClose?: () => void;
        placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
        anchorEl?: HTMLElement;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            C: {
                MenuGroup: typeof MenuGroup;
                MenuItem: typeof MenuItem;
                Divider: typeof Divider;
            };
        };
    };
    exports?: {};
    bindings?: string;
};
export {};
