import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import axios from "axios";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Adduser from "./Users/Adduser";
import Edituser from "./Users/Edituser";
import Viewuser from "./Users/Viewuser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/edituser/:id" element={<Edituser/>}/>
          <Route path="/viewuser/:id" element={<Viewuser/>} />
          {/* <Route path="/deleteuser/:id" element={<Deleteuser/>} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
