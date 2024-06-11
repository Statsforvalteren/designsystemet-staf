/** @typedef {typeof __propDef.props}  TabItemProps */
/** @typedef {typeof __propDef.events}  TabItemEvents */
/** @typedef {typeof __propDef.slots}  TabItemSlots */
export default class TabItem extends SvelteComponent<{
    value: any;
    icon?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TabItemProps = typeof __propDef.props;
export type TabItemEvents = typeof __propDef.events;
export type TabItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        icon?: any;
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
