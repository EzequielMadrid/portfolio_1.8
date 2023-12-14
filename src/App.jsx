import Hub from "./pages/Hub";
import Profile from "./pages/Profile";
import Repositories from "./pages/Repositories";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </Router>
  );
}

export default App;
