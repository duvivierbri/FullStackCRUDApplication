import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
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
        <Link to="/">Home</Link>
        <Link to="/all-campus">All Campuses</Link>
        <Link to="/all-students">All Students</Link>

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
