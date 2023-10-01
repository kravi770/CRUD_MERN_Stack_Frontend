import './App.css';

//Components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import RaviCRUD from './components/RaviCRUD';
import Allusers from './components/AllUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<RaviCRUD />} />
            <Route path="/all" element={<Allusers />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
