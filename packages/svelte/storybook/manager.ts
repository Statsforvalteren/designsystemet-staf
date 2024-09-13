import { addons } from '@storybook/manager-api';

import stafThemeLight from './themes/stafThemeLight';

// Remove the "Show Code" button from the docblocks.
function removeDocBlocksCodeToggle() {
  const iFrameContent = document.getElementById(
    'storybook-preview-iframe',
  ) as HTMLIFrameElement;
  const codeToggles = iFrameContent?.contentWindow?.document.querySelectorAll(
    '.docblock-code-toggle',
  );
  if (codeToggles) {
    codeToggles.forEach((codeToggle) => {
      const parent = codeToggle.parentElement;
      if (parent) parent.remove();
    });
  }
}

// Remove "Proxy" from tab title, in docs pages with subcomponents.
function removeProxyFromTabTitle() {
  const iFrameContent = document.getElementById(
    'storybook-preview-iframe',
  ) as HTMLIFrameElement;
  const proxyTab = iFrameContent?.contentWindow?.document.querySelector(
    '[id^="tabbutton-prop-table-div-proxy-"]',
  );

  if (proxyTab && proxyTab.innerHTML.includes('Proxy')) {
    proxyTab.innerHTML = proxyTab.innerHTML.replace(/Proxy&lt;(.+)&gt;/, '$1');
  }
}

// Sets default width of the navbar by editing localStorage key.
function setSidebarWidth(width: number) {
  type StorybookManagerStore = {
    layout: {
      bottomPanelHeight: number;
      initialActive: string;
      navSize: number;
      panelPosition: string;
      recentVisibleSizes: {
        bottomPanelHeight: number;
        navSize: number;
        rightPanelWidth: number;
      };
      rightPanelWidth: number;
      showTabs: boolean;
      showToolbar: boolean;
    };
  };

  const storybookManagerStore = sessionStorage.getItem(
    '@storybook/manager/store',
  );

  let obj = {} as StorybookManagerStore;

  if (storybookManagerStore) {
    obj = JSON.parse(storybookManagerStore) as StorybookManagerStore;
    if (obj.layout && obj.layout.navSize && obj.layout.navSize < width)
      obj.layout.navSize = width;
  } else {
    obj.layout = {
      bottomPanelHeight: 300,
      initialActive: 'canvas',
      navSize: width,
      panelPosition: 'bottom',
      recentVisibleSizes: {
        bottomPanelHeight: 410,
        navSize: width,
        rightPanelWidth: 400,
      },
      rightPanelWidth: 400,
      showTabs: true,
      showToolbar: true,
    };
  }

  sessionStorage.setItem('@storybook/manager/store', JSON.stringify(obj));
}

// Moves the dark-mode button next to the fullscreen button on the toolbar.
function moveDarkModeButton() {
  const parent = document.querySelector(
    '[title*="Go full screen"]',
  )?.parentElement;

  if (parent) {
    const child = parent.childNodes[0];
    const darkModeButton = document.querySelector('[title*="Change theme to"]');

    if (child && darkModeButton) {
      parent.insertBefore(darkModeButton, child);
    }
  }
}

addons.setConfig({
  theme: stafThemeLight,
});

setTimeout(moveDarkModeButton, 2000);
setTimeout(() => setSidebarWidth(320), 100);
setInterval(removeDocBlocksCodeToggle, 100);
setInterval(removeProxyFromTabTitle, 100);
