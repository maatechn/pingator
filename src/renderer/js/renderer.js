import { createPreloader } from './preloader.js';
import { Card } from './card.js';
import { Modal } from './modal.js';

// header buttons handlers
document.getElementById('min-btn').addEventListener('click', () => window.windowControls.minimize());
document.getElementById('max-btn').addEventListener('click', () => window.windowControls.maximize());
document.getElementById('close-btn').addEventListener('click', () => window.windowControls.close());

const content = document.querySelector('main');
content.append(createPreloader());

// wait loading
window.api.onPush((result) => {
    if (result) {
        content.innerHTML = '';
        renderContent();
    }
});

async function renderContent() {

    Card.createGrid();

    const result = await window.api.loadJson();
    console.log(result);

    Card.viewAddButton(Modal);

}
