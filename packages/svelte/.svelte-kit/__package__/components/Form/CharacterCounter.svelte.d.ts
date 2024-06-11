/** @typedef {typeof __propDef.props}  CharacterCounterProps */
/** @typedef {typeof __propDef.events}  CharacterCounterEvents */
/** @typedef {typeof __propDef.slots}  CharacterCounterSlots */
export default class CharacterCounter extends SvelteComponent<{
    maxCount: any;
    value: any;
    id: any;
    size?: string;
    label?: (count: any) => string;
    srLabel?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CharacterCounterProps = typeof __propDef.props;
export type CharacterCounterEvents = typeof __propDef.events;
export type CharacterCounterSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        maxCount: any;
        value: any;
        id: any;
        size?: string;
        label?: (count: any) => string;
        srLabel?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
