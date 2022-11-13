import './App.css';
import Comments from './components/comments';
import Footer from './components/footer';
import Intro from './components/intro';
import Maps from './components/maps';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Maps/>
      <Comments/>
      <Footer/>
      
    </div>
  );
}

export default App;
