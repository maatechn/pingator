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

    // get data
    const data = await window.api.loadJson();
    for (const { name, ip } of data) {
        const card = new Card(name, ip);
        card.view();
    }

    Card.viewAddButton(Modal);

}
