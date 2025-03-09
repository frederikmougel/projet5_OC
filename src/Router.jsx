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
            <Route path="logement/:id" element={<ItemLogement />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
