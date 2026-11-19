const fs = require('fs');

class Store {
    
    constructor(filePath) {
        this.filePath = filePath;
    }

    save(data) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    load() {
        try {
            if (fs.existsSync(this.filePath)) {
                const rawData = fs.readFileSync(this.filePath, 'utf-8');
                return JSON.parse(rawData);
            }
            return null;
        } catch (error) {
            console.error('Ошибка чтения JSON:', error);
            return null;
        }
    }
}

module.exports = Store;
