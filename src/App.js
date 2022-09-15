import './App.css';
import Home from './Pages/Home';
import {ChakraProvider} from "@chakra-ui/react"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar/>
        <AllRoutes/>
        <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
