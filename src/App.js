import logo from './logo.svg';
import React, {  Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkoutList from './components/workout_list';
import EditWorkout from './components/edit_workout';
import CreateWorkout from './components/create_workout';
import CreateUser from './components/create_user';
import Playlist from './components/playlist'
import Navbar from './components/navbar';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' exact element={<WorkoutList />} />
        <Route path='/edit/:id'  element={<EditWorkout />} />
        <Route path='/create'  element={<CreateWorkout />} />
        <Route path='/create_user'  element={<CreateUser />} />
        <Route path='/playlist' element={<Playlist />} />
        {/* <Route path="/*" element={<Navigate to="/workout" />} /> */}

      </Routes>
  
    </div>
  );
}

export default App;
