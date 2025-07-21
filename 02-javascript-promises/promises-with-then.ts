function getUserPromise(): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user: User = {
                id: 1,
                name: "Hakim"
            }
            resolve(user)
        }, 1000)
    })
}

function getPostsPromise(userID: number): Promise<Post[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 101, title: "First Post", userID },
                { id: 102, title: "Second Post", userID }
            ];

            resolve(posts)
        }, 1000)
    })
}

function getCommentsPromise(postID: number): Promise<PostComment[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments: PostComment[] = [
                { id: 201, text: "Nice post!", postID },
                { id: 202, text: "Very helpful", postID }
            ];

            resolve(comments)
        }, 1000)
    })
}

function AppWithMessyPromises() {
    // example using fetch but bad chaining
    getUserPromise().then((user) => {
        console.log("Got user:", user);

        getPostsPromise(user.id).then((posts) => {
            console.log("Got posts:", posts);

            getCommentsPromise(posts[0].id).then((comments) => {
                console.log("Got comments for first post:");
                comments.forEach(comment => console.log(comment))
            })
        })
    })
}

function AppWithCleanPromises() {
    // example chainging fetch in cleaner way | you can chain result of .then if each block is also returning a promise
    getUserPromise()
        .then(users => getPostsPromise(users.id))
        .then(posts => getCommentsPromise(posts[0].id))
        .then(comments => comments.forEach(comment => console.log(comment)))

    console.log("Hello other code firing")
}

AppWithCleanPromises();
// AppWithMessyPromises();

