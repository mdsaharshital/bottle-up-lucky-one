
import './App.css';
import Header from './Components/Header/Header';
import Questions from './Components/Questions/Questions';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Shop></Shop>
     <Questions></Questions>
    </div>
    
  );
}

export default App;
