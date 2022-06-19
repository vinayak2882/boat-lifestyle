
import './App.css';
import AllRoutes from './components/AllRoutes';
import { Footer } from './components/Footer/Footer';
import Navbar_01 from './components/Navbar';
import { Navbar } from './components/navbar/Navbar';




function App() {
  return (
   <>
 <Navbar/>
 {/* <Navbar_01/> */}
   <AllRoutes/>
      <Footer/>
   </>
  );
}
 
export default App;
