import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstComp from './html';

function App() {
  return (
    <div className="App">
     <div style={{display:"flex"}}>
      <Link to="/">
       HTML
      </Link>
      <button>CSS</button>
      <button>JS</button>
     </div>
     
     <Routes>
      <Route path='/' element={<FirstComp/>}/>
     </Routes>
    </div>
  );
}

export default App;
