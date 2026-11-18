import { createPreloader } from './preloader.js';

const content = document.querySelector('main');
content.innerHTML = '';
content.append(createPreloader());
