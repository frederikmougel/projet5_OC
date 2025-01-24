import { Route, Routes } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './styles/App.scss'
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
