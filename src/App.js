
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import Squad from './pages/Squad';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <main className="App-main">

        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/squad' element={<Squad />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>

      </main>
    </div>
  );
}

export default App;
