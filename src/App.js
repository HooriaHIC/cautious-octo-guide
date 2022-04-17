import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <nav>
        <h1 to="/">Blog Articles </h1>
        <Link to="/Create">Create Article</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/articles/:articleId" element={<Show />} />
        <Route path=":articleId/edit" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
