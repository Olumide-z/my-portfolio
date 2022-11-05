import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
