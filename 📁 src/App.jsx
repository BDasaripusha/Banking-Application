import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transfer from "./pages/Transfer";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/deposit" element={<Deposit/>}/>

<Route path="/withdraw" element={<Withdraw/>}/>

<Route path="/transfer" element={<Transfer/>}/>

<Route path="/transactions" element={<Transactions/>}/>

<Route path="/profile" element={<Profile/>}/>

<Route path="*" element={<NotFound/>}/>

</Routes>

<Footer/>

</BrowserRouter>

)

}

export default App;
