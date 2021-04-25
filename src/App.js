import './index.css';
import Login from './components/Login'
import Register from './components/Register'
import Chat from './components/Chat'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import FindMentors from './components/FindMentors';


function App() {
  return (
    <Router> 
    <Route path='/' exact render={()=> <Login/>}  />
    <Route path='/login' exact render={()=> <Login/>} />
    <Switch>
        <Route path='/sign-up' exact render={()=> <Register/>}/>
        <Route path='/find-mentors' render={() => <FindMentors/>}  />
    </Switch>


    </Router>
  );
} 

export default App;
