import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products';
import RoutingComp from './Components/RoutingComp/RoutingComp';

function App() {
  return (
    <div className="App">
     <Navbar />
     <RoutingComp />
     <Products />
    </div>
  );
}

export default App;
