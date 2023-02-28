import React, { useState, useEffect } from 'react';
import { workoutHistory } from '../../utilites/user-functions.js';

const WorkoutList = () => {
  const [workoutHistoryData, setWorkoutHistoryData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      const response = await workoutHistory();
      setWorkoutHistoryData(response.data); 
      console.log(response)
    };

    fetchData();
  }, []);

  return (
    <div>
      {workoutHistoryData ? (
        workoutHistoryData.map((workout) => (
          <div key={workout._id}>
            <h2>{workout.workout}</h2>
            <p>{workout.description}</p>
            <p>{workout.duration}</p>
            <p>{workout.date}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WorkoutList;
