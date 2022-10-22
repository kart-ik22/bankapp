import {BrowserRouter,Routes,Route} from "react-router-dom";      //to avoid unneccesary div
import { Home } from './component/Home';
import { Nav } from "./component/Nav";
import { Banking } from "./component/Banking/Banking";
import { Cards } from "./component/cards/Cards";
import { Loans } from "./component/Loans/Loans";
import { Support } from "./component/Support";
import { Registration } from "./component/Banking/Registration";
import { Login } from "./component/Banking/Login";
import "./component/Common.css"

function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/banking" element={<Banking/>} />
          <Route path="/card" element={<Cards/>}/>
          <Route path="/loan" element={<Loans/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
