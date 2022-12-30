import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Form from './Components/Form/Form';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
