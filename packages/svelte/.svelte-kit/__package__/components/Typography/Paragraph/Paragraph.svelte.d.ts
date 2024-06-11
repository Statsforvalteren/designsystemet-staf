/** @typedef {typeof __propDef.props}  ParagraphProps */
/** @typedef {typeof __propDef.events}  ParagraphEvents */
/** @typedef {typeof __propDef.slots}  ParagraphSlots */
export default class Paragraph extends SvelteComponent<{
    [x: string]: any;
    size?: string;
    as?: string;
    spacing?: boolean;
    short?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ParagraphProps = typeof __propDef.props;
export type ParagraphEvents = typeof __propDef.events;
export type ParagraphSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string;
        as?: string;
        spacing?: boolean;
        short?: boolean;
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
