import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import Events from "./components/Events/Events";

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