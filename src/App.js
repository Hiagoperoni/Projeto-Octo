import { Route, Routes } from 'react-router-dom';
import Clima from './Pages/Clima';
import Cep from './Pages/CEP';
import Form from './Pages/Form';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className='container h-screen w-screen mx-auto flex justify-center'>
      <Routes>
      <Route exact path="/" element= { <HomePage /> } />
        <Route exact path="/clima" element= { <Clima /> } />
        <Route exact path="/cep" element= { <Cep /> } />
        <Route exact path="/form" element= { <Form /> } />
      </Routes>
    </div>
  );
}

export default App;
