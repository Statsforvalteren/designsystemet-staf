/** @typedef {typeof __propDef.props}  AccordionItemProps */
/** @typedef {typeof __propDef.events}  AccordionItemEvents */
/** @typedef {typeof __propDef.slots}  AccordionItemSlots */
export default class AccordionItem extends SvelteComponent<{
    open?: import("svelte/store").Writable<any>;
    defaultOpen?: boolean;
}, {
    toggleOpen: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        open?: import("svelte/store").Writable<any>;
        defaultOpen?: boolean;
    };
    events: {
        toggleOpen: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {};
    bindings?: string;
};
export {};
