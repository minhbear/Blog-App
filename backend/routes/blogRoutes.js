const express = require("express");
const router = express.Router();
const blogControllers = require('../controllers/blogControllers')

router.get('/', blogControllers.getAllBlogs);
router.post('/create', blogControllers.createBlog);
router.get('/:id', blogControllers.getBlogDetail);
router.delete('/:id', blogControllers.deleteBlog);

module.exports = router
