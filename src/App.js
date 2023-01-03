import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import View from './pages/View';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path='/view' element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
