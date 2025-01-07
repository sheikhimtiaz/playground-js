const store = key => ({
    get: () => JSON.parse(localStorage.getItem(key)),
    set: data => localStorage.setItem(key, JSON.stringify(data)),
    remove: () => localStorage.removeItem(key)
});

// Use it like this:
const userStore = store('user');

// Save data
userStore.set({
    id: 1,
    name: 'John',
    preferences: {
        theme: 'dark'
    }
});

// Get data
const userData = userStore.get();

// Remove data
userStore.remove();

function handleLocalStorage(key) {
    return {
        get: function() {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.error('Error reading from localStorage', e);
                return null;
            }
        },
        set: function(data) {
            try {
                localStorage.setItem(key, JSON.stringify(data));
            } catch (e) {
                console.error('Error writing to localStorage', e);
            }
        },
        remove: function() {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                console.error('Error removing from localStorage', e);
            }
        }
    };
}


