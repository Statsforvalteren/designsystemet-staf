<script>
  import Paragraph from '../Typography/Paragraph/Paragraph.svelte';

  /**
   * Alert component to show notifications with varying severity. Options are 'info', 'warning', 'success', or 'danger'.
   * @type {'info' | 'warning' | 'success' | 'danger'}
   */
  export let severity = 'info';

  /**
   * Adds a shadow to elevate the component.
   * @type {boolean}
   */
  export let elevated = false;

  /**
   * Sets `title` on the icon.
   * @type {string}
   */
  export let iconTitle = '';

  /**
   * Sets the size of the alert. Does not affect font size.
   * @type {'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'}
   */
  export let size = 'medium';

  let iconSize = 2;
  let iconVectors = '';

  switch (severity) {
    case 'info':
      iconVectors =
        'M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4ZM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75Z';
      break;
    case 'warning':
      iconVectors =
        'M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z';
      break;
    case 'success':
      iconVectors =
        'M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Zm4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.812.812 0 0 0 1.195-.05l5.959-7.042Z';
      break;
    case 'danger':
      iconVectors =
        'M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53L7.742 2.47Zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94 9.03 7.97Z';
      break;
  }
</script>

<div
  class={`ds-alert ds-alert--${size} ds-alert--${severity} ${
    elevated ? 'ds-alert--elevated' : ''
  }`}
  {...$$restProps}
  style="display: flex; align-items: flex-start;"
>
  <div
    class="ds-alert__icon"
    title={iconTitle}
    style="display: flex; align-items: center"
  >
    <svg
      width={`${iconSize}em`}
      height={`${iconSize}em`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      role="img"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d={iconVectors}
        fill="currentColor"
      />
    </svg>
  </div>
  <div style="margin-top: 3px;">
    <Paragraph as="span" {size} className="ds-alert__content">
      <span><slot /></span>
    </Paragraph>
  </div>
</div>

<style>
  .ds-alert {
    --dsc-alert-border-color: var(--ds-color-info-border-strong);
    --dsc-alert-border-radius: var(--ds-border-radius-md);
    --dsc-alert-color: var(--ds-color-neutral-text-default);
    --dsc-alert-icon-color: var(--dsc-alert-border-color);
    --dsc-alert-icon-size: var(--ds-sizing-7);
    --dsc-alert-background: var(--ds-color-info-surface-default);
    --dsc-alert-padding: var(--ds-spacing-6);

    border: 1px solid var(--dsc-alert-border-color);
    border-radius: var(--dsc-alert-border-radius);
    background: var(--dsc-alert-background);
    color: var(--dsc-alert-color);
    padding: var(--dsc-alert-padding);
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content auto;
    gap: var(--ds-spacing-2);
  }

  .ds-alert__icon {
    height: var(--dsc-alert-icon-size);
    width: var(--dsc-alert-icon-size);
    color: var(--dsc-alert-icon-color);
  }

  .ds-alert__content {
    display: flex;
    flex-direction: column;
  }

  .ds-alert--info {
    --dsc-alert-border-color: var(--ds-color-info-border-strong);
    --dsc-alert-icon-color: var(--ds-color-info-base-default);
    --dsc-alert-background: var(--ds-color-info-surface-default);
  }

  .ds-alert--warning {
    --dsc-alert-border-color: var(--ds-color-warning-border-default);
    --dsc-alert-icon-color: var(--ds-color-warning-base-default);
    --dsc-alert-background: var(--ds-color-warning-surface-default);
  }

  .ds-alert--success {
    --dsc-alert-border-color: var(--ds-color-success-border-default);
    --dsc-alert-icon-color: var(--ds-color-success-base-default);
    --dsc-alert-background: var(--ds-color-success-surface-default);
  }

  .ds-alert--danger {
    --dsc-alert-border-color: var(--ds-color-danger-border-default);
    --dsc-alert-icon-color: var(--ds-color-danger-base-default);
    --dsc-alert-background: var(--ds-color-danger-surface-default);
  }

  .ds-alert--sm {
    --dsc-alert-padding: var(--ds-spacing-5);
    --dsc-alert-icon-size: var(--ds-sizing-6);
  }

  .ds-alert--md {
    --dsc-alert-padding: var(--ds-spacing-6);
    --dsc-alert-icon-size: var(--ds-sizing-7);
  }

  .ds-alert--lg {
    --dsc-alert-padding: var(--ds-spacing-7);
    --dsc-alert-icon-size: var(--ds-sizing-8);
  }

  .ds-alert--elevated {
    box-shadow: var(--ds-shadow-sm);
  }
  .icon {
    --icon-size: calc(
      (4 * 6 / 16) * var(--fds-font-size-f0)
    ); /** Fluid sizing-6 */

    height: var(--icon-size);
    width: var(--icon-size);
    color: var(--fdsc-alert-icon-color);
    scale: 1.5;
    & > svg {
      margin: 5px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
  }
</style>
