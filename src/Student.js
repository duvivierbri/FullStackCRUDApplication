import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { returnCurrentEditStudent, returnSingleStudent } from '../actions';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Student extends Component {
  constructor(props){
    super(props);

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onViewStudent = this.onViewStudent.bind(this);
  }

  onViewStudent = (event) => {
    this.props.returnSingleStudent(this.props.id);
  }

  onEdit = (event) => {
    this.props.returnCurrentEditStudent(this.props.id);
  }

//   onDelete = (event) => {
//     axios.delete('http://localhost:3000/students/'+this.props.id)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//     window.location.replace('studentlisting');
//   }

  render(){
    return(
      <div className="column four wide" style={{margin: '4%'}}>
        <div className="cardContent">
              <div className="header">{this.props.student}</div>
                <button className="ui button" onClick={this.onViewStudent}> View Student </button>
            </div>
              <div className="twoButtons">
                <div className="editButton" onClick={this.onEdit}>
                  <Link to='/editstudent'>
                    Edit
                  </Link>
                </div>
                <div className="deleteButton" onClick={this.onDelete}>Delete</div>
              </div>
      </div>
    );
  }
}

export default connect(null, { returnCurrentEditStudent, returnSingleStudent })(Student);