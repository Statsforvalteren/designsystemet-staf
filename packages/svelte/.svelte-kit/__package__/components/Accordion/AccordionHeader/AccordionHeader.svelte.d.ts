/** @typedef {typeof __propDef.props}  AccordionHeaderProps */
/** @typedef {typeof __propDef.events}  AccordionHeaderEvents */
/** @typedef {typeof __propDef.slots}  AccordionHeaderSlots */
export default class AccordionHeader extends SvelteComponent<{
    level?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
}> {
}
export type AccordionHeaderProps = typeof __propDef.props;
export type AccordionHeaderEvents = typeof __propDef.events;
export type AccordionHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        level?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
    };
    exports?: {};
    bindings?: string;
};
export {};
