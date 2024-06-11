

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.47ab3a01.js","_app/immutable/chunks/scheduler.3722806f.js","_app/immutable/chunks/index.0d2db03a.js","_app/immutable/chunks/index.52bd5366.js"];
export const stylesheets = ["_app/immutable/assets/2.a0419415.css"];
export const fonts = [];
