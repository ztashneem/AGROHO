import logo from './logo.svg';
import './App.css';
import Shop from './components/shop/Shop';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <h1>Hello Agroho</h1>
     <Shop></Shop>
    </div>
  );
}

export default App;
