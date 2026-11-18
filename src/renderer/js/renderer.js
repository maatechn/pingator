import { createPreloader } from './preloader.js';

// header buttons handlers
document.getElementById('min-btn').addEventListener('click', () => window.windowControls.minimize());
document.getElementById('max-btn').addEventListener('click', () => window.windowControls.maximize());
document.getElementById('close-btn').addEventListener('click', () => window.windowControls.close());

const content = document.querySelector('main');
content.append(createPreloader());

window.api.onPush((result) => {
    if (result) {
        content.innerHTML = '';
    }
});
