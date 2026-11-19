import { createPreloader } from './preloader.js';
import { createButton } from './card.js';
import { createForm, deleteForm } from './form.js';

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
        const btn = createButton();
        content.append(btn);
        btn.addEventListener('click', () => {
            const form = createForm();
            content.append(form);
        });
        content.addEventListener('click', () => {
            console.log('aaa');
        });

        setTimeout(() => {
          console.log('test1');
      }, 5000);
    }
});

console.log('test2');