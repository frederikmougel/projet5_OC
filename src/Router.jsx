import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemLogement from "./pages/ItemLogement";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="logement/:id" element={<ItemLogement />} />
        </Routes>
    );
};

export default Router;
