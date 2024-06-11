/** @typedef {typeof __propDef.props}  TabContentProps */
/** @typedef {typeof __propDef.events}  TabContentEvents */
/** @typedef {typeof __propDef.slots}  TabContentSlots */
export default class TabContent extends SvelteComponent<{
    [x: string]: any;
    value: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TabContentProps = typeof __propDef.props;
export type TabContentEvents = typeof __propDef.events;
export type TabContentSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        value: any;
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
