import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
