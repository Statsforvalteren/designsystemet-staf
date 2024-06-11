/** @typedef {typeof __propDef.props}  FilesProps */
/** @typedef {typeof __propDef.events}  FilesEvents */
/** @typedef {typeof __propDef.slots}  FilesSlots */
export default class Files extends SvelteComponent<{
    color?: string;
    width?: number;
    height?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FilesProps = typeof __propDef.props;
export type FilesEvents = typeof __propDef.events;
export type FilesSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        color?: string;
        width?: number;
        height?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export {};
