/** @typedef {typeof __propDef.props}  LinkProps */
/** @typedef {typeof __propDef.events}  LinkEvents */
/** @typedef {typeof __propDef.slots}  LinkSlots */
export default class Link extends SvelteComponent<{
    [x: string]: any;
    inverted?: boolean;
    as?: "button" | "a";
    href?: string;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type LinkProps = typeof __propDef.props;
export type LinkEvents = typeof __propDef.events;
export type LinkSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        inverted?: boolean;
        as?: 'a' | 'button';
        href?: string;
    };
    events: {
        click: MouseEvent;
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
