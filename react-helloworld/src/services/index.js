import Post from './Post';
import Get from './Get';
import Put from './Put';
import Delete from './Delete';


// POST
const postNewsBlog = (data) => Post('posts', false, data);

// PUT
const updateNewBlog = (data, id) => Put(`posts/${id}`, false, data);

// DELETE
const deleteNewBlog = (id) => Delete(`posts/${id}`, false);

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);


const API = {
    updateNewBlog,
    postNewsBlog,
    deleteNewBlog,
    getNewsBlog,
    getComments
}

export default API;

