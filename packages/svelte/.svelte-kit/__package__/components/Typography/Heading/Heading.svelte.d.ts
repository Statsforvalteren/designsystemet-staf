/** @typedef {typeof __propDef.props}  HeadingProps */
/** @typedef {typeof __propDef.events}  HeadingEvents */
/** @typedef {typeof __propDef.slots}  HeadingSlots */
export default class Heading extends SvelteComponent<{
    size?: string;
    className?: string;
    spacing?: boolean;
    level?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type HeadingProps = typeof __propDef.props;
export type HeadingEvents = typeof __propDef.events;
export type HeadingSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: string;
        className?: string;
        spacing?: boolean;
        level?: number;
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
