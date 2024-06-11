/** @typedef {typeof __propDef.props}  TooltipProps */
/** @typedef {typeof __propDef.events}  TooltipEvents */
/** @typedef {typeof __propDef.slots}  TooltipSlots */
export default class Tooltip extends SvelteComponent<{
    [x: string]: any;
    placement?: "right" | "left" | "top" | "bottom" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
    delay?: number;
    open?: boolean;
    defaultOpen?: boolean;
    arrowGap?: number;
    showArrow?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    anchor: {};
    content: {};
}> {
}
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        placement?: 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
        delay?: number;
        open?: boolean;
        defaultOpen?: boolean;
        arrowGap?: number;
        showArrow?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        anchor: {};
        content: {};
    };
    exports?: {};
    bindings?: string;
};
export {};
