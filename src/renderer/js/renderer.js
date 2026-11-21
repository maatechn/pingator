import { createPreloader } from './preloader.js';
import { Card } from './card.js';
import { Modal } from './modal.js';

// header buttons handlers
document.getElementById('min-btn').addEventListener('click', () => window.windowControls.minimize());
document.getElementById('max-btn').addEventListener('click', () => window.windowControls.maximize());
document.getElementById('close-btn').addEventListener('click', () => window.windowControls.close());

const content = document.querySelector('main');
content.append(createPreloader());

const modal = new Modal(updateContent);

// wait loading
window.api.onPush((result) => {
    if (result) {
        content.innerHTML = '';
        Card.createGrid();
        updateContent();
    }
});

async function updateContent() {
    Card.clearGrid();
    const data = await window.api.loadJson();
    for (const { name, ip } of data) {
        const card = new Card(name, ip);
        card.view();
    }
    Card.viewAddButton(modal);
}
