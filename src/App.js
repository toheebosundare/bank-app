
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// components
import Home from './pages/Home';
// import SigninPage from './pages/SigninPage';


// styles
import './App.css';
import SigninPage from './pages/signinPage/SigninPage';
import Navbar from './components/Navbar';




function App() {
  return (
   <BrowserRouter>
   
    <Switch>
      
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/signin'>
        <SigninPage />
      </Route>
      </Switch>
    </BrowserRouter>
    
     
    
  );
}

export default App;
