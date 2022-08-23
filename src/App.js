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
import NumberRange from './pages/NumberRange';
import RightTriangle from './pages/RightTriangle';
import Triangle from './pages/Triangle';
import NumberTriangle from './pages/NumberTriangle';
import LargestNumber from './pages/LargestNumber';
import CountVowels from './pages/CountVowels';
import NumberIscoceles from './pages/NumberIscoceles';
import RandomName from './pages/RandomName';

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
          <Route path='/number-range' element={<NumberRange />} />
          <Route path='/right-triangle' element={<RightTriangle />} />
          <Route path='/triangle' element={<Triangle />} />
          <Route path='/number-triangle' element={<NumberTriangle />} />
          <Route path='/largest-number' element={<LargestNumber />} />
          <Route path='/count-vowels' element={<CountVowels />} />
          <Route path='/number-iso' element={<NumberIscoceles />} />
          <Route path='/random-name' element={<RandomName />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
