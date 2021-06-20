import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

//Importing components
import NewStudentForm from './newStudentForm';
import AllStudentsPage from './AllStudentsPage';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/newstudent">
              <NewStudentForm/>
            </Route>

            <Route path="/allstudents">
              <AllStudentsPage/>
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
      
      
    );
  }
}

export default App;
