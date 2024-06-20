<script>
  import { Button, Heading, Paragraph } from '$lib';
  import { createEventDispatcher, onMount } from 'svelte';
  import { v4 as uuidv4 } from 'uuid';

  /**
   * Subtitle of the modal.
   */
  export let subtitle = '';

  /**
   * Whether to show the close button.
   * @type {boolean}
   */
  export let closeButton = true;

  /**
   * Event handler for when the modal is closed.
   * @type {(e: any) => void}
   */
  export let onClose = (e) => {};

  const dispatch = createEventDispatcher();

  let closeButtonRef;
  let lastButton;
  let componentId = uuidv4();

  function close(event) {
    onClose(event);
    dispatch('close');
  }

  function handleClick(event) {
    const modal = document.querySelector(`modal-${componentId}`);
    const textSelected = window.getSelection().toString().length !== 0;

    if (modal && !modal.contains(event.target) && !textSelected) {
      close(event);
    }
  }

  function handleKeyDown(event) {
    if (
      event.key === 'Escape' ||
      event.key === 'Esc' ||
      event.key === 'escape' ||
      event.key === 'esc'
    ) {
      close(event);
    }
  }

  onMount(() => {
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

<div class="modal-background">
  <div id={`modal-${componentId}`} class="ds-modal" {...$$restProps}>
    <a href="/" on:focus={() => closeButtonRef.focus()}><div /></a>
    <a href="/" on:focus={() => lastButton.focus()}><div /></a>
    <div
      class={`ds-modal__header ${
        !closeButton ? 'ds-modal__header--no-button' : ''
      }`}
    >
      {#if subtitle}
        <Paragraph size="sm" variant="short">{subtitle}</Paragraph>
      {/if}
      <Heading level={2} size="xs"><slot name="header" /></Heading>
      {#if closeButton}
        <div class="ds-modal__header__button">
          <Button
            variant="tertiary"
            color="neutral"
            size="md"
            on:click={close}
            bind:this={closeButtonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.40533 0.71967C1.11244 0.426777 0.637563 0.426777 0.34467 0.71967C0.0517767 1.01256 0.0517767 1.48744 0.34467 1.78033L6.00184 7.4375L0.34467 13.0947C0.0517767 13.3876 0.0517767 13.8624 0.34467 14.1553C0.637563 14.4482 1.11244 14.4482 1.40533 14.1553L7.0625 8.49816L12.7197 14.1553C13.0126 14.4482 13.4874 14.4482 13.7803 14.1553C14.0732 13.8624 14.0732 13.3876 13.7803 13.0947L8.12316 7.4375L13.7803 1.78033C14.0732 1.48744 14.0732 1.01256 13.7803 0.71967C13.4874 0.426777 13.0126 0.426777 12.7197 0.71967L7.0625 6.37684L1.40533 0.71967Z"
                fill="#00315D"
              />
            </svg>
          </Button>
        </div>
      {/if}
    </div>
    <div class="ds-modal__content">
      <slot name="content" />
    </div>
    <div class="ds-modal__footer">
      <slot name="footer" />
    </div>
    <a href="/" on:focus={() => closeButtonRef.focus()}><div /></a>
  </div>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow-y: auto;
  }

  .ds-modal {
    padding: 0;
    width: 100%;
    max-width: 650px;
    border: none;
    border-radius: var(--ds-border-radius-md);
    box-shadow: var(--ds-shadow-xl);
    background-color: var(--ds-color-neutral-background-default);
    color: var(--ds-color-neutral-text-default);
  }

  .ds-modal::backdrop {
    background-color: rgb(0 0 0 / 0.5);
    animation: fade-in 300ms ease-in-out;
  }

  .ds-modal[open] {
    animation: slide-in 300ms ease-in-out, fade-in 300ms ease-in-out;
  }

  .ds-modal--lock-scroll {
    overflow: hidden;
  }

  @media (max-width: 650px) {
    .ds-modal {
      min-width: 100%;
      max-width: 100%;
      border-radius: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ds-modal[open] {
      animation: none;
    }

    .ds-modal::backdrop {
      animation: none;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(50px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .ds-modal__header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: var(--ds-spacing-6);
    padding-bottom: var(--ds-spacing-2);
    padding-left: var(--ds-spacing-6);
    padding-right: var(--ds-spacing-18);
    gap: var(--ds-spacing-1);
    color: var(--ds-color-neutral-text-default);
    position: relative;
  }

  .ds-modal__header--no-button {
    padding-right: var(--ds-spacing-6);
  }

  .ds-modal__header__button {
    position: absolute;
    top: var(--ds-spacing-3);
    right: var(--ds-spacing-3);
  }

  .ds-modal__footer {
    display: flex;
    align-items: center;
    gap: var(--ds-spacing-4);
    padding-top: var(--ds-spacing-3);
    padding-bottom: var(--ds-spacing-6);
    padding-left: var(--ds-spacing-6);
    padding-right: var(--ds-spacing-6);
  }

  .ds-modal__content {
    padding: var(--ds-spacing-2) var(--ds-spacing-6);
    max-height: 80vh;
    overflow-y: auto;
  }
</style>
