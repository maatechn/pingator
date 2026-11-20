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
            <h2>Creating host</h2>
            <input type=""text placeholder="Enter name of host">
            <input type=""text placeholder="Enter IP address">
            <button class="btn-submit">Create</button>
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
