import Navbar from './Link/Navbar';
import Footer from './Component/Footer';
import './App.css';
import UserContainer from  './Containers/UserContainer'
import AddToCartContainer from './Containers/AddToCartContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <UserContainer/>
      <AddToCartContainer/>
      <Footer/>
    </div>
  );
}

export default App;
