/** @typedef {typeof __propDef.props}  SwitchProps */
/** @typedef {typeof __propDef.events}  SwitchEvents */
/** @typedef {typeof __propDef.slots}  SwitchSlots */
export default class Switch extends SvelteComponent<{
    [x: string]: any;
    size?: string;
    disabled?: boolean;
    readOnly?: boolean;
    checked?: boolean;
    description?: string;
    value?: string;
    id?: string;
    position?: string;
}, {
    click: CustomEvent<any>;
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string;
        disabled?: boolean;
        readOnly?: boolean;
        checked?: boolean;
        description?: string;
        value?: string;
        id?: string;
        position?: string;
    };
    events: {
        click: CustomEvent<any>;
        change: CustomEvent<any>;
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
