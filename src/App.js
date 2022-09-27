import react,{useContext, useEffect} from "react"
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Checkout } from "./components/Checkout/Checkout";
import { Login } from "./components/Login/Login";
import { GlobalContext } from "./context/GlobalState";
import { Orders } from "./components/Orders/Orders";
import {auth} from './firebase'
import {
  Routes,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  const {setUser}= useContext(GlobalContext)
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        setUser(authUser)
        // dispatch({
        //   type: "SET_USER",
        //   user: authUser,
        // });
      } else {
        // the user is logged out
        // dispatch({
        //   type: "SET_USER",
        //   user: null,
        // });
        setUser(null)
      }
    });
  }, []);
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
