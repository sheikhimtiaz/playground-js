console.log(
    "Hello!", 123
);

const myArr = [1, 1, 1, 2, 3, 4, 4, 5, 5];
const sorted = [...new Set(myArr)].sort((a, b) => b - a);

console.log(sorted);

const deepClone = obj => JSON.parse(JSON.stringify(obj));

const complexObj = {
    user: {
        name: 'Alex',
        date: new Date()
    },
    scores: [1, 2, [3, 4]],
    active: true
};

const cloned = deepClone(complexObj);

function manualDeepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = manualDeepClone(obj[key]);
        }
    }
    return clone;
}

const formatDate = date => new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short'
}).format(date);

const now = new Date();
console.log(formatDate(now));
// Output: "Thursday, December 3, 2024 at 2:30 PM"

// Want a different format? Easy:
const shortDate = date => new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
}).format(date);
// Output: "Dec 3, 2024"

function formatDateManually(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    return `${dayName}, ${monthName} ${day}, ${year} at ${hours % 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}





