const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byID: (id: string) => urls.users.base + '/' + id
    },

    posts: {
        base: '/posts',
        byID: (id: string) => urls.posts.base + '/' + id
    }
}

export {baseURL ,urls}