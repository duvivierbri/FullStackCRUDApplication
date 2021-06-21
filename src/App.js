import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import PageRender from './Components/Homepage';
import AllCampus from './Components/AllCampus';
import Homepage from './Components/Homepage';
import SingleCampus from './Components/SingleCampus';
import AllStudentsPage from './Components/AllStudentsPage';
import NewStudentForm from './Components/newStudentForm';
import AddCampus from './Components/AddCampus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="navigationMenu">
          <Link className="navigationMenuItems" to="/">Home</Link>
          <Link className="navigationMenuItems" to="/all-campus">All Campuses</Link>
          <Link className="navigationMenuItems" to="/all-students">All Students</Link>
        </div>
        
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/all-campus">
            <AllCampus />
          </Route>

          <Route path="/single-campus">
            <SingleCampus />
          </Route>

          <Route path="/all-students">
            <AllStudentsPage />
          </Route>

          <Route path="/add-student">
            <NewStudentForm />
          </Route>

          <Route path="/add-campus">
            <AddCampus />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
