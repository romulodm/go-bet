/*
    This file implements a message toast to provide feedback on events to the user. 
    I'm limiting the number of messages to 4, that is, when we already have 4 messages and we're going to add another, we remove the last one and add the next one.

    This id="notification-area" are in the index.html
*/

let notificationList = [];
let maxNotifications = 4;

export function showSuccessMessage(text) {
    if (notificationList.length >= maxNotifications) {
        let oldestNotification = notificationList.shift();
        oldestNotification.remove();
    }

    let notification = createNotification('success', text);
    notificationList.push(notification);

    displayNotification(notification);
};

export function showErrorMessage(text) {
    if (notificationList.length >= maxNotifications) {
        let oldestNotification = notificationList.shift();
        oldestNotification.remove();
    }

    let notification = createNotification('error', text);
    notificationList.push(notification);

    displayNotification(notification);
};

export function showWarningMessage(text) {
    if (notificationList.length >= maxNotifications) {
        let oldestNotification = notificationList.shift();
        oldestNotification.remove();
    }

    let notification = createNotification('warning', text);
    notificationList.push(notification);

    displayNotification(notification);
};

function createNotification(type, text) {
    let notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerHTML = `
        <p>${text}</p>
        <button class="bg-${type === 'success' ? 'green' : type === 'error' ? 'red' : 'amber'}-50 hover:bg-${type === 'success' ? 'green' : type === 'error' ? 'red' : 'amber'}-200 rounded-lg p-2 close-button">
            <img class="w-6 h-6" src="./close-${type === 'success' ? 'green' : type === 'error' ? 'red' : 'orange'}-icon.png" />
        </button>
    `;

    let closeButton = notification.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        notification.remove();
        notificationList = notificationList.filter(item => item !== notification); // Remover a notificação da lista
    });

    return notification;
}

function displayNotification(notification) {
    let notificationArea = document.getElementById('notification-area');
    notificationArea.appendChild(notification);

    setTimeout(() => { 
        notification.remove();
        notificationList = notificationList.filter(item => item !== notification); // Remover a notificação da lista
    }, 5500);
}