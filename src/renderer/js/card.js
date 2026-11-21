export class Card {

    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    setStatus(status) {

    }

    static createGrid() {
        const grid = document.createElement('div');
        grid.className = 'hosts-grid';
        document.querySelector('main').append(grid);
        Card.grid = grid;
    }

    static clearGrid() {
        Card.grid.innerHTML = '';
    }

    view() {
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

        Card.grid.append(card);
    }

    static viewAddButton(modal) {
        const btn = document.createElement('button');
        btn.className = 'btn-add';
        btn.ariaLabel = 'Add host';

        btn.addEventListener('click', () => {
            modal.init();
        });

        const card = document.createElement('div');
        card.className = 'host-card';
        card.id = 'add-btn-card';
        card.append(btn);

        Card.grid.append(card);
        return btn;
    }

}
