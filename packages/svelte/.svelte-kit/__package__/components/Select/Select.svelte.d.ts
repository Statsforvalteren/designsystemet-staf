/** @typedef {typeof __propDef.props}  SelectProps */
/** @typedef {typeof __propDef.events}  SelectEvents */
/** @typedef {typeof __propDef.slots}  SelectSlots */
export default class Select extends SvelteComponent<{
    [x: string]: any;
    label: string;
    error?: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    placeholder?: string;
    hasFilter?: boolean;
    searchLabel?: string;
    clearable?: boolean;
    hideSelected?: boolean;
    options?: {
        /**
         * - Display label of the option.
         */
        label: string;
        /**
         * - Description of the option.
         */
        description?: string;
        /**
         * - Unique value of the option.
         */
        value: string;
    }[];
    selected?: {
        /**
         * - Display label of the option.
         */
        label: string;
        /**
         * - Description of the option.
         */
        description?: string;
        /**
         * - Unique value of the option.
         */
        value: string;
    } | {
        /**
         * - Display label of the option.
         */
        label: string;
        /**
         * - Description of the option.
         */
        description?: string;
        /**
         * - Unique value of the option.
         */
        value: string;
    }[];
    description?: string;
    ariaLabel?: string;
    closeMenuOnSelect?: boolean;
    onChange?: Function;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label: string;
        error?: string;
        size?: 'small' | 'medium' | 'large';
        disabled?: boolean;
        readOnly?: boolean;
        multiple?: boolean;
        placeholder?: string;
        hasFilter?: boolean;
        searchLabel?: string;
        clearable?: boolean;
        hideSelected?: boolean;
        options?: {
            /**
             * - Display label of the option.
             */
            label: string;
            /**
             * - Description of the option.
             */
            description?: string;
            /**
             * - Unique value of the option.
             */
            value: string;
        }[];
        selected?: {
            /**
             * - Display label of the option.
             */
            label: string;
            /**
             * - Description of the option.
             */
            description?: string;
            /**
             * - Unique value of the option.
             */
            value: string;
        } | {
            /**
             * - Display label of the option.
             */
            label: string;
            /**
             * - Description of the option.
             */
            description?: string;
            /**
             * - Unique value of the option.
             */
            value: string;
        }[];
        description?: string;
        ariaLabel?: string;
        closeMenuOnSelect?: boolean;
        onChange?: Function;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
