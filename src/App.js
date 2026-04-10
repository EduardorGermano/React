import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

  

  return (
    <div>
      <Header title="Exemplo"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/form/:id" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
