// Real example of using Promises instead of relying on setTimeout to mimick
// Fetch returns a promise which we handle with then method with is chained in a flat manner
// You can download HSON-Server to run this code here: https://github.com/CodingwithKarim/hson-server

function fetchActualData() {
    fetch("http://localhost:3000/users")
        .then((response: Response) => response.json())
        .then((users: User[]) => {
            console.log("Got users:", users);
            return fetch(`http://localhost:3000/posts?userID=${users[0].id}`);
        })
        .then((response: Response) => response.json())
        .then((posts: Post[]) => {
            console.log("Got posts:", posts);
            return fetch(`http://localhost:3000/comments?postID=${posts[0].id}`);
        })
        .then((response: Response) => response.json())
        .then((comments: PostComment[]) => {
            console.log("Got comments for first post:");
            comments.forEach(comment => console.log(comment));
        })
        .catch(err => {
            console.error("❌ Error:", err.message);
        });

    console.log("App function finished executing, awaiting async results...")
}

fetchActualData();
