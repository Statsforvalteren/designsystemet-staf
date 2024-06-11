/** @typedef {typeof __propDef.props}  CrossProps */
/** @typedef {typeof __propDef.events}  CrossEvents */
/** @typedef {typeof __propDef.slots}  CrossSlots */
export default class Cross extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CrossProps = typeof __propDef.props;
export type CrossEvents = typeof __propDef.events;
export type CrossSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
