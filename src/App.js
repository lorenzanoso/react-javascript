import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Fibonacci from './pages/Fibonacci';
import PrimeNumber from './pages/PrimeNumber';
import Strings from './pages/Strings';
import MultiplicationTable from './pages/MultiplicationTable';
import SumNatural from './pages/SumNatural';
import SumDigits from './pages/SumDigits';
import MainContent from './components/MainContent';


function App(){
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/fibonacci' element={<Fibonacci />} />
          <Route path='/strings' element={<Strings />} />
          <Route path='/prime-numbers' element={<PrimeNumber />} />
          <Route path='/multiplication-table' element={<MultiplicationTable />} />
          <Route path='/sum-natural' element={<SumNatural />} />
          <Route path='/sum-digits' element={<SumDigits />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
