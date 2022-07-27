import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';

function App() {

  return (
    <div className="container">
      <Router>
          <NavBar/>
          <Routes>
              <Route exact path="/" element={<ListPage/>}/>
              <Route exact path="/add" element={<CreatePage/>}/>
          </Routes> 
      </Router>
    </div>
  )
}

export default App
