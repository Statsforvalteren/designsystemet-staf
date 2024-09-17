<script lang="ts">
  import { crossfade } from 'svelte/transition';
  import { notifications, hideToast } from './notifications';
  import { quintOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';
  import ConditionalStatus from './ConditionalStatus.svelte';

  /**
   * Message to be displayed in the toast.
   * @type {string}
   */
  export const message = 'Placeholder message';

  /**
   * Type of the toast. Defines the color of the toast.
   * @type {"success" | "info" | "warning" | "danger"}
   */
  export const messageType = 'success';

  /**
   * Position of the toast.
   * @type {'top' | 'center' | 'bottom'}
   */
  export const position = 'top';

  /**
   * Duration of the toast.
   * @type {number}
   */
  export const duration = 5000;

  /**
   * Unique identifier for the toast. If defined, a new toast with the same id will replace the existing one.
   * This means that the same toast can't be displayed multiple times.
   * @type {string }
   */
  export const id = undefined;

  const flyOptions = { delay: 50, duration: 250, easing: quintOut };
  const [send, receive] = crossfade({
    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
</script>

{#if $notifications}
  <div class="notification-container top">
    {#each $notifications.filter((notification) => notification.position === 'top') as notification (notification.id)}
      <div
        role="alert"
        class={`notification ${notification.messageType}`}
        in:receive={{ key: notification.id }}
        out:send={{ key: notification.id }}
        animate:flip={flyOptions}
      >
        <div class="notification-text">
          <div class="left-section">
            <span>
              <ConditionalStatus
                status={notification.messageType}
                fillStyle={'filled'}
              />
            </span>
            <span class="notification-message">{notification.message}</span>
          </div>
          <button on:click={hideToast(notification)} aria-label="Close">
            <div class="close-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.53033 5.46967C6.23744 5.17677 5.76256 5.17677 5.46967 5.46967C5.17678 5.76256 5.17678 6.23743 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033C18.8232 6.23743 18.8232 5.76256 18.5303 5.46967C18.2374 5.17677 17.7626 5.17677 17.4697 5.46967L12 10.9393L6.53033 5.46967Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="notification-container center">
    {#each $notifications.filter((notification) => notification.position === 'center') as notification (notification.id)}
      <div
        role="alert"
        class={`notification ${notification.messageType}`}
        in:receive={{ key: notification.id }}
        out:send={{ key: notification.id }}
        animate:flip={flyOptions}
      >
        <div class="notification-text">
          <div class="left-section">
            <span>
              <ConditionalStatus
                status={notification.messageType}
                fillStyle={'filled'}
              />
            </span>
            <span class="notification-message">{notification.message}</span>
          </div>
          <button on:click={hideToast(notification)} aria-label="Close">
            <div class="close-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.53033 5.46967C6.23744 5.17677 5.76256 5.17677 5.46967 5.46967C5.17678 5.76256 5.17678 6.23743 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033C18.8232 6.23743 18.8232 5.76256 18.5303 5.46967C18.2374 5.17677 17.7626 5.17677 17.4697 5.46967L12 10.9393L6.53033 5.46967Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="notification-container bottom">
    {#each $notifications.filter((notification) => notification.position === 'bottom') as notification (notification.id)}
      <div
        role="alert"
        class={`notification ${notification.messageType}`}
        in:receive={{ key: notification.id }}
        out:send={{ key: notification.id }}
        animate:flip={flyOptions}
      >
        <div class="notification-text">
          <div class="left-section">
            <span>
              <ConditionalStatus
                status={notification.messageType}
                fillStyle={'filled'}
              />
            </span>
            <span class="notification-message">{notification.message}</span>
          </div>
          <button on:click={hideToast(notification)} aria-label="Close">
            <div class="close-icon">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.53033 5.46967C6.23744 5.17677 5.76256 5.17677 5.46967 5.46967C5.17678 5.76256 5.17678 6.23743 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033C18.8232 6.23743 18.8232 5.76256 18.5303 5.46967C18.2374 5.17677 17.7626 5.17677 17.4697 5.46967L12 10.9393L6.53033 5.46967Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  .notification-container {
    z-index: 10000;
    height: 0;
  }
  .top {
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 370px;
    display: grid;
    justify-content: center;
    justify-items: center;
    .notification:first-child {
      margin-top: 0rem;
    }
  }
  .center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 370px;
    display: grid;
    justify-content: center;
    justify-items: center;
    .notification:first-child {
      margin-top: 0rem;
    }
  }
  .bottom {
    position: fixed;
    display: flex;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    width: 370px;
    flex-direction: column-reverse;
    align-items: center;
  }
  .right {
    left: auto;
    right: -9rem;
  }

  .left {
    left: 11rem;
  }
  .notification {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    min-width: 20rem;
    max-width: 26.25rem;
    width: max-content;
    padding: var(--ds-spacing-4, 1rem) var(--ds-spacing-4, 1rem);
    align-items: flex-start;
    gap: var(--ds-spacing-2, 0.5rem);
    border-radius: var(--ds-border-radius-sm, 2px);
    background: var(--ds-global-green-3, #d1f4e1);

    /* shadow/small */
    box-shadow:
      0px 1px 4px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px -1px rgba(0, 0, 0, 0.1);

    &-text {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: var(--ds-spacing-2, 0.5rem);
      width: 100%;
    }

    button {
      color: var(--ds-color-accent-9, #00244e);
      min-width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      background: transparent;
      border: solid 2px transparent;
      cursor: pointer;
      .close-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--ds-spacing-1, 0.25rem);
        flex-shrink: 0;
        align-self: stretch;
        border-radius: var(--ds-border-radius-md, 4px);
      }
      &:focus {
        outline: none;
        border: solid 2px var(--ds-global-yellow-9, #ffda06);
      }
      &:hover {
        color: var(--ds-color-accent-9, #00244e);
      }
    }
  }
  .notification-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .left-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: var(--ds-spacing-2, 0.5rem);
  }
  .notification-message {
    align-self: stretch;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.6875rem */
    word-wrap: break-word;
    overflow-wrap: break-word;
    flex-grow: 1;
    text-align: left;
  }
  .success {
    background: var(--ds-global-green-3, #d1f4e1);
  }
  .info {
    background: var(--ds-global-blue-2, #e6eff8);
  }
  .warning {
    background: var(--ds-global-yellow-2, #fffbe6);
  }
  .danger {
    background: var(--ds-global-red-4, #f9d5db);
  }
</style>
