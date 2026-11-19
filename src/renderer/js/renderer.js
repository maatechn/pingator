import { createPreloader } from './preloader.js';
import { createButton } from './card.js';
import { createForm, deleteForm } from './form.js';

// header buttons handlers
document.getElementById('min-btn').addEventListener('click', () => window.windowControls.minimize());
document.getElementById('max-btn').addEventListener('click', () => window.windowControls.maximize());
document.getElementById('close-btn').addEventListener('click', () => window.windowControls.close());

const content = document.querySelector('main');
content.append(createPreloader());

function renderContent() {
    const btn = createButton();
    btn.addEventListener('click', () => {
        console.log('btn click!');
        //test
        const myData = { name: 'test', ip: '0.0.0.0', items: ['task1', 'task2'] }
        const result = window.api.saveJson(myData);
        if (result.success) {
            console.log('Данные успешно сохранены!');
        }
    });
    content.append(btn);
}

// wait loading
window.api.onPush((result) => {
    if (result) {
        content.innerHTML = '';
        renderContent();
    }
});
