

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.da390333.js","_app/immutable/chunks/scheduler.3722806f.js","_app/immutable/chunks/index.0d2db03a.js"];
export const stylesheets = ["_app/immutable/assets/0.c2073415.css"];
export const fonts = [];
