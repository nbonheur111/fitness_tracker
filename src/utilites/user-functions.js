import axios from 'axios';

// utilites folder is for universal, reusable functions
export const addWorkout = async (formData) => {

        let serverResponse = await axios({
            method: "POST",
            url: "/users/create_workout", // route to do signup
            data: formData
        });

    return serverResponse;
}

export const workoutHistory = async () => {
    try {
        let serverResponse = await axios({
            method: "GET",
            url: "/users/history"
        })
        console.log(serverResponse)
        return serverResponse;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}





