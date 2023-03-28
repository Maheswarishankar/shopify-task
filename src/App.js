import Navbar from './Components/Navbar';
import './App.css';
import Header from './Components/Header';
import { Productdata } from './Components/Productdata';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Navbar data={{ count, setCount }} />
      <Header />
      <Productdata count={count} setCount={setCount} />
      <Footer />

    </div>
  );
}

export default App;
