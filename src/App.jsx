import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import Events from "./Pages/Events/Events";
import Upload from "./Pages/Upload/Upload";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/events/:id' element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;