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

function renderContent() {

    Card.createGrid();

    //test data
    const data = [
        {name: 'prod1', ip: '10.0.0.1'},
        {name: 'prod2', ip: '192.168.0.1'},
        {name: 'prod3', ip: '127.1.1.1'},
    ];

    for (const item of data) {
        const card = new Card(item['name'], item['ip']);
        card.view();
    }

    Card.viewAddButton(Modal);

}
