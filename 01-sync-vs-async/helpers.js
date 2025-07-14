// Synchronous: blocks the main thread for the given number of seconds
export function blockForSeconds(seconds) {
    const end = Date.now() + seconds * 1000;
    while (Date.now() < end) {
    }
    return `Done blocking for ${seconds} seconds.`;
}

// Asynchronous: returns a Promise that resolves after the given number of seconds
export function nonBlocking(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Done sleeping asynchronously for ${seconds} seconds.`);
        }, seconds * 1000);
    });
}

// Logs a message with a timestamp
export function log(message) {
    console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}
