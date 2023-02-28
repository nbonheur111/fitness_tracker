import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addWorkout} from '../../utilites/user-functions.js';

export default class CreateWorkout extends Component {

  state = {
    username: '',
    workout: '',
    duration: '',
    description: '',
    date: ''
  }

  userInputRef = React.createRef();

  handleChange = (event) => {
    let propertyName = event.target.name;
    const value=event.target.value
    this.setState({
        [propertyName]: value,
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault(); // do not refresh the page
    console.log("submitting..")

    let data = {...this.state}
    delete data.confirm;
    data.workout =this.userInputRef.current.value //get selected value using ref

    let response = await addWorkout(data)
    console.log(response);
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>

        <h2>Log an Exercise</h2>

        <form autoComplete='off' onSubmit={this.handleSubmit}>

          <div style={{maxWidth:300}} className="form-group">
            <label>Username:</label>
            <input 
              type="text" 
              name='username'
              value={this.state.username} 
              onChange={this.handleChange} 
              required 
              className="form-control"
            />
          </div>

          <div style={{maxWidth:300}}>
            <label>Workout:</label>
            <select 
              ref={this.userInputRef}
              name='workout'
              required
              className="form-control"
              value={this.state.workout}
              onChange={this.handleChange}
            >
              <option value="">Select a workout</option>
              <option>Walk </option>
              <option>Run </option>
              <option>Cycle </option>
              <option>Hiking </option>
              <option>Swim </option>
              <option>Yoga </option>
            </select>
            
          </div>
           

          <div style={{maxWidth:300}} className="form-group">
            <label>Duration: </label>
            <input  
              type="number" 
              name='duration'
              value={this.state.duration} 
              onChange={this.handleChange}  
              className="form-control"
              required
            />
          </div>

          <div style={{maxWidth:300}} className="form-group">
            <label>Description:  </label> <br/>
            <textarea   
              rows="4" 
              cols="50" 
              type="text" 
              name='description' 
              value={this.state.description} 
              onChange={this.handleChange}
              className="form-control" 
              required
            />  
          </div>

          <div style={{maxWidth:300}} className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
};
