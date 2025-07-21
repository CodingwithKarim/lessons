export type User = {
    id: number;
    name: string;
}

export type Post = {
    id: number;
    title: string;
    userID: number;
}

export type PostComment = {
    id: number;
    text: string;
    postID: number;
};

function getUser(callback: (userID: number) => void): void {
    setTimeout(() => {
        const user: User = {
            id: 1,
            name: "Hakim"
        }

        callback(user.id)
    }, 1000)
}

function getPosts(userID: number, callback: (posts: Post[]) => void): void {
    setTimeout(() => {
        const posts = [
            { id: 101, title: "First Post", userID },
            { id: 102, title: "Second Post", userID }
        ];

        callback(posts)
    }, 1000)
}

function getComments(postID: number, callback: (comments: PostComment[]) => void): void {
    setTimeout(() => {
        const comments: PostComment[] = [
            { id: 201, text: "Nice post!", postID },
            { id: 202, text: "Very helpful", postID }
        ];

        callback(comments)
    }, 1000)
}

function App() {
    getUser((userID) => {
        console.log("👤 Got userID:", userID);

        getPosts(userID, (posts) => {
            console.log("Got posts:", posts);

            getComments(posts[0].id, (comments) => {
                console.log("Got comments for first post:");
                comments.forEach(comment => console.log(comment))
            })
        })
    })

    // line does not wait for getUser, getPosts, or getComments functions to finish.
    console.log("App function has finished running...")
}

App();