import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Create from "./pages/Create";
import Home from "./pages/Home";
import _404 from "./pages/_404";
import { useBlog } from './hooks/useBlogContext';
import DetailBlog from "./components/DetailBlog";

function App() {
  const { blogs } = useBlog();
  console.log(blogs)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<DetailBlog />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
