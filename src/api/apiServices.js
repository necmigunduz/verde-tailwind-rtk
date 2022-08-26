import http from './http-common';

const getAllPosts = () => {
    return http.get('/posts')
}

const ApiServices = {
    getAllPosts,
}

export default ApiServices;