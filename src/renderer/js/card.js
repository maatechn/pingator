export function createButton() {
    const button = document.createElement('button');
    button.className = 'btn-add';
    button.ariaLabel = 'Добавить элемент';
    return button;
}