export class Modal {

    constructor(id) {
        this.id = id;
    }

    init() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = this.id;

        modal.innerHTML = `
            <button class="form-close-btn" title="Close">&times;</button>
            <h2>Создание объекта</h2>
            <input type=""text placeholder="Введите имя">
            <input type=""text placeholder="Введите IP-адрес">
            <button class="btn-submit">Создать</button>
        `;

        return modal;
    }

    close() {
        document.getElementById(this.id).remove()
    }
}
