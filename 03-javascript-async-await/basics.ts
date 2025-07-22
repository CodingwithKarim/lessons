// Any function marked as async will automatically return a Promise.
// In Typescript, imagine the async keyword as auto adding Promise return value to function
// This func is equiv to () => new Promise((resolve, _) => {resolve("Hello World"); })
async function helloWorld(): Promise<string> {
    return "Hello World!"
}

async function App(){
    const value = await helloWorld();

    console.log("Value is", value);
}