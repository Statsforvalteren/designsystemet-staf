/** @typedef {typeof __propDef.props}  AccordionProps */
/** @typedef {typeof __propDef.events}  AccordionEvents */
/** @typedef {typeof __propDef.slots}  AccordionSlots */
export default class Accordion extends SvelteComponent<{
    border: boolean;
    color: "first" | "second" | "third" | "neutral" | "subtle";
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        border: boolean;
        color: "neutral" | "subtle" | "first" | "second" | "third";
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
