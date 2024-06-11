/** @typedef {typeof __propDef.props}  TabsProps */
/** @typedef {typeof __propDef.events}  TabsEvents */
/** @typedef {typeof __propDef.slots}  TabsSlots */
export default class Tabs extends SvelteComponent<{
    size?: "small" | "medium" | "large";
    onChange?: (value: any) => void;
    defaultValue?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: 'small' | 'medium' | 'large';
        onChange?: (value: any) => void;
        defaultValue?: string;
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
