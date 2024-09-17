import { get, writable } from 'svelte/store';

const notifications = writable([]);

function toast(
  message,
  messageType = 'success',
  position = 'top',
  duration = 5000,
  id,
) {
  const notification = {
    id: id ? id : (Date.now() + Math.floor(Math.random() * 100)).toString(),
    message,
    messageType,
    position,
    duration,
  };
  if (!get(notifications).some((e) => e.id === notification.id)) {
    notifications.update((state) => [notification, ...state]);
    setTimeout(() => removeToast(notification), duration);
  }
}

function removeToast(notification) {
  notifications.update((state) => {
    return state.filter((n) => n !== notification);
  });
}

function hideToast(notification) {
  removeToast(notification);
  return null;
}

export { notifications, toast, hideToast };
