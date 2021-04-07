import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Exercise = props => {
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.exercise._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>Delete</a>
        </td>
    </tr>
}
export default class ExerciseList extends Component{
 
    constructor(props){
        super(props);

        this.deleteExercise =this.deleteExercise.bind(this);

        this.state = {exercises : []};

    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
             .then(response => {
                 this.setState({exercises: response.data})
             })
             .catch((error) => {
                 console.log(error);
             })
    }

    deleteExercise(id){
        axios.get('http://localhost:5000/exercises/'+id)
             .then(res => console.log(res.data))
             .catch((error) => {
                 console.log(error);
             })
             this.setState({
                exercises: this.state.exercises.filter(el => el._id !== id)
               })
    }

    exercsieList(){
       return this.state.exercises.map(currentexercises => {
        return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
       })
    }

    render(){
        return(
            <div className="container">
                <h3>Logged Exercise</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}