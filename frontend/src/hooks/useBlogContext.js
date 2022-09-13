import { useContext } from "react";
import { blogContext } from "../contexts/blogContext";

export const useBlog = () => useContext(blogContext);