
import './App.css';
import Register from './Register';
import { Route,Routes } from 'react-router-dom';
import Login from './Login ';
import View from './View';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
