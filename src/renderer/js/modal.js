export class Modal {

    init() {
        const modal = document.createElement('div');
        modal.className = 'modal';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'form-close-btn';
        closeBtn.innerHTML = `&times;`;

        closeBtn.addEventListener('click', () => {
            this.close();
        });

        modal.innerHTML = `
            <h2>Создание объекта</h2>
            <input type=""text placeholder="Введите имя">
            <input type=""text placeholder="Введите IP-адрес">
            <button class="btn-submit">Создать</button>
        `;
        modal.prepend(closeBtn);

        document.querySelector('main').append(modal);
        this.modal = modal;
    }

    close() {
        this.modal.remove();
    }

    handleClick(event) {

    }

    handleKeyDown(event) {

    }
}
