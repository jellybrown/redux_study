const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
        id: 1,
        title: '안녕',
        body: '안녕 바보',
    },
    {
        id: 2,
        title: '헤헤',
        body: '헤헤 헤헤헤',
    },
    {
        id: 3,
        title: '뀨뀨',
        body: '히히히히',
    },
]

export const getPosts = async () => {
    await sleep(500);
    return posts;
}

export const getPostById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id);
}