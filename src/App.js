
import './App.css';
// import Life from './Life';
import Header from './Components/Header';
import Main1 from './Components2/Main1';
import Main3 from './Component3/Main3';
import Main4 from './Component4/Main4';
import Footer from './Component5/Footer';
import Zapros from './Axios';

function App() {
  return (
    <div className="App">
      {/* <Life/> */}
      <Header />
      <Main1 />
      <Main3 />
      <Main4/>
      <Footer/>
      <Zapros/>

    </div>
  );
}

export default App;
