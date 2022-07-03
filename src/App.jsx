import {Navbar} from "./components/Navbar";
import {Routes , Route} from "react-router-dom";
import {Home} from "./components/Home"
import {Login} from "./components/Login";
import {Register} from "./components/Register";
function App() {
  return (
    <div>
           <Navbar />
           <Routes>
                <Route path = "/" element = {<Home/>}></Route>
                <Route path = "/register" element = {<Register/>}></Route>
                <Route path = "/login" element = {<Login/>}></Route>
           </Routes>
    </div>
  );
}

export default App;
