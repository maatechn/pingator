export function createForm() {

    const container = document.createElement('div');
    container.className = 'modal';

    const form = document.createElement('form');
    form.innerHTML = `
        <button class="form-close-btn" title="Close">&times;</button>
        <h2>Создание объекта</h2>
        <input type=""text placeholder="Введите имя">
        <input type=""text placeholder="Введите IP-адрес">
        <button class="btn-submit">Создать</button>
    `;

    container.append(form);
    return container;

}

export function deleteForm() {

    const container = document.getElementsByClassName('modal');
    container.remove();

}