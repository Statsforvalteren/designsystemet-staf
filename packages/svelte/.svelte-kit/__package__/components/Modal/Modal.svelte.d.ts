/** @typedef {typeof __propDef.props}  ModalProps */
/** @typedef {typeof __propDef.events}  ModalEvents */
/** @typedef {typeof __propDef.slots}  ModalSlots */
export default class Modal extends SvelteComponent<{
    [x: string]: any;
    title?: string;
    modalVariant?: "default" | "alert";
    subtitle?: string;
    primaryButtonText?: string;
    primaryButtonVariant?: "filled" | "outline" | "quiet";
    primaryButtonColor?: "first" | "second" | "success" | "danger" | "inverted";
    primaryButtonSize?: "small" | "medium" | "large";
    secondaryButtonText?: string;
    secondaryButtonVariant?: "filled" | "outline" | "quiet";
    secondaryButtonColor?: "first" | "second" | "success" | "danger" | "inverted";
    secondaryButtonSize?: "small" | "medium" | "large";
    numberOfErrors?: number;
    isModalValidating?: boolean;
    onClose?: () => void;
    onPrimaryButtonClick?: () => void;
}, {
    close: CustomEvent<any>;
    primaryButtonClick: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string;
        modalVariant?: 'default' | 'alert';
        subtitle?: string;
        primaryButtonText?: string;
        primaryButtonVariant?: 'filled' | 'outline' | 'quiet';
        primaryButtonColor?: 'first' | 'second' | 'success' | 'danger' | 'inverted';
        primaryButtonSize?: 'small' | 'medium' | 'large';
        secondaryButtonText?: string;
        secondaryButtonVariant?: 'filled' | 'outline' | 'quiet';
        secondaryButtonColor?: 'first' | 'second' | 'success' | 'danger' | 'inverted';
        secondaryButtonSize?: 'small' | 'medium' | 'large';
        numberOfErrors?: number;
        isModalValidating?: boolean;
        onClose?: () => void;
        onPrimaryButtonClick?: () => void;
    };
    events: {
        close: CustomEvent<any>;
        primaryButtonClick: CustomEvent<any>;
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
