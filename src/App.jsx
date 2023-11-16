
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Books } from "./pages/Books";
import { Exophony } from "./pages/Exophony";
import { ShortFiction } from "./pages/ShortFiction";
import { WritingResources } from "./pages/WritingResources";
import { Navbar } from "./components/Navbar";
import { Pirouettes } from "./pages/stories/Pirouettes";
import { LatestPost } from "./pages/stories/LatestPost";


import { HouseAndGarden } from "./pages/stories/HouseAndGarden";

function App() {
  return (
    <div className="container">
    <Router >
      <Navbar />
      <div className="pages">
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/shortFiction" element={<ShortFiction />} />
          <Route path="/writingResources" element={<WritingResources />} />
          <Route path="/exophony" element={<Exophony />} />
          <Route path="/pirouettes" element={<Pirouettes />} />
          <Route path="/latestPost" element={<LatestPost />} />
          <Route path="/houseAndGarden" element={<HouseAndGarden />} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
