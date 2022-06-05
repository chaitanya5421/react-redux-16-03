import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutingComp from './Components/RoutingComp/RoutingComp';

function App() {
  return (
    <div className="App">
     <Navbar />
     <RoutingComp />
    </div>
  );
}

export default App;
