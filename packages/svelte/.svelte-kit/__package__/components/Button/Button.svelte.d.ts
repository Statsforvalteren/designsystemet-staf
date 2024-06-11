/** @typedef {typeof __propDef.props}  ButtonProps */
/** @typedef {typeof __propDef.events}  ButtonEvents */
/** @typedef {typeof __propDef.slots}  ButtonSlots */
export default class Button extends SvelteComponent<{
    [x: string]: any;
    variant?: "filled" | "outline" | "quiet";
    color?: "first" | "second" | "success" | "danger" | "inverted";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    dashedBorder?: boolean;
    iconPlacement?: "right" | "left";
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    default: {};
}> {
}
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: 'filled' | 'outline' | 'quiet';
        color?: 'first' | 'second' | 'success' | 'danger' | 'inverted';
        size?: 'small' | 'medium' | 'large';
        fullWidth?: boolean;
        dashedBorder?: boolean;
        iconPlacement?: 'right' | 'left';
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
    exports?: {};
    bindings?: string;
};
export {};
