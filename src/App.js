import './App.css';
import Deaths from './components/Deaths';
import QuotesContainer from './components/QuotesContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = ()=>{
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
          <Route path="/" exact component={Home}/>
          <Route path = "/quotes" component = {QuotesContainer}/>
          <Route path = "/deaths" component = {Deaths}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
