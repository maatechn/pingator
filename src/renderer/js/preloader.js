export function createPreloader() {

    const container = document.createElement('div');
    container.className = 'preloader';

    const spinner = document.createElement('div');
    spinner.className = 'spinner';

    const label = document.createElement('div');
    label.textContent = 'App loading...';

    container.append(spinner, label);
    return container;
}