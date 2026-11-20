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
        const hostsGrid = document.createElement('div');
        hostsGrid.className = 'hosts-grid';
        renderHosts(hostsGrid);
    }
});

function renderHosts(container) {
    //test
    const data = [
        {name: 'prod1', ip: '10.0.0.1'},
        {name: 'prod2', ip: '192.168.0.1'},
        {name: 'prod3', ip: '127.1.1.1'},
    ];

    const hostsGrid = document.createElement('div');
    hostsGrid.className = 'hosts-grid';
    content.append(hostsGrid);

    for (const item of data) {
        const card = new Card(item['name'], item['ip']);
        card.view(hostsGrid);
    }

    const formAddBtn = Card.viewAddButton(hostsGrid);
    formAddBtn.addEventListener('click', () => {
        const modal = new Modal();
        modal.init();
    });

}

function renderAddBtn(container) {
    
}

//function renderContent() {
    // const btn = createButton();
    // btn.addEventListener('click', () => {
    //     console.log('btn click!');
    //     //test
    //     const myData = { name: 'test', ip: '0.0.0.0', items: ['task1', 'task2'] }
    //     const result = window.api.saveJson(myData);
    //     if (result.success) {
    //         console.log('Данные успешно сохранены!');
    //     }
    // });
    // content.append(btn);

