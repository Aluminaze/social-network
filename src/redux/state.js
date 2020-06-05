import { rerenderEntireThree } from "../render"

let state = {
    posts: [
        { id: 0, message: "I'm create this application with React technology!", likesCount: 23 },
        { id: 0, message: "It's my second post on my page :)", likesCount: 12 },
        { id: 0, message: "It's my first post on my page. WoW!!!", likesCount: 5 },
        { id: 0, message: "Hi!", likesCount: 1 },
        { id: 0, message: "Hi!", likesCount: 1 },
        { id: 0, message: "Hi!", likesCount: 1 },
        { id: 0, message: "Hi!", likesCount: 1 },
        { id: 0, message: "Hi!", likesCount: 1 },
        { id: 0, message: "Hi!", likesCount: 1 },
        { id: 0, message: "Hi!", likesCount: 1 },
        { id: 0, message: "Hi!", likesCount: 1 }
    ],
    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Whatsaaaaaaap?" }
    ],
    dialogs: [
        { id: 1, name: "Alexa" },
        { id: 2, name: "Thomas" },
        { id: 3, name: "Jessi" },
        { id: 4, name: "Brad" },
        { id: 5, name: "Angel" },
        { id: 6, name: "Bessy" },
        { id: 7, name: "Vegas" }
    ]
}

export let addPost = (newMessage) => {
    let newPost = {
        id: 0,
        message: newMessage,
        likesCount: 0
    }

    state.posts.push(newPost)

    rerenderEntireThree(state);
}

export default state;