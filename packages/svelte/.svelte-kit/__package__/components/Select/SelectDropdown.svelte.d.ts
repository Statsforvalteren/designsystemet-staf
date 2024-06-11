/** @typedef {typeof __propDef.props}  SelectDropdownProps */
/** @typedef {typeof __propDef.events}  SelectDropdownEvents */
/** @typedef {typeof __propDef.slots}  SelectDropdownSlots */
export default class SelectDropdown extends SvelteComponent<{
    multiple: any;
    inputId: any;
    options: {
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
    selectOption: Function;
    isDropdownVisible: boolean;
    size?: string;
    hideSelected?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SelectDropdownProps = typeof __propDef.props;
export type SelectDropdownEvents = typeof __propDef.events;
export type SelectDropdownSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        multiple: any;
        inputId: any;
        options: {
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
        selectOption: Function;
        isDropdownVisible: boolean;
        size?: string;
        hideSelected?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
