import { b as set_current_component, r as run_all, d as current_component, c as create_ssr_component, e as escape, n as null_to_empty, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, v as validate_component, k as compute_slots, l as createEventDispatcher, o as add_attribute, g as getContext, a as subscribe, s as setContext, p as each, q as get_store_value, t as onDestroy, u as noop, w as set_store_value } from "../../chunks/ssr.js";
import { v4 } from "uuid";
import { w as writable } from "../../chunks/index.js";
import { computePosition, autoUpdate, offset, flip, shift } from "@floating-ui/dom";
import { arrow as arrow$1 } from "@floating-ui/core";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Paragraph_svelte_svelte_type_style_lang = "";
const css$u = {
  code: ".paragraph{--fdsc-typography-font-family:inherit;--fdsc-bottom-spacing:var(--fds-spacing-5);color:var(--fds-semantic-text-neutral-default);margin:0}.paragraph.spacing.svelte-meyhng{margin-bottom:var(--fdsc-bottom-spacing)}.paragraph.large.svelte-meyhng{--fdsc-bottom-spacing:var(--fds-spacing-6);font:var(--fds-typography-paragraph-large);font-family:var(--fdsc-typography-font-family)}.paragraph.large.short.svelte-meyhng{font:var(--fds-typography-paragraph-short-large);font-family:var(--fdsc-typography-font-family)}.paragraph.medium.svelte-meyhng{--fdsc-bottom-spacing:var(--fds-spacing-5);font:var(--fds-typography-paragraph-medium);font-family:var(--fdsc-typography-font-family)}.paragraph.medium.short.svelte-meyhng{--fdsc-bottom-spacing:var(--fds-spacing-5);font:var(--fds-typography-paragraph-short-medium);font-family:var(--fdsc-typography-font-family)}.paragraph.small.svelte-meyhng{--fdsc-bottom-spacing:var(--fds-spacing-4);font:var(--fds-typography-paragraph-small);font-family:var(--fdsc-typography-font-family)}.paragraph.small.short.svelte-meyhng{--fdsc-bottom-spacing:var(--fds-spacing-4);font:var(--fds-typography-paragraph-short-small);font-family:var(--fdsc-typography-font-family)}.paragraph.xsmall.svelte-meyhng{--fdsc-bottom-spacing:var(--fds-spacing-3);font:var(--fds-typography-paragraph-xsmall);font-family:var(--fdsc-typography-font-family)}.paragraph.xsmall.short.svelte-meyhng{--fdsc-bottom-spacing:var(--fds-spacing-3);font:var(--fds-typography-paragraph-short-xsmall);font-family:var(--fdsc-typography-font-family)}",
  map: null
};
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedClass;
  let { as = "p" } = $$props;
  let { size = "medium" } = $$props;
  let { spacing = false } = $$props;
  let { short = false } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.short === void 0 && $$bindings.short && short !== void 0)
    $$bindings.short(short);
  $$result.css.add(css$u);
  computedClass = [
    "paragraph",
    size,
    spacing ? "spacing" : "",
    short ? "short" : "",
    $$props.class || ""
  ].filter(Boolean).join(" ");
  return `${as === "p" ? `<p class="${escape(null_to_empty(computedClass), true) + " svelte-meyhng"}">${slots.default ? slots.default({}) : ``}</p>` : `${as === "span" ? `<span class="${escape(null_to_empty(computedClass), true) + " svelte-meyhng"}">${slots.default ? slots.default({}) : ``}</span>` : `<div class="${escape(null_to_empty(computedClass), true) + " svelte-meyhng"}">${slots.default ? slots.default({}) : ``}</div>`}`}`;
});
const Alert_svelte_svelte_type_style_lang = "";
const css$t = {
  code: ".alert.svelte-1xhacj7{--fdsc-alert-border:var(--fds-semantic-border-info-default);--fdsc-alert-icon-color:var(--fdsc-alert-border);--fdsc-alert-background:var(--fds-semantic-surface-info-subtle);--fdsc-alert-color:var(--fds-semantic-text-neutral-default);--fdsc-alert-box-shadow-left:8px 0 0 0 var(--fdsc-alert-border) inset;box-shadow:var(--fdsc-alert-box-shadow-left);background:var(--fdsc-alert-background);color:var(--fdsc-alert-color);padding:var(--fds-spacing-4);display:grid;grid-auto-flow:column;grid-auto-columns:min-content auto;gap:var(--fds-spacing-2)}.icon.svelte-1xhacj7{--icon-size:calc(\r\n      (4 * 6 / 16) * var(--fds-font-size-f0)\r\n    );height:var(--icon-size);width:var(--icon-size);color:var(--fdsc-alert-icon-color);scale:1.5;& > svg {\r\n      margin: 5px;\r\n    }}.content.svelte-1xhacj7{display:flex;flex-direction:column}.info.svelte-1xhacj7{--fdsc-alert-border:var(--fds-semantic-border-info-default);--fdsc-alert-background:var(--fds-semantic-surface-info-subtle)}.warning.svelte-1xhacj7{--fdsc-alert-border:var(--fds-semantic-border-warning-default);--fdsc-alert-background:var(--fds-semantic-surface-warning-subtle)}.success.svelte-1xhacj7{--fdsc-alert-border:var(--fds-semantic-border-success-default);--fdsc-alert-background:var(--fds-semantic-surface-success-subtle)}.danger.svelte-1xhacj7{--fdsc-alert-border:var(--fds-semantic-border-danger-default);--fdsc-alert-background:var(--fds-semantic-surface-danger-subtle)}.elevated.svelte-1xhacj7{box-shadow:var(--fdsc-alert-box-shadow-left), var(--fds-shadow-small)}",
  map: null
};
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["severity", "elevated"]);
  let { severity = "info" } = $$props;
  let { elevated = false } = $$props;
  if ($$props.severity === void 0 && $$bindings.severity && severity !== void 0)
    $$bindings.severity(severity);
  if ($$props.elevated === void 0 && $$bindings.elevated && elevated !== void 0)
    $$bindings.elevated(elevated);
  $$result.css.add(css$t);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(`alert ${severity} ${elevated ? "elevated" : ""}`)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-1xhacj7" }
  )}><div class="icon svelte-1xhacj7">${severity == "danger" ? `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53L7.742 2.47Zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94 9.03 7.97Z" fill="currentColor"></path></svg>` : `${severity == "warning" ? `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"></path></svg>` : `${severity == "info" ? `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4ZM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75Z" fill="currentColor"></path></svg>` : `${severity == "success" ? `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Zm4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.812.812 0 0 0 1.195-.05l5.959-7.042Z" fill="currentColor"></path></svg>` : ``}`}`}`}</div> ${validate_component(Paragraph, "Paragraph").$$render($$result, { as: "span", className: "content" }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} </div>`;
});
const Button_svelte_svelte_type_style_lang = "";
const css$s = {
  code: ".button.svelte-d6bdoy{--fdsc-border-radius:var(--fds-border_radius-interactive);--fdsc-button-size:var(--fds-component-mode-height-small);--fdsc-button-padding:var(--fds-spacing-1) var(--fds-spacing-2);--fdsc-font-and-icon-color:var(--fds-semantic-text-action-first-on_action);--fdsc-icon-size:var(--fds-sizing-4);display:flex;align-items:center;border-radius:var(--fdsc-border-radius);border:var(--fds-border_width-default) solid transparent;color:var(--fdsc-font-and-icon-color);fill:var(--fdsc-font-and-icon-color);height:var(--fdsc-button-size);padding:var(--fdsc-button-padding);box-sizing:border-box;cursor:pointer;font-family:inherit;justify-content:center;text-align:center;letter-spacing:var(--typography-default-letter-spacing);text-decoration:none;position:relative}.button.small.svelte-d6bdoy::before{position:absolute;top:0;left:0;width:auto;min-height:auto;content:''}.button.small.svelte-d6bdoy::after{position:absolute;top:-5px;left:0;width:100%;height:44px;content:''}.button.svelte-d6bdoy:disabled,.button[aria-disabled='true'].svelte-d6bdoy{cursor:auto;opacity:var(--fds-opacity-disabled)}.icon.svelte-d6bdoy{display:inline-block;height:var(--fdsc-icon-size);width:var(--fdsc-icon-size)}.button.small.svelte-d6bdoy{--fdsc-button-size:var(--fds-component-mode-height-small);--fdsc-button-padding:var(--fds-spacing-1) var(--fds-spacing-2);--fdsc-icon-size:var(--fds-sizing-4);gap:var(--fds-sizing-2);min-width:var(--fdsc-button-size);font:var(--fds-typography-paragraph-small);font-family:inherit}.button.medium.svelte-d6bdoy{--fdsc-button-size:var(--fds-component-mode-height-medium);--fdsc-button-padding:var(--fds-spacing-2) var(--fds-spacing-3);--fdsc-icon-size:var(--fds-sizing-6);gap:var(--fds-sizing-3);min-width:var(--fdsc-button-size);font:var(--fds-typography-paragraph-medium);font-family:inherit}.button.large.svelte-d6bdoy{--fdsc-button-size:var(--fds-component-mode-height-large);--fdsc-button-padding:var(--fds-spacing-2) var(--fds-spacing-3);--fdsc-icon-size:var(--fds-sizing-8);gap:var(--fds-sizing-3);min-width:var(--fdsc-button-size);font:var(--fds-typography-paragraph-large);font-family:inherit}.button.fullWidth.svelte-d6bdoy{width:100%}.button.dashedBorder.svelte-d6bdoy{border-style:dashed}.button.outline.svelte-d6bdoy{background-color:transparent}.button.quiet.svelte-d6bdoy{padding:0 var(--fds-spacing-2);background-color:transparent}.button.onlyIcon.svelte-d6bdoy{padding:calc(\r\n      (var(--fdsc-button-size) - var(--fdsc-icon-size)) / 2 -\r\n        var(--fds-border_width-default)\r\n    )}@media(hover: hover) and (pointer: fine){.button.filled.first.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{background:var(--fds-semantic-surface-action-first-hover)}.button.filled.second.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{background:#1a466d}.button.filled.success.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{background:var(--fds-semantic-surface-success-hover)}.button.filled.danger.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{background:var(--fds-semantic-surface-danger-hover)}.button.filled.inverted.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-default);background:var(--fds-semantic-surface-on_inverted-hover)}.button.outline.first.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-first-hover);border-color:var(--fds-semantic-border-action-first-hover);background:var(--fds-semantic-surface-action-first-no_fill-hover)}.button.outline.second.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{border-color:var(--fds-semantic-border-action-second-hover);background:#e5eaef}.button.outline.success.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(--fds-semantic-text-success-hover);border-color:var(--fds-semantic-border-success-hover);background:var(--fds-semantic-surface-success-no_fill-hover)}.button.outline.danger.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(--fds-semantic-text-danger-hover);border-color:var(--fds-semantic-border-danger-hover);background:var(--fds-semantic-surface-danger-no_fill-hover)}.button.outline.inverted.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{background:var(--fds-semantic-surface-on_inverted-no_fill-hover)}.button.quiet.first.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(\r\n        --fds-semantic-text-action-first-on_action\r\n      );background:var(--fds-semantic-surface-action-first-hover)}.button.quiet.second.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(\r\n        --fds-semantic-text-action-first-on_action\r\n      );background:var(--fds-semantic-surface-action-second-default)}.button.quiet.success.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(--fds-semantic-text-success-hover);background:var(--fds-semantic-surface-success-no_fill-hover)}.button.quiet.danger.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(--fds-semantic-text-danger-hover);background:var(--fds-semantic-surface-danger-no_fill-hover)}.button.quiet.inverted.svelte-d6bdoy:not([aria-disabled='true'], :disabled):hover{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-on_inverted);background:var(--fds-semantic-surface-on_inverted-no_fill-hover)}}.button.filled.first.svelte-d6bdoy{background:var(--fds-semantic-surface-action-first-default)}.button.filled.first.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{background:var(--fds-semantic-surface-action-first-active)}.button.filled.second.svelte-d6bdoy{background:var(--fds-semantic-surface-action-second-default)}.button.filled.second.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{background:#335a7d}.button.filled.success.svelte-d6bdoy{background:var(--fds-semantic-surface-success-default)}.button.filled.success.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{background:var(--fds-semantic-surface-success-active)}.button.filled.danger.svelte-d6bdoy{background:var(--fds-semantic-surface-danger-default)}.button.filled.danger.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{background:var(--fds-semantic-surface-danger-active)}.button.filled.inverted.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-default);background:var(--fds-semantic-surface-on_inverted-default)}.button.filled.inverted.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-default);background:var(--fds-semantic-surface-on_inverted-active)}.button.outline.first.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-first-default);border-color:var(--fds-semantic-border-action-first-default);background:var(--fds-semantic-surface-action-first-no_fill)}.button.outline.first.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-first-active);border-color:var(--fds-semantic-border-action-first-active);background:var(--fds-semantic-surface-action-first-no_fill-active)}.button.outline.second.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-second-default);border-color:var(--fds-semantic-border-action-second-default);background:var(--fds-semantic-surface-action-second-no_fill)}.button.outline.second.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-second-active);border-color:var(--fds-semantic-border-action-second-active);background:#ccd6df}.button.outline.success.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-success-default);border-color:var(--fds-semantic-border-success-default);background:var(--fds-semantic-surface-success-no_fill)}.button.outline.success.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-success-active);border-color:var(--fds-semantic-border-success-active);background:var(--fds-semantic-surface-success-no_fill-active)}.button.outline.danger.svelte-d6bdoy{--fdsc-font-and-icon-color:var(\r\n      --fds-semantic-border-danger-default,\r\n      #e02e49\r\n    );border-color:var(--fds-semantic-border-danger-default);background:var(--fds-semantic-surface-danger-no_fill)}.button.outline.danger.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-danger-active);border-color:var(--fds-semantic-border-danger-active);background:var(--fds-semantic-surface-danger-no_fill-active)}.button.outline.inverted.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-on_inverted);border:1px solid var(--fds-semantic-border-on_inverted-default);background:transparent}.button.outline.inverted.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-on_inverted);background:var(--fds-semantic-surface-on_inverted-no_fill-active)}.button.quiet.first.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-first-default)}.button.quiet.first.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-first-active);background:var(--fds-semantic-surface-action-first-no_fill-active)}.button.quiet.second.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-second-default)}.button.quiet.second.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-action-second-active);background:#ccd6df}.button.quiet.success.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-success-default)}.button.quiet.success.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-success-active);background:var(--fds-semantic-surface-success-no_fill-active)}.button.quiet.danger.svelte-d6bdoy{--fdsc-font-and-icon-color:var(\r\n      --fds-semantic-border-danger-default,\r\n      #e02e49\r\n    )}.button.quiet.danger.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-danger-active);background:var(--fds-semantic-surface-danger-no_fill-active)}.button.quiet.inverted.svelte-d6bdoy{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-on_inverted);background:transparent}.button.quiet.inverted.svelte-d6bdoy:not([aria-disabled='true'], :disabled):active{--fdsc-font-and-icon-color:var(--fds-semantic-text-neutral-on_inverted);background:var(--fds-semantic-surface-on_inverted-no_fill-active)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "color", "size", "fullWidth", "dashedBorder", "iconPlacement"]);
  let $$slots = compute_slots(slots);
  let { variant = "filled" } = $$props;
  let { color = "first" } = $$props;
  let { size = "medium" } = $$props;
  let { fullWidth = false } = $$props;
  let { dashedBorder = false } = $$props;
  let { iconPlacement = "left" } = $$props;
  const computedClass = `button ${size} ${variant} ${color} ${fullWidth ? "full-width" : ""} ${dashedBorder ? "dashed-border" : ""} ${$$slots.icon !== void 0 ? "only-icon" : ""} ${$$props.class || ""}`;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.dashedBorder === void 0 && $$bindings.dashedBorder && dashedBorder !== void 0)
    $$bindings.dashedBorder(dashedBorder);
  if ($$props.iconPlacement === void 0 && $$bindings.iconPlacement && iconPlacement !== void 0)
    $$bindings.iconPlacement(iconPlacement);
  $$result.css.add(css$s);
  return `<button${spread(
    [
      {
        class: escape_attribute_value(computedClass)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-d6bdoy" }
  )}>${iconPlacement === "left" ? `${slots.icon ? slots.icon({}) : ``}` : ``} ${slots.default ? slots.default({}) : ``} ${iconPlacement === "right" ? `${slots.icon ? slots.icon({}) : ``}` : ``} </button>`;
});
const Switch_svelte_svelte_type_style_lang = "";
const css$r = {
  code: ".wrapper.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{display:grid;align-items:center;width:fit-content;min-height:44px;gap:0 var(--fds-spacing-2);grid-template-columns:auto 1fr;grid-template-areas:'input label'\r\n      '. description'}.switch.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{--fds-inner-focus-border-color:var(--fds-semantic-border-focus-boxshadow);--fds-outer-focus-border-color:var(--fds-semantic-border-focus-outline);--fds-focus-border-width:3px;--fds-transition:200ms;min-width:44px;min-height:44px;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto 1fr}.input.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{min-width:54px;min-height:32px;width:100%;opacity:0;grid-area:input;cursor:pointer}@media(prefers-reduced-motion){.container.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{--fds-transition:0}}.paragraph.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{--fdsc-typography-font-family:inherit;--fdsc-bottom-spacing:var(--fds-spacing-5);color:var(--fds-semantic-text-neutral-default);margin:0}.paragraph.large.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{--fdsc-bottom-spacing:var(--fds-spacing-6);font:var(--fds-typography-paragraph-large);font-family:var(--fdsc-typography-font-family)}.paragraph.medium.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{--fdsc-bottom-spacing:var(--fds-spacing-5);font:var(--fds-typography-paragraph-medium);font-family:var(--fdsc-typography-font-family)}.paragraph.small.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{--fdsc-bottom-spacing:var(--fds-spacing-4);font:var(--fds-typography-paragraph-small);font-family:var(--fdsc-typography-font-family)}.right.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{grid-template-columns:1fr auto;grid-template-rows:1fr auto;grid-template-areas:'label input'\r\n      'description .'}.icon.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{grid-area:input;pointer-events:none;height:1.75em;width:auto;margin:auto;overflow:visible;border-radius:16px;--fds-transition:200ms}.label.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{grid-area:label;min-width:min-content;display:inline-flex;flex-direction:row;gap:var(--fds-spacing-1);cursor:pointer}.description.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{grid-area:description;padding-left:3px;margin-top:calc(var(--fds-spacing-2) * -1);color:var(--fds-semantic-text-neutral-subtle)}.readonly.svelte-14kast6>.input.svelte-14kast6.svelte-14kast6.svelte-14kast6,.readonly.svelte-14kast6>.label.svelte-14kast6.svelte-14kast6.svelte-14kast6{cursor:default}.disabled.svelte-14kast6>.input.svelte-14kast6.svelte-14kast6.svelte-14kast6,.disabled.svelte-14kast6>.label.svelte-14kast6.svelte-14kast6.svelte-14kast6,.disabled.svelte-14kast6>.description.svelte-14kast6.svelte-14kast6.svelte-14kast6{color:var(--fds-semantic-border-neutral-subtle)}.disabled.svelte-14kast6>.input.svelte-14kast6.svelte-14kast6.svelte-14kast6,.disabled.svelte-14kast6>.label.svelte-14kast6.svelte-14kast6.svelte-14kast6{cursor:not-allowed}.icon.svelte-14kast6>.track.svelte-14kast6.svelte-14kast6.svelte-14kast6{transition:color var(--fds-transition) ease;color:var(--fds-semantic-surface-neutral-dark)}.icon.svelte-14kast6>.thumb.svelte-14kast6.svelte-14kast6.svelte-14kast6{transition:transform var(--fds-transition) ease;color:var(--fds-semantic-background-default)}.icon.svelte-14kast6>.thumb.svelte-14kast6>.checkmark.svelte-14kast6.svelte-14kast6{opacity:0;transition:opacity var(--fds-transition) ease-in-out;transform:translate(6px, 6px)}.input.svelte-14kast6:disabled~.icon.svelte-14kast6>.track.svelte-14kast6.svelte-14kast6{color:var(--fds-semantic-border-neutral-subtle)}.input.svelte-14kast6:not([readonly], :disabled):checked~.icon.svelte-14kast6>.track.svelte-14kast6.svelte-14kast6,.input.svelte-14kast6:not([readonly], :disabled):checked~.icon.svelte-14kast6>.thumb.svelte-14kast6>.checkmark.svelte-14kast6{opacity:1;color:var(--fds-semantic-surface-success-default)}.input.svelte-14kast6:checked~.icon.svelte-14kast6>.thumb.svelte-14kast6.svelte-14kast6{transform:translateX(22px)}@media(hover: hover) and (pointer: fine){.input.svelte-14kast6:not([readonly], :disabled):hover~.icon.svelte-14kast6>.thumb.svelte-14kast6.svelte-14kast6{transform:translateX(4px)}.input.svelte-14kast6:not([readonly], :disabled):hover~.label.svelte-14kast6.svelte-14kast6.svelte-14kast6{color:var(--fds-semantic-border-input-hover)}.input.svelte-14kast6:not(:disabled, [readonly]):checked:hover~.icon.svelte-14kast6>.thumb.svelte-14kast6.svelte-14kast6{transform:translateX(17px)}.input.svelte-14kast6:not(:checked, :disabled, [readonly]):hover~.icon.svelte-14kast6>.track.svelte-14kast6.svelte-14kast6{color:var(--fds-semantic-surface-neutral-dark-hover)}.input.svelte-14kast6:not(:disabled, [readonly]):checked:hover~.icon.svelte-14kast6>.track.svelte-14kast6.svelte-14kast6,.input.svelte-14kast6:not(:disabled, [readonly]):checked:hover~.icon.svelte-14kast6>.thumb.svelte-14kast6>.checkmark.svelte-14kast6{color:var(--fds-semantic-surface-success-hover)}}.readonly.svelte-14kast6 .input[readonly].svelte-14kast6~.icon.svelte-14kast6>.track.svelte-14kast6{stroke:var(--fds-semantic-border-neutral-subtle);color:var(--fds-semantic-background-subtle)}.readonly.svelte-14kast6 .input[readonly]:checked~.icon .thumb.svelte-14kast6>.checkmark.svelte-14kast6.svelte-14kast6{opacity:1;color:var(--fds-semantic-background-subtle)}.readonly.svelte-14kast6 .input[readonly]~.icon .thumb.svelte-14kast6.svelte-14kast6.svelte-14kast6{color:var(--fds-semantic-border-neutral-default)}.input.svelte-14kast6:focus-visible:not(:disabled)~.icon.svelte-14kast6.svelte-14kast6.svelte-14kast6{outline:var(--fds-focus-border-width) solid\r\n      var(--fds-outer-focus-border-color);outline-offset:0}.input.svelte-14kast6:focus-visible:not(:disabled)~.icon .track.svelte-14kast6.svelte-14kast6.svelte-14kast6{stroke:var(--fds-inner-focus-border-color);stroke-width:var(--fds-focus-border-width)}.padlock-icon.svelte-14kast6.svelte-14kast6.svelte-14kast6.svelte-14kast6{grid-area:label;position:relative;top:3px;scale:1.4}",
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedClass;
  let labelClass;
  let descriptionClass;
  let $$slots = compute_slots(slots);
  let { value = "" } = $$props;
  let { position = "left" } = $$props;
  let { disabled = false } = $$props;
  let { readOnly = false } = $$props;
  let { description = "" } = $$props;
  let { size = "medium" } = $$props;
  let { id = "" } = $$props;
  let { checked = false } = $$props;
  createEventDispatcher();
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$r);
  computedClass = `wrapper paragraph ${size} ${position === "right" ? "right" : ""} ${disabled ? "disabled" : ""} ${readOnly ? "readonly" : ""} ${$$props.class || ""}`;
  labelClass = `label ${size}`;
  descriptionClass = `paragraph description ${size}`;
  return `<div class="${escape(null_to_empty(computedClass), true) + " svelte-14kast6"}"><input class="input svelte-14kast6"${add_attribute("id", id, 0)}${add_attribute("value", value, 0)} type="checkbox" ${readOnly ? "readonly" : ""} ${disabled ? "disabled" : ""}${add_attribute("checked", checked, 1)}> <svg class="icon svelte-14kast6" width="54" height="32" viewBox="0 0 56 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="track svelte-14kast6" x="1" y="1" width="54" height="32" rx="16" stroke="currentcolor" fill="currentcolor"></rect><g class="thumb svelte-14kast6"><circle cx="17" cy="17" r="14" fill="currentcolor"></circle><path class="checkmark svelte-14kast6" d="M18.1958 5.63756C18.8792 6.32098 18.8792 7.42902 18.1958 8.11244L10.4041 15.9041C9.72068 16.5875 8.61264 16.5875 7.92922 15.9041L3.80422 11.7791C3.1208 11.0957 3.1208 9.98765 3.80422 9.30423C4.48764 8.62081 5.59568 8.62081 6.27909 9.30423L9.16666 12.1918L15.7209 5.63756C16.4043 4.95415 17.5123 4.95415 18.1958 5.63756Z" fill="currentcolor"></path></g></svg> ${$$slots.default ? `<label class="${escape(null_to_empty(labelClass), true) + " svelte-14kast6"}"${add_attribute("for", id, 0)}>${readOnly ? `<span aria-hidden class="padlock-icon svelte-14kast6" data-svelte-h="svelte-fgblik"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z" fill="currentColor"></path></svg></span>` : ``} ${slots.default ? slots.default({}) : ``}</label>` : ``} ${description ? `<div id="${"description-" + escape(id, true)}" class="${escape(null_to_empty(descriptionClass), true) + " svelte-14kast6"}">${escape(description)}</div>` : ``} </div>`;
});
const Radio_svelte_svelte_type_style_lang = "";
const css$q = {
  code: ".container.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{position:relative;min-width:2.75rem;min-height:2.75rem}.control-xsmall.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{margin-left:-0.7rem}.control-small.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{margin-left:-0.6rem}.control-medium.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{margin-left:-0.45rem}.control-large.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{margin-left:-0.2rem}.spacing-xsmall.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{padding-left:calc(var(--fds-spacing-6) + 0.15rem)}.spacing-small.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{padding-left:calc(var(--fds-spacing-6) + 0.3rem)}.spacing-medium.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{padding-left:calc(var(--fds-spacing-6) + 1.0625rem)}.spacing-large.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{padding-left:calc(var(--fds-spacing-6) + 1.4rem)}.icon.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{grid-area:input;pointer-events:none;height:1.75rem;width:1.75rem;margin:auto;overflow:visible}.label.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{padding-left:1.1875rem;margin-left:-1rem;min-height:2.75rem;min-width:min-content;display:inline-flex;flex-direction:row;gap:var(--fds-spacing-1);align-items:center;cursor:pointer}.description.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{padding-left:0.1875rem;margin-top:calc(var(--fds-spacing-2) * -1);color:var(--fds-semantic-text-neutral-subtle, #4b5563)}.control.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{--fds-inner-focus-border-color:var(--fds-semantic-border-focus-boxshadow);--fds-outer-focus-border-color:var(--fds-semantic-border-focus-outline);--fds-focus-border-width:3px;position:absolute;left:0;top:0;min-width:2.75rem;min-height:2.75rem;display:inline-grid;grid:[input] 1fr / [input] 1fr;gap:var(--fds-spacing-2);grid-auto-flow:column}.radio.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1,.radio.svelte-1xc6nw1 .icon.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{border-radius:var(--fds-border_radius-full)}.input.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{height:100%;width:100%;opacity:0;margin:0;grid-area:input;cursor:pointer}.readonly.svelte-1xc6nw1>.control.svelte-1xc6nw1>.input.svelte-1xc6nw1.svelte-1xc6nw1,.readonly.svelte-1xc6nw1>.label.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{cursor:default}.disabled.svelte-1xc6nw1>.control .input.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1,.disabled.svelte-1xc6nw1>.label.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{cursor:not-allowed;color:var(--semantic-border-neutral-subtle, #cfd1cf)}.disabled.svelte-1xc6nw1>.description.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{color:var(--semantic-border-neutral-subtle, #cfd1cf)}.input.svelte-1xc6nw1:not(:checked)~.icon .checked.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{display:none}.input.svelte-1xc6nw1:checked~.icon .checked.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{display:inline;fill:var(--fds-semantic-surface-first-active, #21365e)}.input.svelte-1xc6nw1:not(:checked)~.icon .box.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{stroke:var(--fds-semantic-border-first-default, #00244e)}.input.svelte-1xc6nw1:checked~.icon .box.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{stroke:var(--fds-semantic-border-first-default, #00244e)}.input.svelte-1xc6nw1:disabled~.icon .box.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{stroke:var(--fds-semantic-border-neutral-subtle, #cfd1cf)}.input.svelte-1xc6nw1:focus-visible~.icon.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{outline:var(--fds-focus-border-width) solid\r\n      var(--fds-semantic-border-focus-outline, #ffda06);outline-offset:0}.input.svelte-1xc6nw1:focus-visible~.icon .box.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{stroke:var(--fds-semantic-border-focus-boxshadow, #1e2b3c);stroke-width:var(--fds-focus-border-width)}.input.svelte-1xc6nw1:disabled~.icon .checked.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{fill:var(--fds-semantic-border-neutral-default, #68707c)}.error.svelte-1xc6nw1 .input:not(:disabled, :focus-visible)~.icon .box.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{stroke:var(--fds-semantic-border-danger-default, #e02e49)}.error.svelte-1xc6nw1 .input:not(:disabled, :focus-visible)~.icon .checked.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{fill:var(--fds-semantic-border-danger-default, #e02e49)}.readonly.svelte-1xc6nw1 .input:read-only:not(:focus-visible)~.icon .box.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{stroke:var(--fds-semantic-border-neutral-subtle, #cfd1cf);fill:var(--fds-semantic-surface-neutral-subtle, #eff0ef)}.readonly.svelte-1xc6nw1 .input:read-only:not(:focus-visible):is(:checked)~.icon .checked.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{fill:var(--fds-semantic-border-neutral-default, #68707c)}@media(hover: hover) and (pointer: fine){.container.svelte-1xc6nw1:not(.disabled, .readonly)>.control.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1:hover,.container.svelte-1xc6nw1:not(.disabled, .readonly):has(.label:hover)>.control.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{background:var(--semantic-surface-action-first-subtle-hover, #c8cbdc)}.container.svelte-1xc6nw1:not(.disabled, .readonly)>.label.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1:hover,.container.svelte-1xc6nw1:not(.disabled, .readonly)>.control.svelte-1xc6nw1:hover~.label.svelte-1xc6nw1.svelte-1xc6nw1{color:var(--fds-semantic-text-action-first-hover, #3c4a71)}.container.svelte-1xc6nw1:not(.disabled, .readonly)>.control.svelte-1xc6nw1:hover>.icon.svelte-1xc6nw1>.box.svelte-1xc6nw1,.container.svelte-1xc6nw1:not(.disabled, .readonly):has(.label:hover)>.control.svelte-1xc6nw1>.icon.svelte-1xc6nw1>.box.svelte-1xc6nw1{stroke:var(--fds-semantic-border-input-hover, #4c76ba)}.font-xsmall.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{font-size:0.8125rem}.font-small.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{font-size:0.9375rem}.font-medium.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{font-size:1.125rem}.font-large.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{font-size:1.25rem}.icon-xsmall.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{height:1.375rem;width:1.375rem}.icon-small.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{height:1.6875em;width:1.6875em}.icon-medium.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{height:2rem;width:2rem}.icon-large.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1.svelte-1xc6nw1{height:2.3125rem;width:2.3125rem}}",
  map: null
};
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let sizeClasses;
  let containerClasses;
  let labelClasses;
  let descriptionClasses;
  let inputClasses;
  let $radioGroup, $$unsubscribe_radioGroup;
  let { description = "" } = $$props;
  let { disabled = void 0 } = $$props;
  let { readOnly = void 0 } = $$props;
  let { label } = $$props;
  let { value } = $$props;
  let size;
  let selectedValue;
  let groupUniqueId;
  let error;
  let groupDisabled = false;
  let groupReadOnly = false;
  const uniqueId = v4();
  const radioId = `radio-${uniqueId}`;
  const labelId = `label-${uniqueId}`;
  const descriptionId = `description-${uniqueId}`;
  const radioGroup = getContext("radioGroup");
  $$unsubscribe_radioGroup = subscribe(radioGroup, (value2) => $radioGroup = value2);
  const sizes = {
    xsmall: {
      iconSizeClass: "icon-xsmall",
      fontSizeClass: "font-xsmall",
      spacingClass: "spacing-xsmall",
      controlClass: "control-xsmall",
      paddingClass: "padding-xsmall"
    },
    small: {
      iconSizeClass: "icon-small",
      fontSizeClass: "font-small",
      spacingClass: "spacing-small",
      controlClass: "control-small",
      paddingClass: "padding-small"
    },
    medium: {
      iconSizeClass: "icon-medium",
      fontSizeClass: "font-medium",
      spacingClass: "spacing-medium",
      controlClass: "control-medium",
      paddingClass: "padding-medium"
    },
    large: {
      iconSizeClass: "icon-large",
      fontSizeClass: "font-large",
      spacingClass: "spacing-large",
      controlClass: "control-large",
      paddingClass: "padding-large"
    }
  };
  function getSizeClasses(size2) {
    return sizes[size2] || sizes.medium;
  }
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$q);
  {
    if ($radioGroup) {
      size = $radioGroup.size;
      groupDisabled = $radioGroup.disabled;
      groupReadOnly = $radioGroup.readOnly;
      groupUniqueId = $radioGroup.uniqueId;
      selectedValue = $radioGroup.value;
      error = $radioGroup.error;
    }
  }
  checked = value === selectedValue;
  sizeClasses = getSizeClasses(size);
  containerClasses = `container ${sizeClasses.spacingClass} ${disabled || groupDisabled ? "disabled" : ""} ${error ? "error" : ""} ${readOnly || groupReadOnly ? "readonly" : ""} ${$$props.class || ""}`;
  labelClasses = `label ${readOnly || groupReadOnly ? "readonly" : ""} 
                            ${disabled || groupDisabled ? "disabled" : ""}
                            ${sizeClasses.paddingClass}`;
  descriptionClasses = `description ${sizeClasses.fontSizeClass}`;
  inputClasses = `input ${readOnly || groupReadOnly ? "readonly" : ""} 
                            ${disabled || groupDisabled ? "disabled" : ""}`;
  $$unsubscribe_radioGroup();
  return `<div class="${escape(null_to_empty(`${containerClasses} ${sizeClasses.fontSizeClass}`), true) + " svelte-1xc6nw1"}" tabindex="-1" role="radio"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelId, 0)}${add_attribute("id", radioId, 0)}><span class="${escape(null_to_empty(`control radio ${sizeClasses.controlClass}`), true) + " svelte-1xc6nw1"}"><input class="${escape(null_to_empty(inputClasses), true) + " svelte-1xc6nw1"}" type="radio"${add_attribute("id", labelId, 0)}${add_attribute("value", value, 0)}${add_attribute("name", `radio-${groupUniqueId}`, 0)} ${disabled || readOnly || groupDisabled || groupReadOnly ? "disabled" : ""}${value === selectedValue ? add_attribute("checked", true, 1) : ""}> <svg class="${"icon " + escape(sizeClasses.iconSizeClass, true) + " svelte-1xc6nw1"}" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle class="box svelte-1xc6nw1" name="circle" cx="11" cy="11" r="10" fill="white" stroke="#00315D" stroke-width="2"></circle><circle class="checked svelte-1xc6nw1" name="checked" cx="11" cy="11" r="4.88889" fill="#0062BA"></circle></svg></span> <label${add_attribute("for", labelId, 0)} class="${escape(null_to_empty(labelClasses), true) + " svelte-1xc6nw1"}"><span class="${escape(null_to_empty(sizeClasses.fontSizeClass), true) + " svelte-1xc6nw1"}">${escape(label)}</span></label> ${description ? `<p${add_attribute("id", descriptionId, 0)} class="${escape(null_to_empty(descriptionClasses), true) + " svelte-1xc6nw1"}">${escape(description)}</p>` : ``} </div>`;
});
const RadioGroup_svelte_svelte_type_style_lang = "";
const css$p = {
  code: ".radio-group-inline.svelte-1y2a5bz{display:flex;align-items:flex-start;gap:1.25rem}.font-xsmall.svelte-1y2a5bz{font-size:0.8125rem}.font-small.svelte-1y2a5bz{font-size:0.9375rem}.font-medium.svelte-1y2a5bz{font-size:1.125rem}.font-large.svelte-1y2a5bz{font-size:1.25rem}.error.svelte-1y2a5bz{color:var(--fds-semantic-border-danger-default, #e02e49)}.visually-hidden.svelte-1y2a5bz{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:0.0625rem}.legend-wrapper.svelte-1y2a5bz{display:flex;align-items:center;gap:0.5rem}fieldset.svelte-1y2a5bz{border:none;margin:0;padding:0;display:block}legend.svelte-1y2a5bz{font-weight:500;padding:0;margin:0;display:table;max-width:100%;white-space:normal;color:inherit;font-size:inherit;line-height:inherit;align-self:flex-start}p.svelte-1y2a5bz{margin-top:0.25rem;margin-bottom:0.25rem;font-weight:400;color:var(--fds-semantic-text-neutral-subtle)}.radio-buttons-xsmall.svelte-1y2a5bz{margin-top:var(--fds-spacing-1, 0.84375rem)}.radio-buttons-small.svelte-1y2a5bz{margin-top:var(--fds-spacing-2, 0.84375rem)}.radio-buttons-medium.svelte-1y2a5bz{margin-top:var(--fds-spacing-3, 0.84375rem)}.radio-buttons-large.svelte-1y2a5bz{margin-top:var(--fds-spacing-4, 0.84375rem)}.padlock-icon.svelte-1y2a5bz{grid-area:label;position:relative;top:1px;scale:1.4}",
  map: null
};
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let radioGroupClasses;
  let legendWrapperClasses;
  let legendClasses;
  let descriptionClasses;
  let errorClasses;
  let { legend = "" } = $$props;
  let { description = "" } = $$props;
  let { readOnly = false } = $$props;
  let { disabled = false } = $$props;
  let { error = "" } = $$props;
  let { value } = $$props;
  let { defaultValue = "" } = $$props;
  let { required = false } = $$props;
  let { inline = false } = $$props;
  let { size = "medium" } = $$props;
  let { hideLegend = false } = $$props;
  const uniqueId = v4();
  if (value === void 0 || value === "")
    value = defaultValue;
  let fontSizeClass;
  let radioButtonsClass;
  switch (size) {
    case "xsmall":
      fontSizeClass = "font-xsmall";
      radioButtonsClass = "radio-buttons-xsmall";
      break;
    case "small":
      fontSizeClass = "font-small";
      radioButtonsClass = "radio-buttons-small";
      break;
    case "medium":
      fontSizeClass = "font-medium";
      radioButtonsClass = "radio-buttons-medium";
      break;
    case "large":
      fontSizeClass = "font-large";
      radioButtonsClass = "radio-buttons-large";
      break;
    default:
      fontSizeClass = "font-medium";
      radioButtonsClass = "radio-buttons-medium";
      break;
  }
  const radioGroup = writable({
    readOnly,
    disabled,
    size,
    value,
    error,
    uniqueId,
    required
  });
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.hideLegend === void 0 && $$bindings.hideLegend && hideLegend !== void 0)
    $$bindings.hideLegend(hideLegend);
  $$result.css.add(css$p);
  radioGroupClasses = `radio-group ${readOnly ? "readonly" : ""} ${size}`;
  legendWrapperClasses = `legend-wrapper ${hideLegend ? "visually-hidden" : ""}`;
  legendClasses = `legend ${fontSizeClass}`;
  descriptionClasses = `description ${fontSizeClass}  ${hideLegend ? "visually-hidden" : ""}`;
  errorClasses = `error ${fontSizeClass}`;
  {
    setContext("radioGroup", radioGroup);
  }
  {
    {
      radioGroup.update((storeValue) => ({
        ...storeValue,
        readOnly,
        disabled,
        size,
        error,
        value,
        required
      }));
    }
  }
  return `<fieldset class="${escape(null_to_empty(radioGroupClasses), true) + " svelte-1y2a5bz"}"${add_attribute("id", `group-${uniqueId}`, 0)}${add_attribute("aria-labelledby", `label-${uniqueId}`, 0)}>${legend ? `<div class="${escape(null_to_empty(`${legendWrapperClasses}`), true) + " svelte-1y2a5bz"}">${readOnly ? `<span aria-hidden class="padlock-icon svelte-1y2a5bz" data-svelte-h="svelte-fgblik"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z" fill="currentColor"></path></svg></span>` : ``} <legend class="${escape(null_to_empty(legendClasses), true) + " svelte-1y2a5bz"}"${add_attribute("id", `label-${uniqueId}`, 0)}>${escape(legend)}</legend></div>` : ``} ${description ? `<p class="${escape(null_to_empty(descriptionClasses), true) + " svelte-1y2a5bz"}">${escape(description)}</p>` : ``} <div class="${escape(null_to_empty(radioButtonsClass), true) + " svelte-1y2a5bz"}"><div class="${escape(null_to_empty(inline ? "radio-group-inline" : ""), true) + " svelte-1y2a5bz"}">${slots.default ? slots.default({}) : ``}</div></div> ${error ? `<p class="${escape(null_to_empty(errorClasses), true) + " svelte-1y2a5bz"}">${escape(error)}</p>` : ``} </fieldset>`;
});
const CharacterCounter_svelte_svelte_type_style_lang = "";
const css$o = {
  code: ".error.svelte-yupke2{color:var(--fds-semantic-border-danger-default, #e02e49)}.visuallyHidden.svelte-yupke2{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px)}.font-xsmall.svelte-yupke2{font-size:0.8125rem}.font-small.svelte-yupke2{font-size:0.9375rem}.font-medium.svelte-yupke2{font-size:1.125rem}.font-large.svelte-yupke2{font-size:1.25rem}",
  map: null
};
function defaultLabel(count) {
  return count > -1 ? `${count} tegn igjen` : `${Math.abs(count)} tegn for mye`;
}
function defaultSrLabel(maxCount) {
  return `Tekstfelt med plass til ${maxCount} tegn`;
}
const CharacterCounter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentCount;
  let hasExceededLimit;
  let finalSrLabel;
  let { label = defaultLabel } = $$props;
  let { srLabel = "" } = $$props;
  let { maxCount } = $$props;
  let { value } = $$props;
  let { id } = $$props;
  let { size = "medium" } = $$props;
  let fontSizeClass;
  switch (size) {
    case "xsmall":
      fontSizeClass = "font-xsmall";
      break;
    case "small":
      fontSizeClass = "font-small";
      break;
    case "medium":
      fontSizeClass = "font-medium";
      break;
    case "large":
      fontSizeClass = "font-large";
      break;
    default:
      fontSizeClass = "font-medium";
      break;
  }
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.srLabel === void 0 && $$bindings.srLabel && srLabel !== void 0)
    $$bindings.srLabel(srLabel);
  if ($$props.maxCount === void 0 && $$bindings.maxCount && maxCount !== void 0)
    $$bindings.maxCount(maxCount);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$o);
  currentCount = maxCount - value.length;
  hasExceededLimit = value.length > maxCount;
  finalSrLabel = srLabel || defaultSrLabel(maxCount);
  return `<span class="${escape(null_to_empty(`visuallyHidden ${fontSizeClass}`), true) + " svelte-yupke2"}"${add_attribute("id", id, 0)}>${escape(finalSrLabel)}</span> <span class="${escape(null_to_empty(`${hasExceededLimit ? "error" : ""} ${fontSizeClass}`), true) + " svelte-yupke2"}"${add_attribute("aria-live", hasExceededLimit ? "polite" : "off", 0)}>${escape(label ? label(currentCount) : defaultLabel(currentCount))} </span>`;
});
const Textfield_svelte_svelte_type_style_lang = "";
const css$n = {
  code: ".formField.svelte-1n2innw.svelte-1n2innw{display:grid;gap:var(--fds-spacing-2)}.adornment.svelte-1n2innw.svelte-1n2innw{color:var(--fds-semantic-border-neutral-default);background:var(--fds-semantic-surface-neutral-subtle);padding:var(--fds-spacing-3);border-radius:var(--fds-border_radius-medium);border:solid 1px var(--fds-semantic-border-neutral-default);box-sizing:border-box;display:inline-block}.label.svelte-1n2innw.svelte-1n2innw{min-width:min-content;display:inline-flex;flex-direction:row;gap:var(--fds-spacing-1);align-items:center;margin-bottom:var(--fds-spacing-3);font-weight:600;line-height:130%}.description.svelte-1n2innw.svelte-1n2innw{color:var(--fds-semantic-text-neutral-subtle);margin-top:calc(var(--fds-spacing-2) * -1);margin-bottom:var(--fds-spacing-2)}.input.svelte-1n2innw.svelte-1n2innw{font:inherit;position:relative;box-sizing:border-box;flex:0 1 auto;min-height:2.5em;width:100%;appearance:none;padding:0 var(--fds-spacing-3);border:solid 1px var(--fds-semantic-border-action-dark);border-radius:var(--fds-border_radius-medium)}.input.xsmall.svelte-1n2innw.svelte-1n2innw,.input.small.svelte-1n2innw.svelte-1n2innw{padding:0 var(--fds-spacing-2)}.input.medium.svelte-1n2innw.svelte-1n2innw{padding:0 var(--fds-spacing-3)}.input.large.svelte-1n2innw.svelte-1n2innw{padding:0 var(--fds-spacing-4)}.disabled.svelte-1n2innw.svelte-1n2innw{opacity:0.3}.disabled.svelte-1n2innw .input.svelte-1n2innw{cursor:not-allowed}.readonly.svelte-1n2innw .input.svelte-1n2innw{background:var(--fds-semantic-surface-neutral-subtle);border-color:var(--fds-semantic-border-neutral-default);outline:none;cursor:not-allowed}.error.svelte-1n2innw>.input.svelte-1n2innw:not(:focus-visible){border-color:var(--fds-semantic-border-danger-default, #e02e49);box-shadow:inset 0 0 0 1px\r\n      var(--fds-semantic-border-danger-default, #e02e49)}@media(hover: hover) and (pointer: fine){.input.svelte-1n2innw.svelte-1n2innw:not(:focus-visible, :disabled, :read-only):hover{box-shadow:inset 0 0 0 1px var(--fds-semantic-border-action-hover);border-color:var(--fds-semantic-border-action-hover)}}.inputPrefix.svelte-1n2innw.svelte-1n2innw{border-top-left-radius:0;border-bottom-left-radius:0}.inputSuffix.svelte-1n2innw.svelte-1n2innw{border-top-right-radius:0;border-bottom-right-radius:0}.prefix.svelte-1n2innw.svelte-1n2innw{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.suffix.svelte-1n2innw.svelte-1n2innw{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.field.svelte-1n2innw.svelte-1n2innw{display:flex;align-items:stretch;border-radius:var(--fds-border_radius-medium)}.field.svelte-1n2innw>.svelte-1n2innw:first-child{border-top-left-radius:var(--fds-border_radius-medium);border-bottom-left-radius:var(--fds-border_radius-medium)}.field.svelte-1n2innw>.svelte-1n2innw:last-child{border-top-right-radius:var(--fds-border_radius-medium);border-bottom-right-radius:var(--fds-border_radius-medium)}.errorMessage.svelte-1n2innw.svelte-1n2innw:empty{display:none}.error-message.svelte-1n2innw.svelte-1n2innw{margin:var(--fds-spacing-1, 4.5px) 0;color:var(--fds-semantic-border-danger-default, #e02e49)}.font-xsmall.svelte-1n2innw.svelte-1n2innw{font-size:0.8125rem}.font-small.svelte-1n2innw.svelte-1n2innw{font-size:0.9375rem}.font-medium.svelte-1n2innw.svelte-1n2innw{font-size:1.125rem}.font-large.svelte-1n2innw.svelte-1n2innw{font-size:1.25rem}.visually-hidden.svelte-1n2innw.svelte-1n2innw{display:none;visibility:hidden}.padlock-icon.svelte-1n2innw.svelte-1n2innw{grid-area:label;position:relative;top:1px;scale:1.4}",
  map: null
};
const Textfield = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldClasses;
  let $$restProps = compute_rest_props($$props, [
    "label",
    "description",
    "size",
    "type",
    "hideLabel",
    "readOnly",
    "disabled",
    "value",
    "error",
    "prefix",
    "suffix",
    "characterLimit",
    "characterLimitLabel"
  ]);
  let { label = "" } = $$props;
  let { description = "" } = $$props;
  let { size = "medium" } = $$props;
  let { type = "text" } = $$props;
  let { hideLabel = false } = $$props;
  let { readOnly = false } = $$props;
  let { disabled = false } = $$props;
  let { value } = $$props;
  let { error = "" } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { characterLimit = null } = $$props;
  let { characterLimitLabel = null } = $$props;
  let componentId = v4();
  let fontSizeClass;
  switch (size) {
    case "xsmall":
    case "small":
    case "medium":
    case "large":
      fontSizeClass = `font-${size}`;
      break;
    default:
      fontSizeClass = "font-medium";
      break;
  }
  let formFieldClasses = `form-field ${size} ${disabled ? "disabled" : ""} ${readOnly ? "readonly" : ""} ${$$props.class || ""} ${fontSizeClass}`;
  let labelClasses = `label ${hideLabel ? "visually-hidden" : ""}`;
  let descriptionClasses = `description ${hideLabel ? "visually-hidden" : ""} ${fontSizeClass}`;
  let inputClasses = `input ${size} ${prefix ? "input-prefix" : ""} ${suffix ? "input-suffix" : ""}`;
  let errorMessageClasses = `error-message ${fontSizeClass}`;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.characterLimit === void 0 && $$bindings.characterLimit && characterLimit !== void 0)
    $$bindings.characterLimit(characterLimit);
  if ($$props.characterLimitLabel === void 0 && $$bindings.characterLimitLabel && characterLimitLabel !== void 0)
    $$bindings.characterLimitLabel(characterLimitLabel);
  $$result.css.add(css$n);
  fieldClasses = `field ${error ? "error" : ""}`;
  return `<div class="${escape(null_to_empty(formFieldClasses), true) + " svelte-1n2innw"}">${label ? `<label${add_attribute("for", `input-field-${componentId}`, 0)} class="${escape(null_to_empty(labelClasses), true) + " svelte-1n2innw"}">${readOnly ? `<span aria-hidden class="padlock-icon svelte-1n2innw" data-svelte-h="svelte-fgblik"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z" fill="currentColor"></path></svg></span>` : ``} ${escape(label)}</label>` : ``} ${description ? `<p id="description" class="${escape(null_to_empty(descriptionClasses), true) + " svelte-1n2innw"}">${escape(description)}</p>` : ``} <div class="${escape(null_to_empty(fieldClasses), true) + " svelte-1n2innw"}">${prefix ? `<div class="adornment prefix svelte-1n2innw" aria-hidden="true">${escape(prefix)}</div>` : ``} <input${spread(
    [
      {
        class: escape_attribute_value(inputClasses)
      },
      {
        id: escape_attribute_value(`input-field-${componentId}`)
      },
      escape_object({ type }),
      { "aria-describedby": "description" },
      { readonly: readOnly || null },
      { disabled: disabled || null },
      escape_object($$restProps)
    ],
    { classes: "svelte-1n2innw" }
  )}${add_attribute("value", value, 0)}> ${suffix ? `<div class="adornment suffix svelte-1n2innw" aria-hidden="true">${escape(suffix)}</div>` : ``}</div> ${characterLimit ? `${validate_component(CharacterCounter, "CharacterCounter").$$render(
    $$result,
    {
      maxCount: characterLimit,
      value,
      id: `character-counter-${componentId}`,
      size,
      label: characterLimitLabel
    },
    {},
    {}
  )}` : ``} ${error ? `<div class="${escape(null_to_empty(errorMessageClasses), true) + " svelte-1n2innw"}" aria-live="polite">${escape(error)}</div>` : ``} </div>`;
});
const Checkbox_svelte_svelte_type_style_lang = "";
const css$m = {
  code: ".container.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{position:relative;min-width:2.75rem;min-height:2.75rem}.spacing-xsmall.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{padding-left:var(--fds-spacing-6)}.spacing-small.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{padding-left:var(--fds-spacing-7)}.spacing-medium.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{padding-left:calc(var(--fds-spacing-8) + var(--fds-spacing-1))}.spacing-large.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{padding-left:calc(var(--fds-spacing-8) + var(--fds-spacing-3))}.icon.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{grid-area:input;pointer-events:none;height:1.75rem;width:1.75rem;margin:auto;overflow:visible}.checkbox.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj,.checkbox.svelte-1hzqlqj .icon.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{border-radius:var(--fds-border_radius-interactive)}.label.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{padding-left:1.1875rem;margin-left:-1rem;min-height:2.75rem;min-width:min-content;display:inline-flex;flex-direction:row;gap:var(--fds-spacing-1);align-items:center;cursor:pointer}.description.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{padding-left:0.1875rem;margin-top:calc(var(--fds-spacing-2) * -1);color:var(--fds-semantic-text-neutral-subtle)}.control.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{--fds-inner-focus-border-color:var(--fds-semantic-border-focus-boxshadow);--fds-outer-focus-border-color:var(--fds-semantic-border-focus-outline);--fds-focus-border-width:0.1875rem;position:absolute;left:0;top:0;min-width:2.75rem;min-height:2.75rem;display:inline-grid;grid:[input] 1fr / [input] 1fr;gap:var(--fds-spacing-2);grid-auto-flow:column}.radio.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj,.radio.svelte-1hzqlqj .icon.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{border-radius:var(--fds-border_radius-full)}.input.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{height:100%;width:100%;opacity:0;margin:0;grid-area:input;cursor:pointer}.readonly.svelte-1hzqlqj>.control.svelte-1hzqlqj>.input.svelte-1hzqlqj.svelte-1hzqlqj,.readonly.svelte-1hzqlqj>.label.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{cursor:default}.disabled.svelte-1hzqlqj>.control .input.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj,.disabled.svelte-1hzqlqj>.label.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{cursor:not-allowed;color:var(--fds-semantic-border-neutral-subtle, #d2d5d8)}.disabled.svelte-1hzqlqj>.description.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{color:var(--fds-semantic-border-neutral-subtle, #d2d5d8)}.input.svelte-1hzqlqj:not(:checked)~.icon .checked.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{display:none}.input.svelte-1hzqlqj:checked~.icon .checked.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{display:inline}.input.svelte-1hzqlqj:not(:checked)~.icon .box.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{stroke:var(--fds-semsemantic-border-input-default, #00244e);fill:var(--fds-semantic-surface-action-no_fill, #ffffff)}.input.svelte-1hzqlqj:disabled~.icon .box.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{stroke:var(--fds-semantic-border-neutral-subtle, #d2d5d8);fill:var(--fds-semantic-surface-action-no_fill, #ffffff)}.input.svelte-1hzqlqj:checked:not(:disabled)~.icon .box.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{stroke:var(--fds-semantic-border-input-default, #00244e);fill:var(--semantic-surface-action-checked, #00244e)}.input.svelte-1hzqlqj:focus-visible~.icon.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{outline:var(--fds-focus-border-width) solid\r\n      var(--fds-semantic-border-focus-outline, #ffda06);outline-offset:0}.input.svelte-1hzqlqj:focus-visible:not(:disabled)~.icon .box.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{stroke:var(--fds-semantic-border-focus-boxshadow, #00244e);stroke-width:var(--fds-focus-border-width)}.input.svelte-1hzqlqj:disabled~.icon .checked.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{fill:var(--fds-semantic-border-neutral-default, #bfc2c0)}.error.svelte-1hzqlqj .input:not(:disabled, :focus-visible, :checked)~.icon .box.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{stroke:var(--fds-semantic-border-danger-default, #e02e49)}.readonly.svelte-1hzqlqj .input:read-only:not(:focus-visible)~.icon .box.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{stroke:var(--fds-semantic-border-neutral-subtle, #00244e);fill:var(--fds-semantic-background-default, #ffffff)}.readonly.svelte-1hzqlqj .input:read-only:not(:focus-visible):is(:checked)~.icon .checked.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{fill:var(--fds-semantic-border-neutral-default, #bfc2c0)}@media(hover: hover) and (pointer: fine){.container.svelte-1hzqlqj:not(.disabled, .readonly)>.control.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj:hover,.container.svelte-1hzqlqj:not(.disabled, .readonly):has(.label:hover)>.control.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{background:var(--semantic-surface-action-first-subtle-hover, #c8cbdc)}.container.svelte-1hzqlqj:not(.disabled, .readonly)>.label.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj:hover,.container.svelte-1hzqlqj:not(.disabled, .readonly)>.control.svelte-1hzqlqj:hover~.label.svelte-1hzqlqj.svelte-1hzqlqj{color:var(--fds-semantic-text-action-hover, #004e95)}.container.svelte-1hzqlqj:not(.disabled, .readonly)>.control.svelte-1hzqlqj:hover>.icon.svelte-1hzqlqj>.box.svelte-1hzqlqj,.container.svelte-1hzqlqj:not(.disabled, .readonly):has(.label:hover)>.control.svelte-1hzqlqj>.icon.svelte-1hzqlqj>.box.svelte-1hzqlqj{stroke:var(--semantic-surface-action-checked, #00244e)}.control-xsmall.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{margin-left:-0.8rem}.control-small.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{margin-left:-0.75rem}.control-medium.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{margin-left:-0.55rem}.control-large.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{margin-left:-0.45rem}.font-xsmall.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{font-size:0.8125rem}.font-small.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{font-size:0.9375rem}.font-medium.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{font-size:1.125rem}.font-large.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{font-size:1.25rem}.icon-xsmall.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{height:1.2rem;width:1.2rem}.icon-small.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{height:1.375em;width:1.375em}.icon-medium.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{height:1.6875rem;width:1.6875rem}.icon-large.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj.svelte-1hzqlqj{height:2rem;width:2rem}}",
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sizeClasses;
  let containerClasses;
  let inputClasses;
  let labelClasses;
  let descriptionClasses;
  let $checkboxGroup, $$unsubscribe_checkboxGroup;
  let { label } = $$props;
  let { description = "" } = $$props;
  let { disabled = void 0 } = $$props;
  let { readOnly = void 0 } = $$props;
  let { value } = $$props;
  let { checked = false } = $$props;
  let size;
  let groupUniqueId;
  let error;
  let groupValue;
  let groupDisabled = false;
  let groupReadOnly = false;
  const uniqueId = v4();
  const checkboxId = `checkbox-${uniqueId}`;
  const labelId = `label-${uniqueId}`;
  const descriptionId = `description-${uniqueId}`;
  const checkboxGroup = getContext("checkboxGroup");
  $$unsubscribe_checkboxGroup = subscribe(checkboxGroup, (value2) => $checkboxGroup = value2);
  const sizes = {
    xsmall: {
      iconSizeClass: "icon-xsmall",
      fontSizeClass: "font-xsmall",
      spacingClass: "spacing-xsmall",
      controlClass: "control-xsmall",
      paddingClass: "padding-xsmall"
    },
    small: {
      iconSizeClass: "icon-small",
      fontSizeClass: "font-small",
      spacingClass: "spacing-small",
      controlClass: "control-small",
      paddingClass: "padding-small"
    },
    medium: {
      iconSizeClass: "icon-medium",
      fontSizeClass: "font-medium",
      spacingClass: "spacing-medium",
      controlClass: "control-medium",
      paddingClass: "padding-medium"
    },
    large: {
      iconSizeClass: "icon-large",
      fontSizeClass: "font-large",
      spacingClass: "spacing-large",
      controlClass: "control-large",
      paddingClass: "padding-large"
    }
  };
  if (checkboxGroup) {
    checkboxGroup.subscribe(($checkboxGroup2) => {
      groupValue = $checkboxGroup2.value;
      if (groupValue.includes(value)) {
        checked = true;
      }
    });
  } else {
    checked = checked;
  }
  function getSizeClasses(size2) {
    return sizes[size2] || sizes.medium;
  }
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$m);
  {
    if ($checkboxGroup) {
      size = $checkboxGroup.size;
      groupDisabled = $checkboxGroup.disabled;
      groupReadOnly = $checkboxGroup.readOnly;
      groupUniqueId = $checkboxGroup.uniqueId;
      error = $checkboxGroup.error;
    }
  }
  sizeClasses = getSizeClasses(size);
  containerClasses = `container ${sizeClasses.spacingClass} ${disabled || groupDisabled ? "disabled" : ""} ${error ? "error" : ""} ${readOnly || groupReadOnly ? "readonly" : ""} ${$$props.class || ""}`;
  inputClasses = `input ${readOnly || groupReadOnly ? "readonly" : ""} 
                            ${disabled || groupDisabled ? "disabled" : ""}`;
  labelClasses = `label ${readOnly || groupReadOnly ? "readonly" : ""} 
                            ${disabled || groupDisabled ? "disabled" : ""}
                            ${sizeClasses.paddingClass}`;
  descriptionClasses = `description ${sizeClasses.fontSizeClass}`;
  $$unsubscribe_checkboxGroup();
  return `<div class="${escape(null_to_empty(`${containerClasses} ${sizeClasses.fontSizeClass}`), true) + " svelte-1hzqlqj"}" tabindex="-1" role="checkbox"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelId, 0)}${add_attribute("id", checkboxId, 0)}><span class="${escape(null_to_empty(`control checkbox ${sizeClasses.controlClass}`), true) + " svelte-1hzqlqj"}"><input class="${escape(null_to_empty(inputClasses), true) + " svelte-1hzqlqj"}" type="checkbox"${add_attribute("id", labelId, 0)}${add_attribute("value", value, 0)}${add_attribute("name", `checkbox-${groupUniqueId}`, 0)} ${disabled || readOnly || groupDisabled || groupReadOnly ? "disabled" : ""}${add_attribute("checked", checked, 1)}> <svg class="${"icon " + escape(sizeClasses.iconSizeClass, true) + " svelte-1hzqlqj"}" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="box svelte-1hzqlqj" x="1" y="1" width="20" height="20" rx="0.125rem" ry="0.125rem" fill="white" stroke-width="2" stroke-linejoin="round"></rect><path class="checked svelte-1hzqlqj" fill-rule="evenodd" clip-rule="evenodd" d="M17.7876 6.27838C18.1171 6.60788 18.1171 7.14212 17.7876 7.47162L9.99591 15.2633C9.6664 15.5928 9.13217 15.5928 8.80267 15.2633L4.67767 11.1383C4.34816 10.8088 4.34816 10.2745 4.67767 9.94505C5.00717 9.61554 5.5414 9.61554 5.87091 9.94505L9.39929 13.4734L16.5943 6.27838C16.9238 5.94887 17.4581 5.94887 17.7876 6.27838Z" fill="white"></path></svg></span> <label${add_attribute("for", labelId, 0)} class="${escape(null_to_empty(labelClasses), true) + " svelte-1hzqlqj"}"><span class="${escape(null_to_empty(sizeClasses.fontSizeClass), true) + " svelte-1hzqlqj"}">${escape(label)}</span></label> ${description ? `<p${add_attribute("id", descriptionId, 0)} class="${escape(null_to_empty(descriptionClasses), true) + " svelte-1hzqlqj"}">${escape(description)}</p>` : ``} </div>`;
});
const Link_svelte_svelte_type_style_lang = "";
const css$l = {
  code: ".link.svelte-1qebjsd{--fdsc-link-hover-underline-color:var(\r\n      --fds-semantic-text-action-primary-default\r\n    );color:var(--fds-semantic-text-action-primary-default);cursor:pointer;text-decoration:underline;text-decoration-thickness:max(1px, 0.0625rem);text-underline-offset:max(4px, 0.25rem);display:inline-flex;align-items:center;gap:var(--fds-spacing-1)}.link.svelte-1qebjsd:visited{color:var(--fds-semantic-text-visited-default);text-decoration:none}.link.svelte-1qebjsd:hover{color:var(--fds-semantic-text-action-primary-default);text-decoration-thickness:max(2px, 0.125rem, 0.12em)}.link.svelte-1qebjsd:active,.link.svelte-1qebjsd:focus{background:var(--fds-semantic-border-focus-outline);box-shadow:0 max(3px, 0.1875rem, 0.18em)\r\n      var(--fds-semantic-border-focus-boxshadow);color:var(--fds-semantic-text-action-primary-active);outline:none;text-decoration:none}.link.inverted.svelte-1qebjsd:not(:focus, :active),.link.inverted.svelte-1qebjsd:not(:focus, :active):hover,.link.inverted.svelte-1qebjsd:not(:focus, :active):visited{--fdsc-link-hover-underline-color:white;color:white}",
  map: null
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedClass;
  let $$restProps = compute_rest_props($$props, ["as", "inverted", "href"]);
  let { as = "a" } = $$props;
  let { inverted = false } = $$props;
  let { href = "" } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$l);
  computedClass = `link ${inverted ? "inverted" : ""} ${$$props.class || ""}`;
  return `${as === "a" ? `<a${spread(
    [
      {
        class: escape_attribute_value(computedClass)
      },
      { href: escape_attribute_value(href) },
      escape_object($$restProps)
    ],
    { classes: "svelte-1qebjsd" }
  )}>${slots.default ? slots.default({}) : ``}</a>` : `${as === "button" ? `<button${spread(
    [
      {
        class: escape_attribute_value(computedClass)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-1qebjsd" }
  )}>${slots.default ? slots.default({}) : ``}</button>` : ``}`}`;
});
const List_svelte_svelte_type_style_lang = "";
const css$k = {
  code: ".list.svelte-1ff0drz{margin-block-start:0;margin-block-end:0}.list.none.svelte-1ff0drz{list-style-type:none;padding-inline-start:0}",
  map: null
};
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["as", "className"]);
  let { as = "ul" } = $$props;
  let { className = "" } = $$props;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css$k);
  return `${as === "ul" ? `<ul${spread([{ class: "list " + escape(className, true) }, escape_object($$restProps)], { classes: "svelte-1ff0drz" })}>${slots.default ? slots.default({}) : ``}</ul>` : ``} ${as === "ol" ? `<ol${spread([{ class: "list " + escape(className, true) }, escape_object($$restProps)], { classes: "svelte-1ff0drz" })}>${slots.default ? slots.default({}) : ``}</ol>` : ``} ${as === "none" ? `<ul${spread(
    [
      {
        class: "list none " + escape(className, true)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-1ff0drz" }
  )}>${slots.default ? slots.default({ class: "none" }) : ``}</ul>` : ``}`;
});
const ListItem_svelte_svelte_type_style_lang = "";
const css$j = {
  code: ".listItem.svelte-12xsxjk{border-bottom-color:var(--component-list-border_color);border-bottom-style:var(--component-list-border_style);border-bottom-width:var(--component-list-border_width);padding-left:var(--fds-spacing-1, 0.28125rem);margin-bottom:var(--fds-component-mode-gap-medium, 0.5625rem)}.listItem.no-padding.svelte-12xsxjk{padding-left:0}",
  map: null
};
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["className"]);
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css$j);
  return `<li${spread(
    [
      {
        class: "listItem " + escape(className, true)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-12xsxjk" }
  )}>${slots.default ? slots.default({}) : ``} </li>`;
});
const Tag_svelte_svelte_type_style_lang = "";
const css$i = {
  code: ".paragraph.svelte-8dg0hb{--fdsc-typography-font-family:inherit;--fdsc-bottom-spacing:var(--fds-spacing-5);color:var(--fds-semantic-text-neutral-default);margin:0;&.large {\r\n      --fdsc-bottom-spacing: var(--fds-spacing-6);\r\n      font: var(--fds-typography-paragraph-large);\r\n      font-family: var(--fdsc-typography-font-family);\r\n    };&.medium {\r\n      --fdsc-bottom-spacing: var(--fds-spacing-5);\r\n      font: var(--fds-typography-paragraph-medium);\r\n      font-family: var(--fdsc-typography-font-family);\r\n    };&.small {\r\n      --fdsc-bottom-spacing: var(--fds-spacing-4);\r\n      font: var(--fds-typography-paragraph-small);\r\n      font-family: var(--fdsc-typography-font-family);\r\n    };&.xsmall {\r\n      --fdsc-bottom-spacing: var(--fds-spacing-3);\r\n      font: var(--fds-typography-paragraph-xsmall);\r\n      font-family: var(--fdsc-typography-font-family);\r\n    }}.tag.svelte-8dg0hb{--fdsc-tag-border:var(--fds-semantic-border-neutral-default);--fdsc-tag-background:var(--fds-semantic-surface-neutral-subtle);--fdsc-tag-text:var(--fds-semantic-text-neutral-default);--fdsc-tag-padding:var(--fds-spacing-2);--fdsc-tag-min-height:var(--fds-sizing-7);--fdsc-tag-border-radius:var(--fds-border_radius-small);color:var(--fdsc-tag-text);padding:0 var(--fdsc-tag-padding);border:var(--fds-border_width-default) solid var(--fdsc-tag-border);background-color:var(--fdsc-tag-background);min-height:var(--fdsc-tag-min-height);border-radius:var(--fdsc-tag-border-radius);display:flex;align-items:center;box-sizing:border-box;word-break:break-word;width:max-content;&.xsmall {\r\n      --fdsc-tag-padding: var(--fds-spacing-1);\r\n      --fdsc-tag-min-height: var(--fds-sizing-5);\r\n    };&.small {\r\n      --fdsc-tag-padding: var(--fds-spacing-1);\r\n      --fdsc-tag-min-height: var(--fds-sizing-6);\r\n    };&.medium {\r\n      --fdsc-tag-padding: var(--fds-spacing-2);\r\n      --fdsc-tag-min-height: var(--fds-sizing-7);\r\n    };&.outlined {\r\n      &.neutral {\r\n        --fdsc-tag-border: var(--fds-semantic-border-neutral-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-neutral-subtle);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.info {\r\n        --fdsc-tag-border: var(--fds-semantic-border-info-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-info-subtle);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.success {\r\n        --fdsc-tag-border: var(--fds-semantic-border-success-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-success-subtle);\r\n        --fdsc-tag-text: var(--fds-semantic-text-success-on_success_subtle);\r\n      }\r\n\r\n      &.warning {\r\n        --fdsc-tag-border: var(--fds-semantic-border-warning-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-warning-subtle);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.danger {\r\n        --fdsc-tag-border: var(--fds-semantic-border-danger-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-danger-subtle);\r\n        --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger_subtle);\r\n      }\r\n\r\n      &.first {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-first-dark);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-first-light);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.second {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-second-dark);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-second-light);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.third {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-third-dark);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-third-light);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n    };&.filled {\r\n      &.neutral {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-neutral-dark);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-neutral-dark);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\r\n      }\r\n\r\n      &.info {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-info-subtle-hover);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-info-subtle-hover);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.success {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-success-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-success-default);\r\n        --fdsc-tag-text: var(--fds-semantic-text-success-on_success);\r\n      }\r\n\r\n      &.warning {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-warning-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-warning-default);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.danger {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-danger-default);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-danger-default);\r\n        --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger);\r\n      }\r\n\r\n      &.first {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-first-dark);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-first-dark);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.second {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-second-dark);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-second-dark);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n\r\n      &.third {\r\n        --fdsc-tag-border: var(--fds-semantic-surface-third-dark);\r\n        --fdsc-tag-background: var(--fds-semantic-surface-third-dark);\r\n        --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r\n      }\r\n    }}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "neutral" } = $$props;
  let { size = "medium" } = $$props;
  let { variant = "filled" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  $$result.css.add(css$i);
  return `<span class="${escape(null_to_empty(`paragraph ${size} tag ${color}  ${variant} ${$$props.class || ""}`), true) + " svelte-8dg0hb"}">${slots.default ? slots.default({}) : ``} </span>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const Cross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.03033 0.96967C1.73744 0.676777 1.26256 0.676777 0.96967 0.96967C0.676777 1.26256 0.676777 1.73744 0.96967 2.03033L5.93934 7L0.96967 11.9697C0.676777 12.2626 0.676777 12.7374 0.96967 13.0303C1.26256 13.3232 1.73744 13.3232 2.03033 13.0303L7 8.06066L11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303C13.3232 12.7374 13.3232 12.2626 13.0303 11.9697L8.06066 7L13.0303 2.03033C13.3232 1.73744 13.3232 1.26256 13.0303 0.96967C12.7374 0.676777 12.2626 0.676777 11.9697 0.96967L7 5.93934L2.03033 0.96967Z" fill="currentColor"></path></svg>`;
});
const ClearButton_svelte_svelte_type_style_lang = "";
const css$h = {
  code: ".delete-button.svelte-bz8lyy{--delete-cross-box-color-hover:var(--colors-red-500);--delete-cross-box-size:25px;--delete-cross-size:12px;--delete-cross-color:var(--colors-blue-900);--delete-cross-color-active:var(--colors-blue-700);--delete-cross-color-disabled:#022f5180;--delete-cross-color-hover:white;color:#fff;background:none;border:none;cursor:var(--interactive-element-cursor);height:var(--delete-cross-box-size);padding:calc(\r\n      (var(--delete-cross-box-size) - var(--delete-cross-size)) / 2\r\n    );width:var(--delete-cross-box-size);color:inherit;border:none;cursor:pointer;border-radius:4px;margin-left:auto;background-color:transparent;& > svg {\r\n      margin-top: -0.8px;\r\n      margin-left: -1.2px;\r\n    };&:hover {\r\n      background-color: var(--colors-red-500);\r\n      color: white;\r\n    };&:disabled {\r\n      color: lightgrey;\r\n      cursor: not-allowed;\r\n      background-color: transparent;\r\n      &:disabled {\r\n        color: lightgrey;\r\n      }\r\n    };&.read-only {\r\n      &:hover {\r\n        cursor: not-allowed;\r\n        background-color: transparent;\r\n        color: inherit;\r\n      }\r\n    }}",
  map: null
};
const ClearButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleClick } = $$props;
  let { deleteButtonLabel = "Delete" } = $$props;
  let { disabled } = $$props;
  let { readOnly } = $$props;
  let { size = "medium" } = $$props;
  if ($$props.handleClick === void 0 && $$bindings.handleClick && handleClick !== void 0)
    $$bindings.handleClick(handleClick);
  if ($$props.deleteButtonLabel === void 0 && $$bindings.deleteButtonLabel && deleteButtonLabel !== void 0)
    $$bindings.deleteButtonLabel(deleteButtonLabel);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$h);
  return `<button${add_attribute("aria-label", deleteButtonLabel, 0)} class="${escape(null_to_empty(`delete-button clear-all ${disabled ? "disabled" : ""} ${readOnly ? "read-only" : ""}`), true) + " svelte-bz8lyy"}" ${disabled ? "disabled" : ""}>${validate_component(Cross, "Cross").$$render($$result, {}, {}, {})}</button>`;
});
const MultiSelectOption_svelte_svelte_type_style_lang = "";
const css$g = {
  code: ".multiSelectedOption.svelte-l8tqd5{display:flex;align-items:center;color:#fff;border-radius:var(--border-radius-full, 9999px);background:var(--fds-semantic-surface-action-active, #00315d);padding:var(--fds-spacing-1) var(--fds-spacing-2);gap:var(--fds-spacing-2);--interactive-element-cursor:pointer;position:relative;&.disabled {\r\n      background-color: lightgrey;\r\n    }}.optionLabel.svelte-l8tqd5{flex-grow:1;padding-right:var(--fds-spacing-6)}.delete-button-container.svelte-l8tqd5{position:absolute;right:0;width:20px;top:0;bottom:0;display:flex;align-items:center;justify-content:center;padding-right:var(--fds-spacing-2);border-radius:0 var(--border-radius-full, 9999px)\r\n      var(--border-radius-full, 9999px) 0;&:hover {\r\n      background-color: var(--colors-red-500);\r\n      cursor: pointer;\r\n    };&.disabled {\r\n      &:hover {\r\n        background-color: inherit;\r\n        cursor: not-allowed;\r\n      }\r\n    };&.read-only {\r\n      &:hover {\r\n        background-color: inherit;\r\n        cursor: not-allowed;\r\n      }\r\n    }}.delete-button.svelte-l8tqd5{--delete-cross-box-size:27px;--delete-cross-size:12px;--delete-cross-color:var(--colors-blue-900);--delete-cross-color-disabled:#022f5180;color:#fff;background:transparent;border-radius:var(--interactive-components-border-radius-normal);border:none;cursor:var(--interactive-element-cursor);height:var(--delete-cross-box-size);width:var(--delete-cross-box-size);padding:calc(\r\n      (var(--delete-cross-box-size) - var(--delete-cross-size)) / 2\r\n    );position:relative;right:-2px;padding-top:6px;border:none;margin:0;&.disabled {\r\n      &:hover {\r\n        cursor: not-allowed;\r\n      }\r\n    };&.read-only {\r\n      &:hover {\r\n        cursor: not-allowed;\r\n      }\r\n    }}",
  map: null
};
const MultiSelectOption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { option } = $$props;
  let { removeOption } = $$props;
  let { readOnly } = $$props;
  let { deleteButtonLabel = "Slett" } = $$props;
  let { disabled } = $$props;
  let { size = "medium" } = $$props;
  if ($$props.option === void 0 && $$bindings.option && option !== void 0)
    $$bindings.option(option);
  if ($$props.removeOption === void 0 && $$bindings.removeOption && removeOption !== void 0)
    $$bindings.removeOption(removeOption);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.deleteButtonLabel === void 0 && $$bindings.deleteButtonLabel && deleteButtonLabel !== void 0)
    $$bindings.deleteButtonLabel(deleteButtonLabel);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$g);
  return `<span class="${escape(null_to_empty(`multiSelectedOption ${disabled ? "disabled" : ""} ${readOnly ? "read-only" : ""}`), true) + " svelte-l8tqd5"}"><span class="optionLabel svelte-l8tqd5">${escape(option.label)}</span> <span class="${escape(null_to_empty(`delete-button-container ${disabled ? "disabled" : ""} ${readOnly ? "read-only" : ""}`), true) + " svelte-l8tqd5"}"><button${add_attribute("aria-label", `${deleteButtonLabel} ${option.label}`, 0)} class="${escape(null_to_empty(`delete-button ${disabled ? "disabled" : ""} ${readOnly ? "read-only" : ""}`), true) + " svelte-l8tqd5"}">${validate_component(Cross, "Cross").$$render($$result, {}, {}, {})}</button></span> </span>`;
});
const Chevron = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.59998 1L8.79998 7L16 1" stroke="currentColor" stroke-width="2"></path></svg>`;
});
const SelectControl_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ".input-container.svelte-1nzpip6{display:flex;flex-grow:1;flex-shrink:1;align-items:center;gap:4px;max-width:100%;overflow:hidden;padding-left:var(--fds-spacing-1)}.textInput.svelte-1nzpip6{background:transparent;border:0;box-sizing:border-box;font-family:inherit;font-size:var(--font_size);line-height:var(--line-height);min-height:var(--field-height-inside);outline:none;display:flex;flex-grow:1;flex-shrink:1;overflow:hidden;&.no-filter {\r\n      cursor: pointer;\r\n    }}.chevron-container.svelte-1nzpip6{height:100%;display:flex;align-items:center;gap:var(--fds-spacing-2);margin-right:var(--fds-spacing-1);&.disabled {\r\n      color: lightgrey;\r\n    }}.selected-options.svelte-1nzpip6{display:flex;flex-wrap:wrap;gap:var(--fds-spacing-2);width:100%}.clearAll.svelte-1nzpip6{background:var(--colors-white, #ffffff);border:none;cursor:pointer;padding:4px 8px;border-radius:4px;margin-left:auto}.field.svelte-1nzpip6{background-color:var(--fds-semantic-background-default, #ffffff);display:flex;border:1px solid var(--interface-common-info-900, #022f51);border-radius:3px;background:fff;align-items:center;flex-direction:row;font-family:inherit;font-size:var(--font_size);min-height:1.75rem;padding:0.25rem 0;&:hover {\r\n      cursor: pointer;\r\n      &.read-only {\r\n        cursor: not-allowed;\r\n      }\r\n      &.disabled {\r\n        cursor: not-allowed;\r\n      }\r\n    };&.disabled {\r\n      border: 1px solid lightgrey;\r\n    };&.error {\r\n      border: 1px solid var(--fds-semantic-border-danger-default, #e02e49);\r\n    };&.read-only {\r\n      border: 1px solid rgb(194, 194, 194);\r\n      background-color: rgb(235, 235, 235);\r\n    }}.separator.svelte-1nzpip6{width:1px;align-self:stretch;background:var(--interface-common-info-900, #022f51);margin-right:0.25rem;margin-left:0.125rem;&.disabled {\r\n      background: lightgrey;\r\n    }}",
  map: null
};
const SelectControl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let $selectContext, $$unsubscribe_selectContext;
  let { multiple } = $$props;
  let { inputId } = $$props;
  let { placeholder } = $$props;
  let { hasFilter } = $$props;
  let { readOnly } = $$props;
  let { removeOption } = $$props;
  let { handleSelectControlClick } = $$props;
  let { handleFilterChange } = $$props;
  let { searchLabel } = $$props;
  let { disabled } = $$props;
  let { error } = $$props;
  let { clearAll } = $$props;
  let { clearable } = $$props;
  let { size } = $$props;
  const selectContext = getContext("selectContext-" + inputId);
  $$unsubscribe_selectContext = subscribe(selectContext, (value) => $selectContext = value);
  let inputValue = "";
  let inputElement;
  function handleClearAll(e) {
    e.stopPropagation();
    if (multiple || clearable) {
      clearAll();
    }
    if (hasFilter && inputValue) {
      inputValue = "";
      handleFilterChange("");
    }
  }
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.hasFilter === void 0 && $$bindings.hasFilter && hasFilter !== void 0)
    $$bindings.hasFilter(hasFilter);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.removeOption === void 0 && $$bindings.removeOption && removeOption !== void 0)
    $$bindings.removeOption(removeOption);
  if ($$props.handleSelectControlClick === void 0 && $$bindings.handleSelectControlClick && handleSelectControlClick !== void 0)
    $$bindings.handleSelectControlClick(handleSelectControlClick);
  if ($$props.handleFilterChange === void 0 && $$bindings.handleFilterChange && handleFilterChange !== void 0)
    $$bindings.handleFilterChange(handleFilterChange);
  if ($$props.searchLabel === void 0 && $$bindings.searchLabel && searchLabel !== void 0)
    $$bindings.searchLabel(searchLabel);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.clearAll === void 0 && $$bindings.clearAll && clearAll !== void 0)
    $$bindings.clearAll(clearAll);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0)
    $$bindings.clearable(clearable);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$f);
  selected = $selectContext.selected;
  $$unsubscribe_selectContext();
  return `  <div class="${"field " + escape(disabled ? "disabled" : "", true) + " " + escape(error ? "error" : "", true) + " " + escape(readOnly ? "read-only" : "", true) + " " + escape(multiple ? "multiple" : "single", true) + " svelte-1nzpip6"}"><div class="input-container svelte-1nzpip6">${multiple ? `<div class="selected-options svelte-1nzpip6">${each(selected, (selectedOption) => {
    return `${validate_component(MultiSelectOption, "MultiSelectOption").$$render(
      $$result,
      {
        option: selectedOption,
        removeOption,
        readOnly,
        disabled,
        size
      },
      {},
      {}
    )}`;
  })} ${!(disabled || readOnly) && (hasFilter || selected.length === 0) ? `<input class="${"textInput " + escape(hasFilter ? "" : "no-filter", true) + " svelte-1nzpip6"}"${add_attribute("id", inputId, 0)}${add_attribute(
    "placeholder",
    multiple && !hasFilter && selected && selected.length > 0 ? "" : placeholder,
    0
  )}${add_attribute("aria-label", searchLabel, 0)} ${readOnly || !multiple && !hasFilter ? "readonly" : ""}${add_attribute("this", inputElement, 0)}${add_attribute("value", inputValue, 0)}>` : ``}</div>` : ``} ${!multiple ? `<input class="${"textInput " + escape(hasFilter ? "" : "no-filter", true) + " svelte-1nzpip6"}"${add_attribute("id", inputId, 0)}${add_attribute(
    "placeholder",
    multiple && !hasFilter && selected && selected.length > 0 ? "" : placeholder,
    0
  )}${add_attribute("aria-label", searchLabel, 0)} ${readOnly || !multiple && !hasFilter ? "readonly" : ""}${add_attribute("this", inputElement, 0)}${add_attribute("value", inputValue, 0)}>` : ``}</div> ${(multiple || clearable) && selected.length > 0 ? `${validate_component(ClearButton, "ClearButton").$$render(
    $$result,
    {
      handleClick: handleClearAll,
      disabled,
      readOnly,
      size
    },
    {},
    {}
  )} <div class="${"separator " + escape(disabled ? "disabled" : "", true) + " svelte-1nzpip6"}"></div>` : ``} <div class="${escape(null_to_empty(`chevron-container ${disabled ? "disabled" : ""}`), true) + " svelte-1nzpip6"}">${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {})}</div> </div>`;
});
const SelectCheckmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg height="15px" width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.837 17.837"><g><path fill="currentColor" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27   c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0   L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></svg>`;
});
const SelectDropdown_svelte_svelte_type_style_lang = "";
const css$e = {
  code: ".select-dropdown.svelte-1pv2mia.svelte-1pv2mia{background-color:var(--fds-semantic-background-default, #ffffff);border-radius:3px;border:1px solid var(--colors-grey-600, #68707c);box-shadow:1px 1px 3px 0px rgba(0, 0, 0, 0.25);&:not(.visible) {\r\n      display: none;\r\n    };max-height:400px;overflow-y:auto;margin-top:var(--fds-spacing-1);padding:var(--spacing-2, 9px)}.options-list.svelte-1pv2mia.svelte-1pv2mia{max-width:100%;z-index:1001;background-color:inherit;overflow:hidden;transition:max-height 0.3s ease, opacity 0.3s ease;opacity:1;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;flex:1 0 0;padding:0;margin:0}.option-item.svelte-1pv2mia.svelte-1pv2mia{display:flex;padding:9px 12px;align-items:flex-start;gap:10px;align-self:stretch;list-style:none;&:hover {\r\n      background: var(\r\n        --fds-semantic-surface-action-first-subtle-hover,\r\n        #c8cbdc\r\n      );\r\n      border-radius: var(--fds-border_radius-interactive, 4px);\r\n      border-left: 5px solid var(--fds-semantic-border-action-hover, #3c4a71);\r\n      cursor: pointer;\r\n      padding: 9px 12px 9px 7.5px;\r\n    }}.option-item.svelte-1pv2mia:hover rect.svelte-1pv2mia{stroke:var(--fds-semantic-border-input-hover) !important}.option-text.svelte-1pv2mia.svelte-1pv2mia{display:flex;flex-direction:column;align-items:flex-start}.option-content.svelte-1pv2mia.svelte-1pv2mia{display:flex;align-items:start;width:100%;position:relative;gap:10px;margin-top:2px}.option-label.svelte-1pv2mia.svelte-1pv2mia{color:var(--semantic-text-neutral-default, #1e2b3c);font-weight:400;line-height:130%}.option-label.svelte-1pv2mia.svelte-1pv2mia,.option-description.svelte-1pv2mia.svelte-1pv2mia{margin-right:auto}.checkmark-container.svelte-1pv2mia.svelte-1pv2mia{position:absolute;right:0;padding-right:10px;margin-top:2px}.icon.svelte-1pv2mia.svelte-1pv2mia{grid-area:input;pointer-events:none;height:1.75rem;width:1.75rem;overflow:visible}.input.svelte-1pv2mia.svelte-1pv2mia{position:absolute;opacity:0;margin:0;grid-area:input;cursor:pointer}.input:not(:checked)~.icon.svelte-1pv2mia .checked.svelte-1pv2mia{display:none}.input:checked~.icon.svelte-1pv2mia .checked.svelte-1pv2mia{display:inline}.input:not(:checked)~.icon.svelte-1pv2mia .box.svelte-1pv2mia{stroke:var(--fds-semsemantic-border-input-default, #00244e);fill:var(--fds-semantic-surface-action-no_fill, #ffffff)}.input:disabled~.icon.svelte-1pv2mia .box.svelte-1pv2mia{stroke:var(--fds-semantic-border-neutral-subtle, #d2d5d8);fill:var(--fds-semantic-surface-action-no_fill, #ffffff)}.input:checked:not(:disabled)~.icon.svelte-1pv2mia .box.svelte-1pv2mia{stroke:var(--fds-semantic-surface-action-checked);fill:var(--fds-semantic-surface-action-checked)}.input.svelte-1pv2mia:focus-visible~.icon.svelte-1pv2mia{outline:var(--fds-focus-border-width) solid\r\n      var(--fds-semantic-border-focus-outline, #ffda06);outline-offset:0}.input:focus-visible:not(:disabled)~.icon.svelte-1pv2mia .box.svelte-1pv2mia{stroke:var(--fds-semantic-border-focus-boxshadow, #00244e);stroke-width:var(--fds-focus-border-width)}.input:disabled~.icon.svelte-1pv2mia .checked.svelte-1pv2mia{fill:var(--fds-semantic-border-neutral-default, #bfc2c0)}.icon-xsmall.svelte-1pv2mia.svelte-1pv2mia{height:1.2rem;width:1.2rem}.svelte-1pv2mia.svelte-1pv2mia::-webkit-scrollbar{width:10px}.svelte-1pv2mia.svelte-1pv2mia::-webkit-scrollbar-track{background:var(--fds-brand-grey-100)}.svelte-1pv2mia.svelte-1pv2mia::-webkit-scrollbar-thumb{border:3px solid transparent;background-clip:padding-box;border-radius:50px;background-color:var(--fds-brand-grey-700)}.svelte-1pv2mia.svelte-1pv2mia::-webkit-scrollbar-thumb:hover{background-color:var(--fds-brand-grey-900)}",
  map: null
};
const SelectDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let isOptionSelected;
  let $selectContext, $$unsubscribe_selectContext;
  let { options } = $$props;
  let { selectOption } = $$props;
  let { isDropdownVisible } = $$props;
  let { multiple } = $$props;
  let { hideSelected = false } = $$props;
  let { size = "medium" } = $$props;
  let { inputId } = $$props;
  const selectContext = getContext("selectContext-" + inputId);
  $$unsubscribe_selectContext = subscribe(selectContext, (value) => $selectContext = value);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selectOption === void 0 && $$bindings.selectOption && selectOption !== void 0)
    $$bindings.selectOption(selectOption);
  if ($$props.isDropdownVisible === void 0 && $$bindings.isDropdownVisible && isDropdownVisible !== void 0)
    $$bindings.isDropdownVisible(isDropdownVisible);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.hideSelected === void 0 && $$bindings.hideSelected && hideSelected !== void 0)
    $$bindings.hideSelected(hideSelected);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  $$result.css.add(css$e);
  selected = $selectContext.selected;
  $selectContext.error;
  isOptionSelected = (option) => {
    if (Array.isArray(selected)) {
      return selected.some((sel) => sel.value === option.value);
    } else {
      return selected && selected.value === option.value;
    }
  };
  $$unsubscribe_selectContext();
  return `<div class="${["select-dropdown svelte-1pv2mia", isDropdownVisible ? "visible" : ""].join(" ").trim()}"><ul class="options-list svelte-1pv2mia">${each(options, (option, index) => {
    let isSelected = isOptionSelected(option);
    return `  <li class="option-item svelte-1pv2mia" role="option"${add_attribute("aria-selected", isSelected, 0)}><div class="option-content svelte-1pv2mia">${multiple ? `<div class="checkbox-container svelte-1pv2mia"><input class="input svelte-1pv2mia" type="checkbox" ${isSelected ? "checked" : ""}> <svg class="icon icon-xsmall svelte-1pv2mia" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="box svelte-1pv2mia" x="1" y="1" width="20" height="20" rx="0.125rem" ry="0.125rem" fill="white" stroke-width="2" stroke-linejoin="round"></rect><path class="checked svelte-1pv2mia" fill-rule="evenodd" clip-rule="evenodd" d="M17.7876 6.27838C18.1171 6.60788 18.1171 7.14212 17.7876 7.47162L9.99591 15.2633C9.6664 15.5928 9.13217 15.5928 8.80267 15.2633L4.67767 11.1383C4.34816 10.8088 4.34816 10.2745 4.67767 9.94505C5.00717 9.61554 5.5414 9.61554 5.87091 9.94505L9.39929 13.4734L16.5943 6.27838C16.9238 5.94887 17.4581 5.94887 17.7876 6.27838Z" fill="white"></path></svg> </div>` : ``} <div class="option-text svelte-1pv2mia"><div class="option-label svelte-1pv2mia">${escape(option.label)}</div> ${option.description ? `<div class="option-description svelte-1pv2mia">${escape(option.description)}</div>` : ``} ${!multiple && isSelected ? `<div class="checkmark-container svelte-1pv2mia">${validate_component(SelectCheckmark, "SelectCheckmark").$$render($$result, {}, {}, {})} </div>` : ``} </div></div> </li>`;
  })}</ul> </div>`;
});
const Select_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ".select-container.svelte-3y8j0t{display:flex;flex-direction:column;gap:var(--fds-spacing-2)}.error-message.svelte-3y8j0t{color:var(--fds-semantic-border-danger-default)}.select-label.svelte-3y8j0t{color:var(--fds-semantic-text-neutral-default, #1e2b3c);font-weight:600;line-height:130%}.select-description.svelte-3y8j0t{margin:0}.font-small.svelte-3y8j0t{font-size:0.9375rem}.font-medium.svelte-3y8j0t{font-size:1.125rem}.font-large.svelte-3y8j0t{font-size:1.25rem}.padlock-icon.svelte-3y8j0t{grid-area:label;position:relative;top:2px}",
  map: null
};
function normalizeSelected(selectedOptions) {
  if (!selectedOptions)
    return [];
  return Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions];
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDropdownVisible;
  let filteredOptions;
  let $$restProps = compute_rest_props($$props, [
    "options",
    "selected",
    "multiple",
    "disabled",
    "placeholder",
    "description",
    "size",
    "ariaLabel",
    "label",
    "searchLabel",
    "hideSelected",
    "hasFilter",
    "closeMenuOnSelect",
    "error",
    "readOnly",
    "clearable",
    "onChange"
  ]);
  let $selectedStore, $$unsubscribe_selectedStore;
  let { options = [] } = $$props;
  let { selected = null } = $$props;
  let { multiple = false } = $$props;
  let { disabled = false } = $$props;
  let { placeholder = "Select an option..." } = $$props;
  let { description = "" } = $$props;
  let { size = "medium" } = $$props;
  let { ariaLabel = "Select" } = $$props;
  let inputId = `select-${v4()}`;
  let { label } = $$props;
  let { searchLabel = "Search" } = $$props;
  let { hideSelected = true } = $$props;
  let { hasFilter = false } = $$props;
  let { closeMenuOnSelect = multiple ? false : true } = $$props;
  let { error = "" } = $$props;
  let { readOnly = false } = $$props;
  let { clearable = false } = $$props;
  let { onChange = () => {
  } } = $$props;
  let node;
  let selectedStore = writable(normalizeSelected(selected));
  $$unsubscribe_selectedStore = subscribe(selectedStore, (value) => $selectedStore = value);
  const selectContext = writable({
    selected: $selectedStore,
    error,
    multiple
  });
  setContext("selectContext-" + inputId, selectContext);
  function closeDropdown() {
    isDropdownVisible = false;
  }
  function selectOption(option) {
    selectedStore.update((currentSelected) => {
      if (multiple) {
        if (Array.isArray(currentSelected)) {
          if (!currentSelected.some((selectedOption) => selectedOption.value === option.value)) {
            return [...currentSelected, option];
          } else {
            return currentSelected.filter((selectedOption) => selectedOption.value !== option.value);
          }
        } else {
          return [option];
        }
      } else {
        if (hasFilter) {
          handleFilterChange("");
        }
        return [option];
      }
    });
    if (multiple) {
      selected = $selectedStore;
    } else {
      selected = $selectedStore[0];
    }
    if (closeMenuOnSelect) {
      isDropdownVisible = false;
    }
    onChange();
  }
  function removeOption(optionToRemove) {
    selectedStore.update((currentSelected) => {
      if (multiple) {
        return currentSelected.filter((option) => option.value !== optionToRemove.value);
      } else {
        return [];
      }
    });
    selected = $selectedStore;
  }
  function clearAll() {
    if ((multiple || clearable) && !readOnly) {
      selectedStore.set([]);
      selectContext.update((ctx) => ({ ...ctx, selected: [] }));
      selected = !multiple ? null : $selectedStore;
    }
  }
  function openDropdown() {
    if (!disabled && !readOnly) {
      isDropdownVisible = true;
    }
  }
  function handleSelectControlClick() {
    if (isDropdownVisible) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }
  let searchTerm = "";
  function handleFilterChange(newFilter) {
    searchTerm = newFilter;
    filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  let fontSizeClass;
  switch (size) {
    case "xsmall":
    case "small":
    case "medium":
    case "large":
      fontSizeClass = `font-${size}`;
      break;
    default:
      fontSizeClass = "font-medium";
      break;
  }
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.searchLabel === void 0 && $$bindings.searchLabel && searchLabel !== void 0)
    $$bindings.searchLabel(searchLabel);
  if ($$props.hideSelected === void 0 && $$bindings.hideSelected && hideSelected !== void 0)
    $$bindings.hideSelected(hideSelected);
  if ($$props.hasFilter === void 0 && $$bindings.hasFilter && hasFilter !== void 0)
    $$bindings.hasFilter(hasFilter);
  if ($$props.closeMenuOnSelect === void 0 && $$bindings.closeMenuOnSelect && closeMenuOnSelect !== void 0)
    $$bindings.closeMenuOnSelect(closeMenuOnSelect);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0)
    $$bindings.clearable(clearable);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  $$result.css.add(css$d);
  isDropdownVisible = false;
  {
    {
      let newSelected = $selectedStore;
      if (!Array.isArray(selected)) {
        newSelected = normalizeSelected(selected);
      }
      selectContext.set({ selected: newSelected, error, multiple });
    }
  }
  filteredOptions = options;
  $$unsubscribe_selectedStore();
  return `<div${spread(
    [
      { class: "select-container" },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-3y8j0t" }
  )}${add_attribute("this", node, 0)}>${label ? `<div>${readOnly ? `<span aria-hidden class="padlock-icon svelte-3y8j0t" data-svelte-h="svelte-fgblik"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z" fill="currentColor"></path></svg></span>` : ``} <label class="${escape(null_to_empty(`select-label ${fontSizeClass}`), true) + " svelte-3y8j0t"}"${add_attribute("for", inputId, 0)}>${escape(label)}</label></div>` : ``} ${description ? `<p class="select-description svelte-3y8j0t">${escape(description)}</p>` : ``} ${validate_component(SelectControl, "SelectControl").$$render(
    $$result,
    {
      inputId,
      placeholder,
      hasFilter,
      readOnly,
      removeOption,
      multiple,
      handleSelectControlClick,
      handleFilterChange,
      searchLabel,
      disabled,
      error,
      clearAll,
      clearable,
      size
    },
    {},
    {}
  )} ${validate_component(SelectDropdown, "SelectDropdown").$$render(
    $$result,
    {
      isDropdownVisible,
      options: filteredOptions,
      selectOption,
      hideSelected,
      multiple,
      inputId,
      size
    },
    {},
    {}
  )} ${error ? `<div class="error-message svelte-3y8j0t">${escape(error)}</div>` : ``} </div>`;
});
function createFloatingActions(initOptions) {
  let referenceElement;
  let floatingElement;
  const defaultOptions = {
    autoUpdate: true
  };
  let options = initOptions;
  const getOptions = (mixin) => {
    return { ...defaultOptions, ...initOptions || {}, ...mixin || {} };
  };
  const updatePosition = (updateOptions) => {
    if (referenceElement && floatingElement) {
      options = getOptions(updateOptions);
      computePosition(referenceElement, floatingElement, options).then((v) => {
        Object.assign(floatingElement.style, {
          position: v.strategy,
          left: `${v.x}px`,
          top: `${v.y}px`
        });
        options?.onComputed && options.onComputed(v);
      });
    }
  };
  const referenceAction = (node) => {
    if ("subscribe" in node) {
      setupVirtualElementObserver(node);
      return {};
    } else {
      referenceElement = node;
      updatePosition();
    }
  };
  const contentAction = (node, contentOptions) => {
    let autoUpdateDestroy;
    floatingElement = node;
    options = getOptions(contentOptions);
    setTimeout(() => updatePosition(contentOptions), 0);
    updatePosition(contentOptions);
    const destroyAutoUpdate = () => {
      if (autoUpdateDestroy) {
        autoUpdateDestroy();
        autoUpdateDestroy = void 0;
      }
    };
    const initAutoUpdate = ({ autoUpdate: autoUpdate$1 } = options || {}) => {
      destroyAutoUpdate();
      if (autoUpdate$1 !== false) {
        tick().then(() => {
          return autoUpdate(referenceElement, floatingElement, () => updatePosition(options), autoUpdate$1 === true ? {} : autoUpdate$1);
        });
      }
      return;
    };
    autoUpdateDestroy = initAutoUpdate();
    return {
      update(contentOptions2) {
        updatePosition(contentOptions2);
        autoUpdateDestroy = initAutoUpdate(contentOptions2);
      },
      destroy() {
        destroyAutoUpdate();
      }
    };
  };
  const setupVirtualElementObserver = (node) => {
    const unsubscribe = node.subscribe(($node) => {
      if (referenceElement === void 0) {
        referenceElement = $node;
        updatePosition();
      } else {
        Object.assign(referenceElement, $node);
        updatePosition();
      }
    });
    onDestroy(unsubscribe);
  };
  return [
    referenceAction,
    contentAction,
    updatePosition
  ];
}
function arrow(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = get_store_value(options.element);
      if (element) {
        return arrow$1({
          element,
          padding: options.padding
        }).fn(args);
      }
      return {};
    }
  };
}
const Tooltip_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".tooltip-wrapper.svelte-tqlizk{width:max-content;display:inline-block}.tooltip.svelte-tqlizk{position:absolute;top:0;left:0;background:var(--fds-semantic-border-neutral-strong);padding:var(--fds-spacing-1) var(--fds-spacing-2);border-radius:var(--fds-border_radius-medium);z-index:1000;overflow-wrap:break-word;color:#fff;font:var(--fds-typography-paragraph-xsmall);font-family:inherit}.tooltip-arrow.svelte-tqlizk{position:absolute;background-color:var(--fds-semantic-border-neutral-strong);width:8px;height:8px;transform:rotate(45deg)}",
  map: null
};
const ARROW_HEIGHT = 7;
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let internalOpen;
  let $$restProps = compute_rest_props($$props, ["placement", "delay", "open", "defaultOpen", "arrowGap", "showArrow"]);
  let $arrowRef, $$unsubscribe_arrowRef;
  let { placement = "top" } = $$props;
  let { delay = 150 } = $$props;
  let { open = void 0 } = $$props;
  let { defaultOpen = false } = $$props;
  let { arrowGap = 4 } = $$props;
  let { showArrow = true } = $$props;
  const arrowRef = writable(null);
  $$unsubscribe_arrowRef = subscribe(arrowRef, (value) => $arrowRef = value);
  createFloatingActions({
    strategy: "absolute",
    placement,
    middleware: [
      offset(ARROW_HEIGHT + arrowGap),
      flip({ fallbackAxisSideDirection: "start" }),
      shift(),
      arrow({ element: arrowRef })
    ],
    onComputed({ placement: placement2, middlewareData }) {
      const { x, y } = middlewareData.arrow;
      let staticSide, dynamicSide;
      const [basePlacement] = placement2.split("-");
      switch (basePlacement) {
        case "top":
          staticSide = "bottom";
          dynamicSide = "left";
          break;
        case "bottom":
          staticSide = "top";
          dynamicSide = "left";
          break;
        case "left":
          staticSide = "right";
          dynamicSide = "bottom";
          break;
        case "right":
          staticSide = "left";
          dynamicSide = "bottom";
          break;
        default:
          staticSide = "bottom";
          dynamicSide = "50%";
      }
      if ($arrowRef) {
        Object.assign($arrowRef.style, {
          left: x != null ? `${x - 0}px` : "",
          top: y != null ? `${y - 0}px` : "",
          [staticSide]: "-4px",
          [dynamicSide]: "calc(50% - 4px)"
        });
      }
    }
  });
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.defaultOpen === void 0 && $$bindings.defaultOpen && defaultOpen !== void 0)
    $$bindings.defaultOpen(defaultOpen);
  if ($$props.arrowGap === void 0 && $$bindings.arrowGap && arrowGap !== void 0)
    $$bindings.arrowGap(arrowGap);
  if ($$props.showArrow === void 0 && $$bindings.showArrow && showArrow !== void 0)
    $$bindings.showArrow(showArrow);
  $$result.css.add(css$c);
  internalOpen = open ?? defaultOpen;
  $$unsubscribe_arrowRef();
  return `<div role="tooltip" class="tooltip-wrapper svelte-tqlizk">${slots.anchor ? slots.anchor({}) : ``}</div> ${open || open === void 0 && internalOpen ? `<div${spread([{ class: "tooltip" }, escape_object($$restProps)], { classes: "svelte-tqlizk" })}>${slots.content ? slots.content({}) : ``} ${showArrow ? `<div class="tooltip-arrow svelte-tqlizk" style="${"height: " + escape(ARROW_HEIGHT, true) + "px"}"${add_attribute("this", $arrowRef, 0)}></div>` : ``}</div>` : ``}`;
});
const Accordion_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".accordion.svelte-ix4olf{--fdsc-accordion-border:var(--fds-semantic-border-neutral-subtle);--fdsc-accordion-border-radius:3px;--fdsc-accordion-header-padding-top:var(--fds-spacing-4);--fdsc-accordion-header-padding-right:var(--fds-spacing-5);--fdsc-accordion-header-padding-bottom:var(--fds-spacing-4);--fdsc-accordion-header-padding-left:var(--fds-spacing-5);--fdsc-accordion-header-bg-neutral:var(\r\n      --fds-semantic-surface-neutral-default\r\n    );--fdsc-accordion-header-bg-neutral-active:var(\r\n      --fds-semantic-surface-action-first-no_fill-hover\r\n    );--fdsc-accordion-header-bg-subtle:var(\r\n      --fds-semantic-surface-neutral-subtle\r\n    );--fdsc-accordion-header-bg-subtle-hover:var(\r\n      --fds-semantic-surface-neutral-subtle-hover\r\n    );--fdsc-accordion-header-bg-primary:var(--fds-semantic-surface-first-light);--fdsc-accordion-header-bg-primary-hover:var(\r\n      --fds-semantic-surface-first-light-hover\r\n    );--fdsc-accordion-header-bg-secondary:var(\r\n      --fds-semantic-surface-second-light\r\n    );--fdsc-accordion-header-bg-secondary-hover:var(\r\n      --fds-semantic-surface-second-light-hover\r\n    );--fdsc-accordion-header-bg-tertiary:var(\r\n      --fds-semantic-surface-third-light\r\n    );--fdsc-accordion-header-bg-tertiary-hover:var(\r\n      --fds-semantic-surface-third-light-hover\r\n    );--fdsc-accordion-header-border:var(--fds-semantic-border-neutral-subtle);--fdsc-accordion-header-border-inverted:var(\r\n      --fds-semantic-border-on_inverted-default\r\n    );--fdsc-accordion-header-shadow-focus:2px 2px 3px\r\n      var(--fds-semantic-border-neutral-subtle);--fdsc-accordion-header-color-hover:var(\r\n      --fds-semantic-text-action-first-default\r\n    );--fdsc-accordion-content-border:var(--fds-semantic-border-neutral-subtle);--fdsc-accordion-content-border-open:var(\r\n      --fds-semantic-border-neutral-strong\r\n    );border-bottom:1px solid var(--fdsc-accordion-content-border)}.border.svelte-ix4olf{border:1px solid var(--fdsc-accordion-border);border-top:none;border-radius:var(--fdsc-accordion-border-radius)}.accordion.neutral.svelte-ix4olf{background:var(--fdsc-accordion-header-bg-neutral)}.accordion.subtle.svelte-ix4olf{background:var(--fdsc-accordion-header-bg-subtle)}.accordion.first.svelte-ix4olf{background:var(--fdsc-accordion-header-bg-primary)}.accordion.second.svelte-ix4olf{background:var(--fdsc-accordion-header-bg-secondary)}.accordion.third.svelte-ix4olf{background:var(--fdsc-accordion-header-bg-tertiary)}",
  map: null
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { border } = $$props;
  let { color } = $$props;
  setContext("accordion", { border, color });
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$b);
  return `<div class="${[
    escape(null_to_empty(`accordion ${color}`), true) + " svelte-ix4olf",
    border ? "border" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
const AccordionContent_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".content.svelte-1r92d9k{padding:var(--fds-spacing-5, 1rem);background-color:#ffffff50;overflow:hidden;text-overflow:ellipsis}",
  map: null
};
const AccordionContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $open, $$unsubscribe_open = noop, $$subscribe_open = () => ($$unsubscribe_open(), $$unsubscribe_open = subscribe(open, ($$value) => $open = $$value), open);
  let open = null;
  $$subscribe_open();
  $$result.css.add(css$a);
  {
    {
      try {
        $$subscribe_open(open = getContext("accordionItem").open);
      } catch {
        console.error("<AccordionContent> has to be used within an <AccordionItem>");
      }
    }
  }
  $$unsubscribe_open();
  return `${$open ? `<div class="content svelte-1r92d9k">${$$slots.content ? `${slots.content ? slots.content({}) : ``}` : ``}</div>` : ``}`;
});
const AccordionHeader_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".border.svelte-cpqaj9.svelte-cpqaj9{border:1px solid var(--fdsc-accordion-border);border-radius:var(--fdsc-accordion-border-radius)}.header.svelte-cpqaj9.svelte-cpqaj9{margin:0;border-top:1px solid var(--fdsc-accordion-header-border)}.heading.xsmall.svelte-cpqaj9.svelte-cpqaj9{--fdsc-bottom-spacing:var(--fds-spacing-2);font:var(--fds-typography-heading-xsmall);font-family:var(--fdsc-typography-font-family)}.header.svelte-cpqaj9>button.svelte-cpqaj9{width:100%;display:flex;justify-content:flex-start;align-items:center;font-size:var(--fds-sizing-4);gap:var(--fds-spacing-4);margin:0;text-align:left;cursor:pointer;border:none;padding-top:var(--fdsc-accordion-header-padding-top);padding-right:var(--fdsc-accordion-header-padding-right);padding-bottom:var(--fdsc-accordion-header-padding-bottom);padding-left:var(--fdsc-accordion-header-padding-left)}.button.svelte-cpqaj9.svelte-cpqaj9{font-family:inherit}@media(hover: hover) and (pointer: fine){.header.svelte-cpqaj9>button.svelte-cpqaj9:hover{color:var(--fdsc-accordion-header-color-hover)}}.button.neutral.svelte-cpqaj9.svelte-cpqaj9{background:var(--fdsc-accordion-header-bg-neutral)}.button.subtle.svelte-cpqaj9.svelte-cpqaj9{background:var(--fdsc-accordion-header-bg-subtle)}.button.first.svelte-cpqaj9.svelte-cpqaj9{background:var(--fdsc-accordion-header-bg-primary)}.button.second.svelte-cpqaj9.svelte-cpqaj9{background:var(--fdsc-accordion-header-bg-secondary)}.button.third.svelte-cpqaj9.svelte-cpqaj9{background:var(--fdsc-accordion-header-bg-tertiary)}.button.border.svelte-cpqaj9.svelte-cpqaj9{border-top:0}@media(hover: hover) and (pointer: fine){.button.subtle.svelte-cpqaj9.svelte-cpqaj9:hover{background:var(--fdsc-accordion-header-bg-subtle-hover)}.button.first.svelte-cpqaj9.svelte-cpqaj9:hover{background:var(--fdsc-accordion-header-bg-primary-hover)}.button.second.svelte-cpqaj9.svelte-cpqaj9:hover{background:var(--fdsc-accordion-header-bg-secondary-hover)}.button.third.svelte-cpqaj9.svelte-cpqaj9:hover{background:var(--fdsc-accordion-header-bg-tertiary-hover)}}.button.neutral.open.svelte-cpqaj9.svelte-cpqaj9,.button.subtle.open.svelte-cpqaj9.svelte-cpqaj9{background-color:var(--fdsc-accordion-header-bg-neutral-active)}.button.first.open.svelte-cpqaj9.svelte-cpqaj9,.button.second.open.svelte-cpqaj9.svelte-cpqaj9,.button.third.open.svelte-cpqaj9.svelte-cpqaj9{background-color:rgba(0 0 0 / 0.03)}.expandIcon.svelte-cpqaj9.svelte-cpqaj9{font-size:1.5rem;height:1.75rem;flex-shrink:0}.button.open:hover+.svelte-cpqaj9 .content.svelte-cpqaj9{border-color:var(--fdsc-accordion-content-border-open)}.focusable.svelte-cpqaj9.svelte-cpqaj9:focus-visible{--fds-inner-focus-border-color:#1e2b3c;--fds-outer-focus-border-color:#fadf4b;--fds-focus-border-width:3px;outline:var(--fds-focus-border-width) solid\r\n      var(--fds-outer-focus-border-color);outline-offset:var(--fds-focus-border-width);box-shadow:0 0 0 var(--fds-focus-border-width)\r\n      var(--fds-inner-focus-border-color)}.paragraph.svelte-cpqaj9.svelte-cpqaj9{--fdsc-typography-font-family:inherit;--fdsc-bottom-spacing:var(--fds-spacing-5);color:var(--fds-semantic-text-neutral-default);margin:0}.paragraph.small.svelte-cpqaj9.svelte-cpqaj9{--fdsc-bottom-spacing:var(--fds-spacing-4);font:var(--fds-typography-paragraph-small);font-family:var(--fdsc-typography-font-family)}",
  map: null
};
const AccordionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let $open, $$unsubscribe_open = noop, $$subscribe_open = () => ($$unsubscribe_open(), $$unsubscribe_open = subscribe(open, ($$value) => $open = $$value), open);
  let { level = 1 } = $$props;
  let accordionContext = null;
  let accordionItemContext = null;
  let open = null;
  $$subscribe_open();
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  $$result.css.add(css$9);
  {
    {
      try {
        accordionContext = getContext("accordion");
        accordionItemContext = getContext("accordionItem");
        $$subscribe_open(open = accordionItemContext.open);
      } catch {
        console.error("<Accordion.Header> has to be used within an <Accordion.Item>");
      }
    }
  }
  $$unsubscribe_open();
  return `${((tag) => {
    return tag ? `<${`h${level}`} class="header heading xsmall svelte-cpqaj9">${is_void(tag) ? "" : `<button type="button" class="${[
      escape(null_to_empty(`button focusable ${accordionContext.color}`), true) + " svelte-cpqaj9",
      ($open ? "open" : "") + " " + (accordionContext.border ? "border" : "")
    ].join(" ").trim()}"${add_attribute("aria-expanded", $open, 0)}${add_attribute("aria-controls", accordionItemContext.contentId, 0)}><div aria-hidden class="expandIcon svelte-cpqaj9">${!$open ? `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z" fill="currentColor"></path></svg>` : `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06l5.5-5.5Z" fill="currentColor"></path></svg>`}</div> ${$$slots.header ? `<span class="paragraph small svelte-cpqaj9">${slots.header ? slots.header({}) : ``}</span>` : ``}</button> `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(`h${level}`)}`;
});
const AccordionItem_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".item.svelte-1et19g:focus-within{position:relative}",
  map: null
};
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $internalOpen, $$unsubscribe_internalOpen;
  let $open, $$unsubscribe_open;
  let { open = writable(void 0) } = $$props;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  let { defaultOpen = false } = $$props;
  let internalOpen = writable(defaultOpen);
  $$unsubscribe_internalOpen = subscribe(internalOpen, (value) => $internalOpen = value);
  let contentId = v4();
  const dispatch = createEventDispatcher();
  const toggleOpen = () => {
    if (open === void 0) {
      internalOpen.update((iOpen) => !iOpen);
    }
    set_store_value(open, $open = !$open, $open);
    dispatch("toggleOpen");
  };
  setContext("accordionItem", {
    open: open ?? $internalOpen,
    toggleOpen,
    contentId
  });
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.defaultOpen === void 0 && $$bindings.defaultOpen && defaultOpen !== void 0)
    $$bindings.defaultOpen(defaultOpen);
  $$result.css.add(css$8);
  $$unsubscribe_internalOpen();
  $$unsubscribe_open();
  return `<div class="${["item svelte-1et19g", open || internalOpen ? "open" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
const Heading_svelte_svelte_type_style_lang = "";
const Textarea_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".formField.svelte-ks36c6.svelte-ks36c6{display:grid;gap:var(--fds-spacing-2)}.errorMessage.svelte-ks36c6.svelte-ks36c6:empty{display:none}.label.svelte-ks36c6.svelte-ks36c6{min-width:min-content;display:inline-flex;flex-direction:row;gap:var(--fds-spacing-1);align-items:center;margin-bottom:var(--fds-spacing-3);font-weight:600;line-height:130%}.description.svelte-ks36c6.svelte-ks36c6{color:var(--fds-semantic-text-neutral-subtle);margin-top:calc(var(--fds-spacing-2) * -1);margin-bottom:var(--fds-spacing-2)}.textarea.svelte-ks36c6.svelte-ks36c6{font:inherit;position:relative;box-sizing:border-box;flex:0 1 auto;min-height:2.5em;width:100%;appearance:none;padding:var(--fds-spacing-3);border:solid 1px var(--fds-semantic-border-action-dark);border-radius:var(--fds-border_radius-medium);resize:vertical}.textarea.xsmall.svelte-ks36c6.svelte-ks36c6,.textarea.small.svelte-ks36c6.svelte-ks36c6{padding:var(--fds-spacing-2)}.textarea.medium.svelte-ks36c6.svelte-ks36c6{padding:var(--fds-spacing-3)}.textarea.large.svelte-ks36c6.svelte-ks36c6{padding:var(--fds-spacing-4)}.disabled.svelte-ks36c6.svelte-ks36c6{opacity:0.3}.disabled.svelte-ks36c6 .textarea.svelte-ks36c6{cursor:not-allowed}.readonly.svelte-ks36c6 .textarea.svelte-ks36c6{background:var(--fds-semantic-surface-neutral-subtle);border-color:var(--fds-semantic-border-neutral-default);outline:none;cursor:not-allowed}.error.svelte-ks36c6>.textarea.svelte-ks36c6:not(:focus-visible){border-color:var(--fds-semantic-border-danger-default, #e02e49);box-shadow:inset 0 0 0 1px\r\n      var(--fds-semantic-border-danger-default, #e02e49)}@media(hover: hover) and (pointer: fine){.textarea.svelte-ks36c6.svelte-ks36c6:not(:focus-visible, :disabled, :read-only):hover{border-color:var(--fds-semantic-border-action-hover);box-shadow:inset 0 0 0 1px var(--fds-semantic-border-action-hover)}}.error-message.svelte-ks36c6.svelte-ks36c6{margin:var(--fds-spacing-1, 4.5px) 0;color:var(--fds-semantic-border-danger-default, #e02e49)}.font-xsmall.svelte-ks36c6.svelte-ks36c6{font-size:0.8125rem}.font-small.svelte-ks36c6.svelte-ks36c6{font-size:0.9375rem}.font-medium.svelte-ks36c6.svelte-ks36c6{font-size:1.125rem}.font-large.svelte-ks36c6.svelte-ks36c6{font-size:1.25rem}.visually-hidden.svelte-ks36c6.svelte-ks36c6{display:none;visibility:hidden}.padlock-icon.svelte-ks36c6.svelte-ks36c6{grid-area:label;position:relative;top:1px;scale:1.4}",
  map: null
};
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldClasses;
  let $$restProps = compute_rest_props($$props, [
    "label",
    "description",
    "size",
    "hideLabel",
    "readOnly",
    "disabled",
    "value",
    "error",
    "characterLimit",
    "characterLimitLabel"
  ]);
  let { label = "" } = $$props;
  let { description = "" } = $$props;
  let { size = "medium" } = $$props;
  let { hideLabel = false } = $$props;
  let { readOnly = false } = $$props;
  let { disabled = false } = $$props;
  let { value } = $$props;
  let { error = "" } = $$props;
  let { characterLimit = null } = $$props;
  let { characterLimitLabel = null } = $$props;
  let componentId = v4();
  let fontSizeClass;
  switch (size) {
    case "xsmall":
    case "small":
    case "medium":
    case "large":
      fontSizeClass = `font-${size}`;
      break;
    default:
      fontSizeClass = "font-medium";
      break;
  }
  let formFieldClasses = `form-field ${size} ${disabled ? "disabled" : ""} ${readOnly ? "readonly" : ""} ${$$props.class || ""} ${fontSizeClass}`;
  let labelClasses = `label ${hideLabel ? "visually-hidden" : ""}`;
  let descriptionClasses = `description ${hideLabel ? "visually-hidden" : ""} ${fontSizeClass}`;
  let textareaClasses = `textarea ${size}`;
  let errorMessageClasses = `error-message ${fontSizeClass}`;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.characterLimit === void 0 && $$bindings.characterLimit && characterLimit !== void 0)
    $$bindings.characterLimit(characterLimit);
  if ($$props.characterLimitLabel === void 0 && $$bindings.characterLimitLabel && characterLimitLabel !== void 0)
    $$bindings.characterLimitLabel(characterLimitLabel);
  $$result.css.add(css$7);
  fieldClasses = `${error ? "error" : ""}`;
  return `<div class="${escape(null_to_empty(formFieldClasses), true) + " svelte-ks36c6"}">${label ? `<label${add_attribute("for", `textarea-${componentId}`, 0)} class="${escape(null_to_empty(labelClasses), true) + " svelte-ks36c6"}">${readOnly ? ` <span aria-hidden class="padlock-icon svelte-ks36c6" data-svelte-h="svelte-fgblik"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z" fill="currentColor"></path></svg></span>` : ``} ${escape(label)}</label>` : ``} ${description ? `<p id="description" class="${escape(null_to_empty(descriptionClasses), true) + " svelte-ks36c6"}">${escape(description)}</p>` : ``} <div class="${escape(null_to_empty(fieldClasses), true) + " svelte-ks36c6"}"><textarea${spread(
    [
      {
        class: escape_attribute_value(textareaClasses)
      },
      {
        id: escape_attribute_value(`textarea-${componentId}`)
      },
      { "aria-describedby": "description" },
      { readonly: readOnly || null },
      { disabled: disabled || null },
      escape_object($$restProps)
    ],
    { classes: "svelte-ks36c6" }
  )}>${escape(value || "")}</textarea></div> ${characterLimit ? `${validate_component(CharacterCounter, "CharacterCounter").$$render(
    $$result,
    {
      maxCount: characterLimit,
      value,
      id: `character-counter-${componentId}`,
      size,
      label: characterLimitLabel
    },
    {},
    {}
  )}` : ``} ${error ? `<div class="${escape(null_to_empty(errorMessageClasses), true) + " svelte-ks36c6"}" aria-live="polite">${escape(error)}</div>` : ``} </div>`;
});
const CheckboxGroup_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".font-xsmall.svelte-nzrxw0{font-size:0.8125rem}.font-small.svelte-nzrxw0{font-size:0.9375rem}.font-medium.svelte-nzrxw0{font-size:1.125rem}.font-large.svelte-nzrxw0{font-size:1.25rem}.error.svelte-nzrxw0{color:var(--fds-semantic-border-danger-default, #e02e49)}.visually-hidden.svelte-nzrxw0{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:0.0625rem}.legend-wrapper.svelte-nzrxw0{display:flex;align-items:center;gap:0.5rem}fieldset.svelte-nzrxw0{border:none;margin:0;padding:0;display:block}legend.svelte-nzrxw0{font-weight:500;padding:0;margin:0;display:table;max-width:100%;white-space:normal;color:inherit;font-size:inherit;line-height:inherit;align-self:flex-start}p.svelte-nzrxw0{margin-top:0.25rem;margin-bottom:0.25rem;font-weight:400;color:var(--fds-semantic-text-neutral-default, #1b1b1b)}.legend-description.svelte-nzrxw0{margin-top:0;margin-bottom:var(--spacing-3, 0.84375rem)}.padlock-icon.svelte-nzrxw0{grid-area:label;position:relative;top:1px;scale:1.4}",
  map: null
};
const CheckboxGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checkboxGroupClasses;
  let legendWrapperClasses;
  let legendClasses;
  let descriptionClasses;
  let errorClasses;
  let { legend = "" } = $$props;
  let { description = "" } = $$props;
  let { readOnly = false } = $$props;
  let { disabled = false } = $$props;
  let { error = "" } = $$props;
  let { value = [] } = $$props;
  let { defaultValue = [] } = $$props;
  let { required = false } = $$props;
  let { size = "medium" } = $$props;
  let { hideLegend = false } = $$props;
  let fontSizeClass;
  const uniqueId = v4();
  const checkboxGroup = writable({
    readOnly,
    disabled,
    size,
    value,
    error,
    uniqueId,
    required
  });
  switch (size) {
    case "xsmall":
      fontSizeClass = "font-xsmall";
      break;
    case "small":
      fontSizeClass = "font-small";
      break;
    case "medium":
      fontSizeClass = "font-medium";
      break;
    case "large":
      fontSizeClass = "font-large";
      break;
    default:
      fontSizeClass = "font-medium";
      break;
  }
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.hideLegend === void 0 && $$bindings.hideLegend && hideLegend !== void 0)
    $$bindings.hideLegend(hideLegend);
  $$result.css.add(css$6);
  checkboxGroupClasses = `checkbox-group ${readOnly ? "readonly" : ""} ${size}`;
  legendWrapperClasses = `legend-wrapper ${hideLegend ? "visually-hidden" : ""}`;
  legendClasses = `legend ${fontSizeClass}`;
  descriptionClasses = `description ${fontSizeClass}  ${hideLegend ? "visually-hidden" : ""}`;
  errorClasses = `error ${fontSizeClass}`;
  {
    setContext("checkboxGroup", checkboxGroup);
  }
  {
    {
      checkboxGroup.update((storeValue) => ({
        ...storeValue,
        readOnly,
        disabled,
        size,
        error,
        value,
        required
      }));
    }
  }
  return `<fieldset class="${escape(null_to_empty(checkboxGroupClasses), true) + " svelte-nzrxw0"}"${add_attribute("id", `group-${uniqueId}`, 0)}${add_attribute("aria-labelledby", `label-${uniqueId}`, 0)}>${legend || description ? `<div class="legend-description svelte-nzrxw0">${legend ? `<div class="${escape(null_to_empty(`${legendWrapperClasses}`), true) + " svelte-nzrxw0"}">${readOnly ? `<span aria-hidden class="padlock-icon svelte-nzrxw0" data-svelte-h="svelte-1r6t50s"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25Zm3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25h6.5ZM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13Z" fill="currentColor"></path></svg></span>` : ``} <legend class="${escape(null_to_empty(legendClasses), true) + " svelte-nzrxw0"}"${add_attribute("id", `label-${uniqueId}`, 0)}>${escape(legend)}</legend></div>` : ``} ${description ? `<p class="${escape(null_to_empty(descriptionClasses), true) + " svelte-nzrxw0"}">${escape(description)}</p>` : ``}</div>` : ``} <div class="checkboxes">${slots.default ? slots.default({}) : ``}</div> ${error ? `<p class="${escape(null_to_empty(errorClasses), true) + " svelte-nzrxw0"}">${escape(error)}</p>` : ``} </fieldset>`;
});
const Search_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: `.formField.svelte-12vo0le.svelte-12vo0le{display:grid;gap:var(--fds-spacing-2)}.adornment.svelte-12vo0le.svelte-12vo0le{color:var(--fds-semantic-border-neutral-default);background:var(--fds-semantic-surface-neutral-subtle);padding:var(--fds-spacing-3);border-radius:var(--fds-border_radius-medium);border:solid 1px var(--fds-semantic-border-neutral-default);box-sizing:border-box;display:inline-block}.label.svelte-12vo0le.svelte-12vo0le{min-width:min-content;display:inline-flex;flex-direction:row;gap:var(--fds-spacing-1);align-items:center}.description.svelte-12vo0le.svelte-12vo0le{color:var(--fds-semantic-text-neutral-subtle);margin-top:calc(var(--fds-spacing-2) * -1)}.input.svelte-12vo0le.svelte-12vo0le{font:inherit;position:relative;box-sizing:border-box;flex:0 1 auto;min-height:2.5em;width:100%;appearance:none;background-color:white;background-repeat:no-repeat;border:solid 1px var(--fds-semantic-border-action-dark);border-radius:var(--fds-border_radius-medium)}.input.xsmall.svelte-12vo0le.svelte-12vo0le,.input.small.svelte-12vo0le.svelte-12vo0le{padding-left:36px;padding-right:4px;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 27" fill="none"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M5.75 11.8125C5.75 8.18813 8.68813 5.25 12.3125 5.25C15.9369 5.25 18.875 8.18813 18.875 11.8125C18.875 15.4369 15.9369 18.375 12.3125 18.375C8.68813 18.375 5.75 15.4369 5.75 11.8125ZM12.3125 3.75C7.8597 3.75 4.25 7.3597 4.25 11.8125C4.25 16.2653 7.8597 19.875 12.3125 19.875C14.2688 19.875 16.0624 19.1782 17.4586 18.0193L23.6064 24.167C23.8993 24.4599 24.3741 24.4599 24.667 24.167C24.9599 23.8741 24.9599 23.3993 24.667 23.1064L18.5193 16.9586C19.6782 15.5624 20.375 13.7688 20.375 11.8125C20.375 7.3597 16.7653 3.75 12.3125 3.75Z" fill="%231E2B3C"/%3E%3C/svg%3E');background-position:8px center}.input.medium.svelte-12vo0le.svelte-12vo0le{padding-left:40px;padding-right:4px;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M5.75 11.8125C5.75 8.18813 8.68813 5.25 12.3125 5.25C15.9369 5.25 18.875 8.18813 18.875 11.8125C18.875 15.4369 15.9369 18.375 12.3125 18.375C8.68813 18.375 5.75 15.4369 5.75 11.8125ZM12.3125 3.75C7.8597 3.75 4.25 7.3597 4.25 11.8125C4.25 16.2653 7.8597 19.875 12.3125 19.875C14.2688 19.875 16.0624 19.1782 17.4586 18.0193L23.6064 24.167C23.8993 24.4599 24.3741 24.4599 24.667 24.167C24.9599 23.8741 24.9599 23.3993 24.667 23.1064L18.5193 16.9586C19.6782 15.5624 20.375 13.7688 20.375 11.8125C20.375 7.3597 16.7653 3.75 12.3125 3.75Z" fill="%231E2B3C"/%3E%3C/svg%3E');background-position:8px center}.input.large.svelte-12vo0le.svelte-12vo0le{padding-left:44px;padding-right:4px;background-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 28 27" fill="none"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M5.75 11.8125C5.75 8.18813 8.68813 5.25 12.3125 5.25C15.9369 5.25 18.875 8.18813 18.875 11.8125C18.875 15.4369 15.9369 18.375 12.3125 18.375C8.68813 18.375 5.75 15.4369 5.75 11.8125ZM12.3125 3.75C7.8597 3.75 4.25 7.3597 4.25 11.8125C4.25 16.2653 7.8597 19.875 12.3125 19.875C14.2688 19.875 16.0624 19.1782 17.4586 18.0193L23.6064 24.167C23.8993 24.4599 24.3741 24.4599 24.667 24.167C24.9599 23.8741 24.9599 23.3993 24.667 23.1064L18.5193 16.9586C19.6782 15.5624 20.375 13.7688 20.375 11.8125C20.375 7.3597 16.7653 3.75 12.3125 3.75Z" fill="%231E2B3C"/%3E%3C/svg%3E');background-position:10px center}.input.svelte-12vo0le.svelte-12vo0le::placeholder{color:var(--fds-semantic-text-neutral-default, #1e2b3c)}.disabled.svelte-12vo0le.svelte-12vo0le{opacity:0.3}.disabled.svelte-12vo0le .input.svelte-12vo0le{cursor:not-allowed}.error.svelte-12vo0le>.input.svelte-12vo0le:not(:focus-visible){border-color:var(--fds-semantic-border-danger-default, #e02e49);box-shadow:inset 0 0 0 1px\r
      var(--fds-semantic-border-danger-default, #e02e49)}@media(hover: hover) and (pointer: fine){.input.svelte-12vo0le.svelte-12vo0le:not(:focus-visible, :disabled):hover{border-color:var(--fds-semantic-border-action-hover);box-shadow:inset 0 0 0 1px var(--fds-semantic-border-action-hover)}}.inputPrefix.svelte-12vo0le.svelte-12vo0le{border-top-left-radius:0;border-bottom-left-radius:0}.inputSuffix.svelte-12vo0le.svelte-12vo0le{border-top-right-radius:0;border-bottom-right-radius:0}.prefix.svelte-12vo0le.svelte-12vo0le{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.suffix.svelte-12vo0le.svelte-12vo0le{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.field.svelte-12vo0le.svelte-12vo0le{display:flex;align-items:stretch;border-radius:var(--fds-border_radius-medium)}.field.svelte-12vo0le>.svelte-12vo0le:first-child{border-top-left-radius:var(--fds-border_radius-medium);border-bottom-left-radius:var(--fds-border_radius-medium)}.field.svelte-12vo0le>.svelte-12vo0le:last-child{border-top-right-radius:var(--fds-border_radius-medium);border-bottom-right-radius:var(--fds-border_radius-medium)}.errorMessage.svelte-12vo0le.svelte-12vo0le:empty{display:none}.error-message.svelte-12vo0le.svelte-12vo0le{color:var(--fds-semantic-border-danger-default, #e02e49)}.font-xsmall.svelte-12vo0le.svelte-12vo0le{font-size:0.8125rem}.font-small.svelte-12vo0le.svelte-12vo0le{font-size:0.9375rem}.font-medium.svelte-12vo0le.svelte-12vo0le{font-size:1.125rem}.font-large.svelte-12vo0le.svelte-12vo0le{font-size:1.25rem}`,
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldClasses;
  let $$restProps = compute_rest_props($$props, [
    "label",
    "description",
    "size",
    "hideLabel",
    "disabled",
    "value",
    "error",
    "prefix",
    "suffix",
    "characterLimit",
    "characterLimitLabel"
  ]);
  let { label = "" } = $$props;
  let { description = "" } = $$props;
  let { size = "medium" } = $$props;
  let { hideLabel = false } = $$props;
  let { disabled = false } = $$props;
  let { value } = $$props;
  let { error = "" } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { characterLimit = null } = $$props;
  let { characterLimitLabel = null } = $$props;
  let componentId = v4();
  let fontSizeClass;
  switch (size) {
    case "xsmall":
      fontSizeClass = "font-xsmall";
      break;
    case "small":
      fontSizeClass = "font-small";
      break;
    case "medium":
      fontSizeClass = "font-medium";
      break;
    case "large":
      fontSizeClass = "font-large";
      break;
    default:
      fontSizeClass = "font-medium";
      break;
  }
  let formFieldClasses = `form-field ${size} ${disabled ? "disabled" : ""} ${$$props.class || ""} ${fontSizeClass}`;
  let labelClasses = `label ${hideLabel ? "visually-hidden" : ""}`;
  let descriptionClasses = `description ${hideLabel ? "visually-hidden" : ""} ${fontSizeClass}`;
  let inputClasses = `input ${size} ${prefix ? "input-prefix" : ""} ${suffix ? "input-suffix" : ""}`;
  let errorMessageClasses = `error-message ${fontSizeClass}`;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.characterLimit === void 0 && $$bindings.characterLimit && characterLimit !== void 0)
    $$bindings.characterLimit(characterLimit);
  if ($$props.characterLimitLabel === void 0 && $$bindings.characterLimitLabel && characterLimitLabel !== void 0)
    $$bindings.characterLimitLabel(characterLimitLabel);
  $$result.css.add(css$5);
  fieldClasses = `field ${error ? "error" : ""}`;
  return `<div class="${escape(null_to_empty(formFieldClasses), true) + " svelte-12vo0le"}">${label ? `<label for="search-field" class="${escape(null_to_empty(labelClasses), true) + " svelte-12vo0le"}"><span class="svelte-12vo0le">${escape(label)}</span></label>` : ``} ${description ? `<p id="description" class="${escape(null_to_empty(descriptionClasses), true) + " svelte-12vo0le"}">${escape(description)}</p>` : ``} <div class="${escape(null_to_empty(fieldClasses), true) + " svelte-12vo0le"}">${prefix ? `<div class="adornment prefix svelte-12vo0le" aria-hidden="true">${escape(prefix)}</div>` : ``} <input${spread(
    [
      {
        class: escape_attribute_value(inputClasses)
      },
      { placeholder: "Søk" },
      { name: "search" },
      { id: "search-field" },
      { type: "search" },
      { "aria-describedby": "search field" },
      { disabled: disabled || null },
      escape_object($$restProps)
    ],
    { classes: "svelte-12vo0le" }
  )}${add_attribute("value", value, 0)}> ${suffix ? `<div class="adornment suffix svelte-12vo0le" aria-hidden="true">${escape(suffix)}</div>` : ``}</div> ${characterLimit ? `${validate_component(CharacterCounter, "CharacterCounter").$$render(
    $$result,
    {
      maxCount: characterLimit,
      value,
      id: `character-counter-${componentId}`,
      size,
      label: characterLimitLabel
    },
    {},
    {}
  )}` : ``} ${error ? `<div class="${escape(null_to_empty(errorMessageClasses), true) + " svelte-12vo0le"}" aria-live="polite">${escape(error)}</div>` : ``} </div>`;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedTab;
  let { onChange = (value) => {
  } } = $$props;
  let { defaultValue = void 0 } = $$props;
  let { size = "medium" } = $$props;
  let store = {
    selectedTab: writable("1"),
    select: (i) => {
      store.selectedTab.set(i);
      onChange(i);
    },
    tabSize: writable("medium")
  };
  if (defaultValue) {
    store.selectedTab.set(defaultValue);
  }
  store.tabSize.set(size);
  setContext("tabsStore", store);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.defaultValue === void 0 && $$bindings.defaultValue && defaultValue !== void 0)
    $$bindings.defaultValue(defaultValue);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  selectedTab = store.selectedTab;
  {
    onChange(selectedTab);
  }
  return `<div class="tabs">${slots.default ? slots.default({}) : ``}</div>`;
});
const TabContent_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".tab-content.svelte-ziiok{color:var(--semantic-text-neutral-default, #1e2b3c);font-style:normal;font-weight:400;line-height:150%;margin-left:-0.125rem;&.small {\r\n      padding: var(--fds-spacing-4, 1.125rem);\r\n      font-size: 0.9375rem;\r\n    };&.medium {\r\n      padding: var(--fds-spacing-5, 1.40625rem);\r\n      font-size: 1.125rem;\r\n    };&.large {\r\n      padding: var(--fds-spacing-6, 1.6875rem);\r\n      font-size: 1.3125rem;\r\n    }}",
  map: null
};
const TabContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value"]);
  let $tabSize, $$unsubscribe_tabSize;
  let $selectedTab, $$unsubscribe_selectedTab;
  let { value } = $$props;
  const { selectedTab, tabSize } = getContext("tabsStore");
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value2) => $selectedTab = value2);
  $$unsubscribe_tabSize = subscribe(tabSize, (value2) => $tabSize = value2);
  let tabContentSize = $tabSize;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$4);
  $$unsubscribe_tabSize();
  $$unsubscribe_selectedTab();
  return `  ${$selectedTab === value ? `<div${spread(
    [
      {
        class: escape_attribute_value(`tab-content ${tabContentSize}`)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-ziiok" }
  )}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const TabItem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".tab-item.svelte-zuojnk.svelte-zuojnk{font-family:inherit;display:inline-flex;flex-direction:row;margin-left:-4px}button.svelte-zuojnk.svelte-zuojnk{font-family:inherit;display:flex;padding:var(--fds-spacing-3, 0.84375rem) var(--fds-spacing-5, 1.40625rem);justify-content:center;align-items:center;gap:var(--fds-spacing-2, 0.5625rem);border:none;border-radius:0;background-color:transparent;cursor:pointer;position:relative;color:var(--semantic-text-neutral-default, #1e2b3c);&.small {\r\n      font-size: 0.9375rem;\r\n      padding: var(--fds-spacing-2, 0.5625rem) var(--fds-spacing-4, 1.125rem);\r\n    };&.medium {\r\n      font-size: 1.125rem;\r\n      padding: var(--fds-spacing-3, 0.84375rem) var(--fds-spacing-5, 1.40625rem);\r\n    };&.large {\r\n      font-size: 1.3125rem;\r\n      padding: var(--fds-spacing-4, 1.125rem) var(--fds-spacing-6, 1.6875rem);\r\n    }}.icon.svelte-zuojnk.svelte-zuojnk{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin-bottom:0.1875rem;scale:1.4;color:var(--fds-semantic-text-neutral-subtle)}.no-icon.svelte-zuojnk.svelte-zuojnk{margin-bottom:-0.125rem}@media(hover: hover) and (pointer: fine){button.svelte-zuojnk.svelte-zuojnk:hover{--fdsc-bottom-border-color:var(--fds-semantic-border-neutral-subtle);color:var(--fds-semantic-text-neutral-default)}}button.active.svelte-zuojnk.svelte-zuojnk{--fdsc-bottom-border-color:var(\r\n      --fds-semantic-surface-action-first-default\r\n    );color:var(--fds-semantic-text-neutral-default)}button.active.svelte-zuojnk .icon.svelte-zuojnk{color:var(--fds-semantic-surface-action-first-default)}button.svelte-zuojnk.svelte-zuojnk:focus-visible{--fdsc-bottom-border-color:var(--fds-semantic-text-neutral-default);background:var(--fds-semantic-border-focus-outline);color:var(--fds-semantic-text-neutral-default);outline:none}button.svelte-zuojnk.svelte-zuojnk::after{content:'';display:block;height:0.1875rem;width:100%;border-radius:var(--fds-border_radius-full);background-color:var(--fdsc-bottom-border-color);position:absolute;bottom:0;left:0}",
  map: null
};
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tabSize, $$unsubscribe_tabSize;
  let $selectedTab, $$unsubscribe_selectedTab;
  let { value } = $$props;
  let { icon = null } = $$props;
  const { selectedTab, select, tabSize } = getContext("tabsStore");
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value2) => $selectedTab = value2);
  $$unsubscribe_tabSize = subscribe(tabSize, (value2) => $tabSize = value2);
  let tabButtonSize;
  let isSelected;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$result.css.add(css$3);
  isSelected = $selectedTab && $selectedTab === value;
  tabButtonSize = $tabSize;
  $$unsubscribe_tabSize();
  $$unsubscribe_selectedTab();
  return `  <div class="${"tab-item " + escape(isSelected ? "selected" : "", true) + " svelte-zuojnk"}"><button class="${escape(null_to_empty(`${isSelected ? "active" : ""} ${tabButtonSize} ${!icon ? "no-icon" : ""}`), true) + " svelte-zuojnk"}">${icon ? `<div class="icon svelte-zuojnk"><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></div>` : ``} <div class="text">${slots.default ? slots.default({}) : ``}</div></button> </div>`;
});
const TabList_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".tab-list.svelte-j542eh{border-bottom:var(--fds-border_width-default) solid\r\n      var(--fds-semantic-border-neutral-subtle)}",
  map: null
};
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$2);
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(`tab-list`)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-j542eh" }
  )}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Spinner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".spinner.svelte-1qh4jos{animation:svelte-1qh4jos-rotate-animation 1s linear infinite}.spinnerCircle.svelte-1qh4jos{animation:svelte-1qh4jos-stroke-animation 1.5s ease-in-out infinite}.defaultForeground.svelte-1qh4jos{stroke:var(--colors-grey-500, #a5aab1)}.interactionForeground.svelte-1qh4jos{stroke:var(--fds-semantic-border-action-first-default, #0062ba)}.invertedForeground.svelte-1qh4jos{stroke:var(--colors-white, #ffffff)}.defaultBackground.svelte-1qh4jos,.interactionBackground.svelte-1qh4jos,.invertedBackground.svelte-1qh4jos{stroke:var(--colors-grey-200, #e9eaec)}@keyframes svelte-1qh4jos-rotate-animation{100%{transform:rotate(360deg)}}@keyframes svelte-1qh4jos-stroke-animation{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-62}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "size", "variant", "className"]);
  let { title = "" } = $$props;
  let { size = "medium" } = $$props;
  let { variant = "default" } = $$props;
  let { className = "" } = $$props;
  const sizeMap = {
    xSmall: 15,
    small: 23,
    medium: 51,
    large: 67,
    xLarge: 101
  };
  const strokeWidthMap = {
    xSmall: 5,
    small: 4.5,
    medium: 5,
    large: 4.2,
    xLarge: 4.5
  };
  const variantMap = {
    default: {
      foreground: "defaultForeground",
      background: "defaultBackground"
    },
    interaction: {
      foreground: "interactionForeground",
      background: "interactionBackground"
    },
    inverted: {
      foreground: "invertedForeground",
      background: "invertedBackground"
    }
  };
  const styles = {
    width: `${sizeMap[size]}px`,
    height: `${sizeMap[size]}px`
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css$1);
  return `<svg${spread(
    [
      {
        class: "spinner " + escape(className, true)
      },
      { viewBox: "0 0 50 50" },
      {
        width: escape_attribute_value(styles.width)
      },
      {
        height: escape_attribute_value(styles.height)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-1qh4jos" }
  )}><title>${escape(title)}</title><circle class="${escape(null_to_empty(variantMap[variant].background), true) + " svelte-1qh4jos"}" cx="25" cy="25" r="20"${add_attribute("stroke-width", strokeWidthMap[size], 0)} fill="none"></circle><circle class="${"spinnerCircle " + escape(variantMap[variant].foreground, true) + " svelte-1qh4jos"}" cx="25" cy="25" r="20"${add_attribute("stroke-width", strokeWidthMap[size], 0)} fill="none"></circle></svg>`;
});
const DropdownMenuGroup_svelte_svelte_type_style_lang = "";
const DropdownMenuItem_svelte_svelte_type_style_lang = "";
const Divider_svelte_svelte_type_style_lang = "";
const DropdownMenu_svelte_svelte_type_style_lang = "";
const InformationSquareFillIcon = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V20C20.75 20.4142 20.4142 20.75 20 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V4ZM11 7.75C11 7.19772 11.4477 6.75 12 6.75C12.5523 6.75 13 7.19772 13 7.75C13 8.30228 12.5523 8.75 12 8.75C11.4477 8.75 11 8.30228 11 7.75ZM9.75 10.75C9.75 10.3358 10.0858 10 10.5 10H12C12.4142 10 12.75 10.3358 12.75 10.75V15.5H13.5C13.9142 15.5 14.25 15.8358 14.25 16.25C14.25 16.6642 13.9142 17 13.5 17H12H10.5C10.0858 17 9.75 16.6642 9.75 16.25C9.75 15.8358 10.0858 15.5 10.5 15.5H11.25V11.5H10.5C10.0858 11.5 9.75 11.1642 9.75 10.75Z" fill="currentColor"/>\n</svg>\n';
const CheckmarkCircleFillIcon = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM16.9536 9.27485C17.2434 8.93229 17.2007 8.41962 16.8582 8.12977C16.5156 7.83991 16.0029 7.88263 15.7131 8.22519L10.3251 14.5928L7.69952 11.9672C7.38222 11.6499 6.86778 11.6499 6.55048 11.9672C6.23317 12.2845 6.23317 12.7989 6.55048 13.1162L9.80048 16.3662C9.96114 16.5269 10.1817 16.6129 10.4088 16.6035C10.6358 16.594 10.8485 16.49 10.9953 16.3165L16.9536 9.27485Z" fill="currentColor"/>\n</svg>\n';
const XMarkOctagonFillIcon = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.74175 2.46967C7.8824 2.32902 8.07317 2.25 8.27208 2.25L15.7279 2.25C15.9268 2.25 16.1176 2.32902 16.2583 2.46967L21.5303 7.74175C21.671 7.8824 21.75 8.07317 21.75 8.27208V15.7279C21.75 15.9268 21.671 16.1176 21.5303 16.2583L16.2583 21.5303C16.1176 21.671 15.9268 21.75 15.7279 21.75H8.27208C8.07316 21.75 7.8824 21.671 7.74175 21.5303L2.46967 16.2583C2.32902 16.1176 2.25 15.9268 2.25 15.7279L2.25 8.27208C2.25 8.07317 2.32902 7.8824 2.46967 7.74175L7.74175 2.46967ZM9.03033 7.96967C8.73744 7.67678 8.26256 7.67678 7.96967 7.96967C7.67678 8.26256 7.67678 8.73744 7.96967 9.03033L10.9393 12L7.96967 14.9697C7.67678 15.2626 7.67678 15.7374 7.96967 16.0303C8.26256 16.3232 8.73744 16.3232 9.03033 16.0303L12 13.0607L14.9697 16.0303C15.2626 16.3232 15.7374 16.3232 16.0303 16.0303C16.3232 15.7374 16.3232 15.2626 16.0303 14.9697L13.0607 12L16.0303 9.03033C16.3232 8.73744 16.3232 8.26256 16.0303 7.96967C15.7374 7.67678 15.2626 7.67678 14.9697 7.96967L12 10.9393L9.03033 7.96967Z" fill="currentColor"/>\n</svg>\n';
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".componentHeader.svelte-r0v3xh{width:100%;background-color:pink}.selectForm.svelte-r0v3xh{display:flex;flex-direction:column;width:40%;gap:var(--fds-spacing-2)}.dropdown.svelte-r0v3xh{position:relative}",
  map: null
};
function handleTabChange(value) {
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  let optionsWithDescriptions;
  let unSelected;
  let multiUnselected;
  let dropdownPlacements;
  let showTextfieldError = false;
  let showSearchError = false;
  let textfieldValue = "";
  let searchValue = "";
  let isSwitchChecked = false;
  let textareaValue = "";
  let selectedValue;
  let selectedValues;
  let selectedCheckValue = false;
  let isInline = false;
  let isHideLegend = false;
  let isDisabled = false;
  let isReadOnly = false;
  let singlePreSelected = { label: "Sverige", value: "2" };
  let multiPreselected = [
    { label: "Norge", value: "1" },
    {
      label: "Outer Planets Alliance",
      value: "3"
    }
  ];
  let currentDropdownPlacement = {
    label: "bottom-start",
    value: "bottom-start"
  };
  let menuVisible = false;
  let dropdownButtons = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    options = [
      { label: "Norge", value: "1" },
      { label: "Sverige", value: "2" },
      {
        label: "Outer Planets Alliance",
        value: "3"
      },
      {
        label: "Outer Planets Alliance",
        value: "4"
      },
      {
        label: "Outer Planets Alliance",
        value: "5"
      },
      {
        label: "Outer Planets Alliance",
        value: "6"
      },
      {
        label: "Outer Planets Alliance",
        value: "7"
      },
      {
        label: "Outer Planets Alliance",
        value: "8"
      },
      {
        label: "Outer Planets Alliance",
        value: "9"
      },
      {
        label: "Outer Planets Alliance",
        value: "10"
      },
      {
        label: "Outer Planets Alliance",
        value: "11"
      },
      {
        label: "Outer Planets Alliance",
        value: "12"
      },
      {
        label: "Outer Planets Alliance",
        value: "13"
      },
      {
        label: "Outer Planets Alliance",
        value: "14"
      }
    ];
    optionsWithDescriptions = [
      {
        label: "Norge",
        value: "1",
        description: "Dårlige i fotball, gode i olje"
      },
      {
        label: "Sverige",
        value: "2",
        description: "Bedre i fotball, snakker litt rart"
      },
      {
        label: "Outer Planets Alliance",
        value: "3",
        description: "Undertrykkede masser som må finne seg i det meste, inntil videre"
      }
    ];
    unSelected = null;
    multiUnselected = [];
    {
      if (unSelected)
        console.debug("here", unSelected);
    }
    dropdownPlacements = [
      { label: "left", value: "left" },
      { label: "right", value: "right" },
      {
        label: "bottom-start",
        value: "bottom-start"
      },
      { label: "bottom-end", value: "bottom-end" },
      { label: "bottom", value: "bottom" },
      { label: "top", value: "top" },
      { label: "top-start", value: "top-start" },
      { label: "top-end", value: "top-end" },
      {
        label: "right-start",
        value: "right-start"
      },
      { label: "right-end", value: "right-end" },
      { label: "left-start", value: "left-start" },
      { label: "left-end", value: "left-end" }
    ];
    $$rendered = `<h1 data-svelte-h="svelte-yciu2p">Test components here!</h1> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-4xduzx">SWITCH</h1> <br> ${validate_component(Switch, "Switch").$$render(
      $$result,
      { checked: isSwitchChecked },
      {
        checked: ($$value) => {
          isSwitchChecked = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Switch`;
        }
      }
    )} ${validate_component(Switch, "Switch").$$render($$result, { checked: isSwitchChecked, disabled: true }, {}, {
      default: () => {
        return `Disabled Switch`;
      }
    })} ${validate_component(Switch, "Switch").$$render($$result, { checked: isSwitchChecked, readOnly: true }, {}, {
      default: () => {
        return `Readonly Switch`;
      }
    })} ${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        checked: isSwitchChecked,
        position: "right"
      },
      {},
      {
        default: () => {
          return `Switch Label right`;
        }
      }
    )} ${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        checked: isSwitchChecked,
        description: "Ipsum lorem dorem durem"
      },
      {},
      {
        default: () => {
          return `Switch with Description`;
        }
      }
    )} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-30th2l">BUTTON</h1> <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `First`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { color: "second" }, {}, {
      default: () => {
        return `Secondary`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { disabled: true, color: "success" }, {}, {
      default: () => {
        return `Success`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { variant: "quiet" }, {}, {
      default: () => {
        return `First (Quiet)`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { variant: "outline" }, {}, {
      default: () => {
        return `First (Outline)`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, { iconPlacement: "right" }, {}, {
      icon: () => {
        return `<svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm5.047 5.671 1.399 1.43-8.728 8.398L6 14.02l1.395-1.434 2.319 2.118 7.333-7.032Z" fill="currentColor"></path></svg>`;
      },
      default: () => {
        return `First Icon`;
      }
    })} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-g9abw4">TEXTFIELD</h1> <br> ${validate_component(Switch, "Switch").$$render(
      $$result,
      { checked: showTextfieldError },
      {
        checked: ($$value) => {
          showTextfieldError = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Show Error`;
        }
      }
    )} ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        error: showTextfieldError ? "Lorem ipsum error" : "",
        size: "medium",
        characterLimit: 10,
        style: "width: 50%",
        characterLimitLabel: (count) => count > -1 ? `Du har ${count} tegn igjen.` : `Du har ${Math.abs(count)} tegn for mye.`,
        value: textfieldValue
      },
      {
        value: ($$value) => {
          textfieldValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <br> ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        error: showTextfieldError ? "Lorem ipsum error" : "",
        size: "large",
        label: "Textfield Overskrift",
        description: "Beskrivelse",
        value: textfieldValue
      },
      {
        value: ($$value) => {
          textfieldValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-ru6fn7">TEXTAREA</h1> <br> ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        label: "Overskrift",
        size: "small",
        description: "Beskrivelse",
        error: "Lorem ipsum error",
        style: "width: 50%",
        hideLabel: false,
        characterLimit: 10,
        characterLimitLabel: (count) => count > -1 ? `Du har ${count} tegn igjen.` : `Du har ${Math.abs(count)} tegn for mye.`,
        value: textareaValue
      },
      {
        value: ($$value) => {
          textareaValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-10m3nh">SEARCH</h1> <br> ${validate_component(Switch, "Switch").$$render(
      $$result,
      { checked: showSearchError },
      {
        checked: ($$value) => {
          showSearchError = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `Show Error`;
        }
      }
    )} ${validate_component(Search, "Search").$$render(
      $$result,
      {
        error: showSearchError ? "Lorem ipsum error" : "",
        size: "medium",
        characterLimit: 10,
        characterLimitLabel: (count) => count > -1 ? `Du har ${count} tegn igjen.` : `Du har ${Math.abs(count)} tegn for mye.`,
        value: searchValue
      },
      {
        value: ($$value) => {
          searchValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-1rc4skl">LINK</h1> <br> ${validate_component(Link, "Link").$$render($$result, { href: "/route" }, {}, {
      default: () => {
        return `Link`;
      }
    })} <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-oa9vn5">PARAGRAPH</h1> <br> ${validate_component(Paragraph, "Paragraph").$$render($$result, { spacing: true, short: true }, {}, {
      default: () => {
        return `Lorem ipsum dorem`;
      }
    })} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-1lt9zed">LIST OF ALERTS</h1> <br> ${validate_component(List, "List").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Alert, "Alert").$$render($$result, { severity: "success" }, {}, {
              default: () => {
                return `Alert (success)`;
              }
            })}`;
          }
        })} ${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Alert, "Alert").$$render($$result, { severity: "danger" }, {}, {
              default: () => {
                return `Alert (danger)`;
              }
            })}`;
          }
        })}`;
      }
    })} <h2 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-na7zct">Unstyled list:</h2> ${validate_component(List, "List").$$render($$result, { as: "none" }, {}, {
      default: () => {
        return `${validate_component(ListItem, "ListItem").$$render($$result, { className: "no-padding" }, {}, {
          default: () => {
            return `${validate_component(Alert, "Alert").$$render($$result, { severity: "info" }, {}, {
              default: () => {
                return `Alert (info, default)`;
              }
            })}`;
          }
        })} ${validate_component(ListItem, "ListItem").$$render($$result, { className: "no-padding" }, {}, {
          default: () => {
            return `${validate_component(Alert, "Alert").$$render($$result, { severity: "danger" }, {}, {
              default: () => {
                return `Alert (danger)`;
              }
            })}`;
          }
        })}`;
      }
    })} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-1vna0h7">TAG</h1> <br> ${validate_component(Tag, "Tag").$$render($$result, { color: "first" }, {}, {
      default: () => {
        return `Tag Primary`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "second" }, {}, {
      default: () => {
        return `Tag Secondary`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "third" }, {}, {
      default: () => {
        return `Tag tertiary`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "neutral" }, {}, {
      default: () => {
        return `Tag neutral`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "success" }, {}, {
      default: () => {
        return `Tag success`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "warning", variant: "outlined" }, {}, {
      default: () => {
        return `Tag warning outlined`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "danger" }, {}, {
      default: () => {
        return `Tag danger`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "info" }, {}, {
      default: () => {
        return `Tag info`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { color: "first", variant: "outlined" }, {}, {
      default: () => {
        return `Tag Outlined`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { size: "xsmall" }, {}, {
      default: () => {
        return `Tag XS`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { size: "small" }, {}, {
      default: () => {
        return `Tag small`;
      }
    })} ${validate_component(Tag, "Tag").$$render($$result, { size: "medium" }, {}, {
      default: () => {
        return `Tag medium`;
      }
    })} <br> <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-u0otll">ACCORDION</h1> <br> ${validate_component(Accordion, "Accordion").$$render($$result, { border: true, color: "second" }, {}, {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(AccordionHeader, "AccordionHeader").$$render($$result, { level: 1 }, {}, {
              header: () => {
                return `<span slot="header" data-svelte-h="svelte-1c19a1z">Hvem kan registrere seg i Frivillighetsregisteret?</span>`;
              }
            })} ${validate_component(AccordionContent, "AccordionContent").$$render($$result, {}, {}, {
              content: () => {
                return `<span slot="content" data-svelte-h="svelte-1rpez6q">For å kunne bli registrert i Frivillighetsregisteret, må organisasjonen
        drive frivillig virksomhet. Det er bare foreninger, stiftelser og
        aksjeselskap som kan registreres. Virksomheten kan ikke dele ut midler
        til fysiske personer. Virksomheten må ha et styre.</span>`;
              }
            })}`;
          }
        })} ${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(AccordionHeader, "AccordionHeader").$$render($$result, { level: 4 }, {}, {
              header: () => {
                return `<span data-svelte-h="svelte-pi2aqm">Hvordan går jeg fram for å</span> <span data-svelte-h="svelte-ldtzvc">registrere i Frivillighetsregisteret?</span>`;
              }
            })} ${validate_component(AccordionContent, "AccordionContent").$$render($$result, {}, {}, {
              content: () => {
                return `<span data-svelte-h="svelte-10bsro1">Virksomheten må være registrert i Enhetsregisteret før den kan bli</span> <span data-svelte-h="svelte-fpzihg">registrert i Frivillighetsregisteret. Du kan registrere i begge</span> <span data-svelte-h="svelte-6j6qhz">registrene samtidig i Samordnet registermelding.</span>`;
              }
            })}`;
          }
        })}`;
      }
    })} <br> <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-83vr8k">MODAL</h1> <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Open Modal`;
      }
    })} ${``} <br> <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-1er9x9e">RADIO</h1> ${validate_component(RadioGroup, "RadioGroup").$$render(
      $$result,
      {
        inline: isInline,
        legend: "RadioGroup legend",
        description: "RadioGroup description",
        size: "medium",
        defaultValue: "option1",
        readOnly: isReadOnly,
        disabled: isDisabled,
        error: "",
        hideLegend: isHideLegend,
        value: selectedValue
      },
      {
        value: ($$value) => {
          selectedValue = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              value: "option1",
              label: "Lorem ipsum label."
            },
            {},
            {}
          )} ${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              value: "option1",
              label: "Lorem ipsum dolor sit label.",
              description: "Lorem ipsum dolor sit description."
            },
            {},
            {}
          )} ${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              readOnly: true,
              value: "option1",
              label: "Lorem ipsum dolor sit amet readonly label.",
              description: "Lorem ipsum dolor sit amet readonly description."
            },
            {},
            {}
          )} ${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              disabled: true,
              value: "option1",
              label: "Lorem ipsum dolor sit amet disabled label.",
              description: "Lorem ipsum dolor sit amet disabled description."
            },
            {},
            {}
          )}`;
        }
      }
    )} <p>Selected RadioGroup value: ${escape(selectedValue)}</p> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${escape("Hide legend")}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${escape("Inline")}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${escape("Show error")}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${escape("Disable")}`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${escape("ReadOnly")}`;
      }
    })} <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-iee6t4">CHECKBOX</h1> <div class="selectForm svelte-r0v3xh"><h3 data-svelte-h="svelte-y5zim2">Standalone Checkbox</h3> ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        value: "standalone",
        label: "Lorem ipsum standalone label",
        description: "Lorem ipsum standalone description",
        checked: selectedCheckValue
      },
      {
        checked: ($$value) => {
          selectedCheckValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} <p>Checked value: ${escape(selectedCheckValue)}</p> <h3 data-svelte-h="svelte-1yhn2oa">Checkbox Group</h3> ${validate_component(CheckboxGroup, "CheckboxGroup").$$render(
      $$result,
      {
        legend: "CheckboxGroup legend",
        description: "CheckboxGroup description",
        size: "medium",
        defaultValue: ["option2"],
        readOnly: isReadOnly,
        disabled: isDisabled,
        error: "",
        hideLegend: isHideLegend,
        value: selectedValues
      },
      {
        value: ($$value) => {
          selectedValues = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              value: "option1",
              label: "Lorem ipsum label"
            },
            {},
            {}
          )} ${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              value: "option2",
              label: "Lorem ipsum pre-selected label",
              description: "Lorem ipsum description"
            },
            {},
            {}
          )} ${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              value: "option3",
              label: "Lorem ipsum readonly label",
              description: "Lorem ipsum readonly description",
              readOnly: true
            },
            {},
            {}
          )} ${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              value: "option4",
              label: "Lorem ipsum disabled label",
              description: "Lorem ipsum disabled description",
              disabled: true
            },
            {},
            {}
          )}`;
        }
      }
    )} <p>Selected values: ${escape(selectedValues)}</p></div> <br> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Change selected`;
      }
    })} <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-amkxjl">SELECT</h1> <button data-svelte-h="svelte-go43q1">LogValue</button> <div class="selectForm svelte-r0v3xh">${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        label: "Single, unselected",
        hideSelected: true,
        clearable: true,
        size: "large",
        selected: unSelected
      },
      {
        selected: ($$value) => {
          unSelected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        label: "Single, preselected",
        selected: singlePreSelected
      },
      {
        selected: ($$value) => {
          singlePreSelected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        label: "Single, has filter",
        hasFilter: true,
        selected: unSelected
      },
      {
        selected: ($$value) => {
          unSelected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        placeholder: "Placeholder text",
        label: "Single w/ placeholder & description",
        description: "Dette er en beskrivelse",
        selected: unSelected
      },
      {
        selected: ($$value) => {
          unSelected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        error: "Error message",
        label: "Single, unselected, w/ error",
        selected: unSelected
      },
      {
        selected: ($$value) => {
          unSelected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options: optionsWithDescriptions,
        label: "Single, unselected, w/ option descriptions",
        selected: unSelected
      },
      {
        selected: ($$value) => {
          unSelected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        label: "Single, preselected, readonly",
        readOnly: true,
        size: "large",
        selected: singlePreSelected
      },
      {
        selected: ($$value) => {
          singlePreSelected = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-joeqbq">MULTI SELECT</h1> <br> <div class="selectForm svelte-r0v3xh">${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        multiple: true,
        label: "Multi, unselected",
        selected: multiUnselected
      },
      {
        selected: ($$value) => {
          multiUnselected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        multiple: true,
        hasFilter: true,
        label: "Multi, has filter",
        selected: multiUnselected
      },
      {
        selected: ($$value) => {
          multiUnselected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        multiple: true,
        label: "Multi, preselected",
        selected: multiPreselected
      },
      {
        selected: ($$value) => {
          multiPreselected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        disabled: true,
        multiple: true,
        label: "Multi, preselected, disabled",
        selected: multiPreselected
      },
      {
        selected: ($$value) => {
          multiPreselected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options,
        readOnly: true,
        multiple: true,
        label: "Multi, preselected, readonly",
        selected: multiPreselected
      },
      {
        selected: ($$value) => {
          multiPreselected = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Select, "Select").$$render(
      $$result,
      {
        options: optionsWithDescriptions,
        multiple: true,
        label: "Multi, unselected, w/ option descriptions",
        selected: multiUnselected
      },
      {
        selected: ($$value) => {
          multiUnselected = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <br> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-z4i4vl">Tabs</h1> <div class="tabs">${validate_component(Tabs, "Tabs").$$render($$result, { onChange: handleTabChange, size: "large" }, {}, {
      default: () => {
        return `${validate_component(TabList, "TabList").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TabItem, "TabItem").$$render(
              $$result,
              {
                value: "1",
                icon: InformationSquareFillIcon
              },
              {},
              {
                default: () => {
                  return `Tab 1`;
                }
              }
            )} ${validate_component(TabItem, "TabItem").$$render(
              $$result,
              {
                value: "2",
                icon: CheckmarkCircleFillIcon
              },
              {},
              {
                default: () => {
                  return `Tab 2`;
                }
              }
            )} ${validate_component(TabItem, "TabItem").$$render($$result, { value: "3", icon: XMarkOctagonFillIcon }, {}, {
              default: () => {
                return `Tab 3`;
              }
            })}`;
          }
        })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "1" }, {}, {
          default: () => {
            return `<button data-svelte-h="svelte-10h45lc">Content 1</button>`;
          }
        })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "2" }, {}, {
          default: () => {
            return `Content 2`;
          }
        })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "3" }, {}, {
          default: () => {
            return `Content 3`;
          }
        })}`;
      }
    })} <div class="tabs">${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        onChange: handleTabChange,
        size: "small",
        defaultValue: "3"
      },
      {},
      {
        default: () => {
          return `${validate_component(TabList, "TabList").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TabItem, "TabItem").$$render(
                $$result,
                {
                  value: "1",
                  icon: InformationSquareFillIcon
                },
                {},
                {
                  default: () => {
                    return `Tab 1`;
                  }
                }
              )} ${validate_component(TabItem, "TabItem").$$render(
                $$result,
                {
                  value: "2",
                  icon: CheckmarkCircleFillIcon
                },
                {},
                {
                  default: () => {
                    return `Tab 2`;
                  }
                }
              )} ${validate_component(TabItem, "TabItem").$$render($$result, { value: "3", icon: XMarkOctagonFillIcon }, {}, {
                default: () => {
                  return `Tab 3`;
                }
              })}`;
            }
          })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "1" }, {}, {
            default: () => {
              return `<button data-svelte-h="svelte-10h45lc">Content 1</button>`;
            }
          })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "2" }, {}, {
            default: () => {
              return `Content 2`;
            }
          })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: "3" }, {}, {
            default: () => {
              return `Content 3`;
            }
          })}`;
        }
      }
    )}</div></div> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-10daz8">Dropdown</h1> <div style="display: flex; align-items: center;gap: 5rem;">${validate_component(Select, "Select").$$render(
      $$result,
      {
        options: dropdownPlacements,
        label: "Placement",
        selected: currentDropdownPlacement
      },
      {
        selected: ($$value) => {
          currentDropdownPlacement = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${each([0, 1, 2], (i) => {
      return `<div class="dropdown svelte-r0v3xh"><div style="display: inline-block; box-sizing: border-box;"${add_attribute("this", dropdownButtons[i], 0)}>${validate_component(Button, "Button").$$render(
        $$result,
        {
          "aria-haspopup": "menu",
          "aria-expanded": menuVisible
        },
        {},
        {
          default: () => {
            return `Click me
        `;
          }
        }
      )}</div> ${``} </div>`;
    })}</div> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-dix04i">Tooltip</h1> ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: "Tooltip text",
        placement: "top-start",
        showArrow: true
      },
      {},
      {
        content: () => {
          return `<span slot="content" data-svelte-h="svelte-1euevzm">Tooltip text</span>`;
        },
        anchor: () => {
          return `${validate_component(Button, "Button").$$render($$result, { slot: "anchor" }, {}, {
            default: () => {
              return `Click me to display a Tooltip`;
            }
          })}`;
        }
      }
    )} ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        content: "Tooltip text",
        placement: "top",
        showArrow: true
      },
      {},
      {
        content: () => {
          return `<ul style="margin: 0" slot="content" data-svelte-h="svelte-f3gcfq"><li>First</li> <li>Second</li></ul>`;
        },
        anchor: () => {
          return `${validate_component(Button, "Button").$$render($$result, { slot: "anchor" }, {}, {
            default: () => {
              return `Click me to display a Tooltip`;
            }
          })}`;
        }
      }
    )} <p>Tooltips kan også legges <nobr>${validate_component(Tooltip, "Tooltip").$$render($$result, { open: true, placement: "bottom" }, {}, {
      content: () => {
        return `<span slot="content" data-svelte-h="svelte-1l1edu2">Ganske kult?</span>`;
      },
      anchor: () => {
        return `<abbr slot="anchor" style="font-weight: bold; text-decoration: underline dotted;" data-svelte-h="svelte-159p18j">til i en tekst</abbr>`;
      }
    })}</nobr> for å gi mer informasjon!</p> <h1 class="componentHeader svelte-r0v3xh" data-svelte-h="svelte-4ac8qo">Spinner</h1> <div class="spinner">${validate_component(Spinner, "Spinner").$$render(
      $$result,
      {
        size: "xLarge",
        title: "xLarge",
        variant: "interaction"
      },
      {},
      {}
    )} ${validate_component(Spinner, "Spinner").$$render(
      $$result,
      {
        size: "large",
        title: "large",
        variant: "interaction"
      },
      {},
      {}
    )} ${validate_component(Spinner, "Spinner").$$render(
      $$result,
      {
        size: "medium",
        title: "medium",
        variant: "interaction"
      },
      {},
      {}
    )} ${validate_component(Spinner, "Spinner").$$render(
      $$result,
      {
        size: "small",
        title: "small",
        variant: "interaction"
      },
      {},
      {}
    )} ${validate_component(Spinner, "Spinner").$$render(
      $$result,
      {
        size: "xSmall",
        title: "xSmall",
        variant: "interaction"
      },
      {},
      {}
    )}</div> <div class="spinner">${validate_component(Spinner, "Spinner").$$render($$result, { size: "xLarge", title: "xLarge default" }, {}, {})} ${validate_component(Spinner, "Spinner").$$render(
      $$result,
      {
        size: "xLarge",
        title: "xLarge interaction",
        variant: "interaction"
      },
      {},
      {}
    )} ${validate_component(Spinner, "Spinner").$$render(
      $$result,
      {
        size: "xLarge",
        title: "xLarge inverted",
        variant: "inverted"
      },
      {},
      {}
    )}</div> <br> <br>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
