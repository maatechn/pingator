import { createPreloader } from './preloader.js';

const content = document.querySelector('main');
content.append(createPreloader());

window.api.onPush((result) => {
    if (result) {
        content.innerHTML = '';
    }
});
