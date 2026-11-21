export class Modal {

    constructor(onSaveCallback) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        this.modal = modal;
        this.onSaveCallback = onSaveCallback;
    }

    init() {
        this.modal.innerHTML = '<h2>Creating host</h2>';
        this.renderCloseBtn()
        this.renderNameInput()
        this.renderIpInput()
        this.renderCreateBtn()
        document.querySelector('main').append(this.modal);
    }

    close() {
        this.modal.remove();
    }

    renderCloseBtn() {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'form-close-btn';
        closeBtn.innerHTML = `&times;`;

        closeBtn.addEventListener('click', () => {
            this.close();
        });
        this.modal.append(closeBtn);
    }

    renderNameInput() {
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Enter name of host';

        nameInput.addEventListener('input', () => {
            console.log('test input name');
        });
        this.nameInput = nameInput;
        this.modal.append(nameInput);
    }

    renderIpInput() {
        const IpInput = document.createElement('input');
        IpInput.type = 'text';
        IpInput.placeholder = 'Enter IP address';

        IpInput.addEventListener('input', () => {
            console.log('test inmup ip');
        });
        this.IpInput = IpInput;
        this.modal.append(IpInput);
    }

    renderCreateBtn() {
        const createBtn = document.createElement('button');
        createBtn.className = 'btn-submit';
        createBtn.innerHTML = 'Create';

        createBtn.addEventListener('click', async () => {

            const data = await window.api.loadJson();
            console.log(data);
            data.push({ name: this.nameInput.value, ip: this.IpInput.value });

            const result = await window.api.saveJson(data);
            if (result.success) {
                console.log('cb: ' + this.onSaveCallback);
                await this.onSaveCallback();
                this.close();
            }
        });
        this.modal.append(createBtn);
    }

    handleClick(event) {

    }

    handleKeyDown(event) {

    }
}
