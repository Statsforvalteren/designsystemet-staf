export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bbf8c1f4.js","app":"_app/immutable/entry/app.bb58703e.js","imports":["_app/immutable/entry/start.bbf8c1f4.js","_app/immutable/chunks/scheduler.3722806f.js","_app/immutable/chunks/singletons.c21403ec.js","_app/immutable/chunks/index.52bd5366.js","_app/immutable/entry/app.bb58703e.js","_app/immutable/chunks/scheduler.3722806f.js","_app/immutable/chunks/index.0d2db03a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
