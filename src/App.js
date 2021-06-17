import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

import StudentListing from './StudentListing';
import NewStudentForm from './NewStudentForm';
import EditStudentForm from './EditStudentForm';
import SingleViewStudent from './SingleViewStudent';
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Route path ="/" exact render = {
            () => {
              return (<Home />);
            }
          }/>
          <Route path ="/studentlisting" exact render = {
            () => {
              return (<StudentListing />);
            }
          }/>
          <Route path ="/newstudent" exact render = {
            () => {
              return (<NewStudentForm />);
            }
          }/>
          <Route path ="/editstudent" exact render = {
            () => {
              return (<EditStudentForm />);
            }
          }/>
          <Route path ="/singlestudent" exact render = {
            () => {
              return (<SingleViewStudent />);
            }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
