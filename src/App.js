import './App.css';
import Home from './pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Header from './pages/shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/privateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute exact path="/booking/:serviceId">
            <Booking></Booking>
        </PrivateRoute>
        
        <Route exact path="/login">
        <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </Router>
     </AuthProvider>
    
    </div>
  );
}

export default App;
