import Home from "./pages/Home";
import Review from "./pages/Review";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
