import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import EditBoard from './boards/EditBoard';
import ViewBoard from './boards/ViewBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBoard from './boards/addBoard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addboard" element={<AddBoard/>}/>
          <Route path="/editboard/:bno" element={<EditBoard />} />
          <Route path="/viewboard/:bno" element={<ViewBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
