
import './App.css';
import Footer from './compents/Footer/Footer';
import ListMovies from './compents/LIstMovies/ListMovies';
import Navbar from './compents/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ListMovies/>
    
     <Footer/>
    </div>
  );
}

export default App;
