import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import Events from "./Pages/Events/Events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path={'/'}></Route>
        <Route element={<Events />} path='/events'></Route>
      </Routes>
    </Router>
  );
};

export default App;