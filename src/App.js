import './App.css';
import Deaths from './components/Deaths';
import QuotesContainer from './components/QuotesContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import firebase from './firebase';
import Characters from './components/Characters';

const Home = ()=>{
  const ref = firebase.firestore().collection("Todos");
  console.log(ref);
  return(
    <div className="App">
      <h1>Home</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Characters}/>
          <Route path = "/quotes" component = {QuotesContainer}/>
          <Route path = "/deaths" component = {Deaths}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
