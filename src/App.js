import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PageRender from './Components/Homepage';
import AllCampus from './Components/AllCampus';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/all-campus">All Campuses</Link>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/all-campus">
            <AllCampus />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
