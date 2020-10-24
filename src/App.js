import './App.css';
import Deaths from './components/Deaths';
import QuotesContainer from './components/QuotesContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = ()=>{
  return(
    <div className="App">
      <h1>Home</h1>
      /deaths for deaths<br/>
      /quotes for quotes
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
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
