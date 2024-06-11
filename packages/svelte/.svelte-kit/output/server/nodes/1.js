

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d401da25.js","_app/immutable/chunks/scheduler.3722806f.js","_app/immutable/chunks/index.0d2db03a.js","_app/immutable/chunks/singletons.c21403ec.js","_app/immutable/chunks/index.52bd5366.js"];
export const stylesheets = [];
export const fonts = [];
