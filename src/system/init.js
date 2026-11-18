const { execFileSync } = require('child_process');

const checker = process.platform === 'win32' ? 'where' : 'which';

function checkUtil(name) {
  try {
    execFileSync(checker, [name], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function launchPermited() {
    return checkUtil('ping') && checkUtil('nc');
}

module.exports = { launchPermited };
