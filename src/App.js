import logo from './logo.svg';
import './App.css';
import SearchStudent from './components/SearchStudent';
import AddStudent from './components/AddStudent';
import ViewAll from './components/ViewAll';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}/>
      <Route path='/SearchStudent' element={<SearchStudent/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
