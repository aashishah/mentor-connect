
import Login from './components/Login'
import Register from './components/Register'
import Chat from './components/Chat'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import FindMentors from './components/FindMentors';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router> 
      <Route path='/' exact render={()=> <Login/>}  />
      <Route path='/login' exact render={()=> <Login/>} />
      <Switch>
          <Route path='/sign-up' exact render={()=> <Register/>}/>
          <Route path='/find-mentors' render={() => <FindMentors/>}  />
      </Switch>


      </Router>
    </div>
    
    
  );
} 

export default App;
