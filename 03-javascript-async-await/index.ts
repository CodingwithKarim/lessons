type User = {
    id: number;
    name: string;
}

// Returns a promise that resolves to an array of users because response.json() returns a promise
// fetch() => Promise<Response> and .then() => Promise<Response> => res.json() => Promise<Any> 
async function getUsersFromAPI(): Promise<User[]> {
    // Get Promise<Response> from fetch API
    const response = await fetch("http://localhost:3000/users");

    // .JSON() returns promise
    return response.json()
}

// getUsersFromAPI returns a Promise
// When using await in a async func, execution is paused in async func without blocking
async function fetchUsersWithAwait() {
    try {
        const users = await getUsersFromAPI();
        console.log("[Await] Users: ", users);
    } catch (err) {
        console.error("Error: ", err);
    }

    console.log("[Await] App function finished");
}

fetchUsersWithAwait();