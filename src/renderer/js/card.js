export class Card {

    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    setStatus(status) {

    }

    view(container) {
        const card = document.createElement('div');
        card.className = 'host-card';

        card.innerHTML = `
            <div class="host-card__header">
                <span class="status-badge status-badge--offline">
                    <span class="status-dot"></span>
                    Offline
                </span>
            </div>
            <div class="host-card__name" title="${this.name}">${this.name}</div>
            <div class="host-card__ip-box">
                <span class="host-card__ip-label">IPv4</span>
                <span class="host-card__ip">${this.ip}</span>
            </div>
        `;

        container.append(card);
    }
}

export function createButton() {
    const button = document.createElement('button');
    button.className = 'btn-add';
    button.ariaLabel = 'Добавить элемент';
    return button;
}
