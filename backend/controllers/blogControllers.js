const Blog = require("../models/blog");
//create function of api route

//Get all blogs
const getAllBlogs = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            //send to FE array of all blogs
            res.json(result);
        })   
        .catch(err => {
            console.log(err);
        })
}

//Get blog detail by id
const getBlogDetail = (req, res) => {
    const {id} = req.params;
    Blog.findById(id)
        .then(result => {
            res.json(result);
        })
}

//Post new blog
const createBlog = (req, res) => {
    //create new document
    const newBlog = new Blog(req.body);

    newBlog.save()
        .then((result) => {
            res.json({ newBlog });
        })
        .catch(err => {
            console.log(err);
        })
}

//Delete blog by id
const deleteBlog = (req, res) => {
    const { id } = req.params;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
}


module.exports = {
    getAllBlogs,
    getBlogDetail,
    createBlog,
    deleteBlog
}
