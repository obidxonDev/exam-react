import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import Home from './routes/home/Home'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
