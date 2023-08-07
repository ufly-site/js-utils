class LocalStorageUtil {
    // 保存数据到LocalStorage
    static setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error while saving to LocalStorage:', error);
        }
    }

    // 从LocalStorage获取数据
    static getItem(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error while getting data from LocalStorage:', error);
            return null;
        }
    }

    // 从LocalStorage删除数据
    static removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error while removing data from LocalStorage:', error);
        }
    }

    // 清空LocalStorage中的所有数据
    static clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error while clearing LocalStorage:', error);
        }
    }
}

// 使用示例
LocalStorageUtil.setItem('username', 'John Doe');
LocalStorageUtil.setItem('isLoggedIn', true);

const username = LocalStorageUtil.getItem('username');
console.log('Username:', username);

LocalStorageUtil.removeItem('isLoggedIn');

LocalStorageUtil.clear();
