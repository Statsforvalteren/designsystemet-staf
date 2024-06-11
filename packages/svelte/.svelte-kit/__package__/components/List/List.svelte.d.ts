/** @typedef {typeof __propDef.props}  ListProps */
/** @typedef {typeof __propDef.events}  ListEvents */
/** @typedef {typeof __propDef.slots}  ListSlots */
export default class List extends SvelteComponent<{
    [x: string]: any;
    as?: "ol" | "ul" | "none";
    className?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        class: string;
    };
}> {
}
export type ListProps = typeof __propDef.props;
export type ListEvents = typeof __propDef.events;
export type ListSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        as?: 'ul' | 'ol' | 'none';
        className?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            class: string;
        };
    };
    exports?: {};
    bindings?: string;
};
export {};
