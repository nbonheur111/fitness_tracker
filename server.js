const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
require('./config/database');
const bcrypt = require('bcrypt');

//import models
const User = require('./models/user.js');
const Workout = require('./models/workout.js')

const path = require('path');
const logger = require('morgan');
const cors = require('cors');



const app = express()


// access
app.use(cors({
    origin: "*"
}));

// logs the different requests to our server
app.use(logger('dev'));

//parse stringified objects (JSON)
app.use(express.json());

// server build folder
app.use(express.static(path.join(__dirname, 'build')));



//------------------ROUTES-----------------------


//route to get workout
app.get('/users/history', async(req, res) => {
    console.log(req.body);

    try {
        const workout = await Workout.find({});
        // console.log(workout);
        res.json(workout)
    
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
        
    }
})


//get users
app.get('/get_users', async(req, res) => {
    console.log(req.body);

    try {
        const users = await User.find();
        console.log(users);
        res.json(users)
    
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
        
    }
})



//add a new user
app.post('/signup',async(req, res) => {
    console.log(req.body)
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    // use User model to place user in the database

    try {
        let userFromCollection = await User.create({

            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        })
        console.log(userFromCollection);
        res.json("user created")
        
    } catch (err) {
        res.status(400).json(`Error: ${err}`);
        
    }

  
} );






//route to create a workout

app.post('/users/create_workout', async(req, res) => {

    console.log(req.body)

    try {
        let workoutFromCollection = await Workout.create({
            username: req.body.username,
            workout:req.body.workout,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.date
        })

        console.log(workoutFromCollection);
        res.json('Workout created successfully!')
        
    } catch (err) {
        res.status(400).json(`Error: ${err}`)
        
    }
})

//delete users

app.delete("/delete_user/:userId", async(req, res) => {
    
    let id = req.params.userId

    let response = await User.findByIdAndDelete(id);
    console.log(response);
    res.send({data: `${response.username} is deleted from the database`})
})
//delete workout


app.delete("/delete_workout/:workoutId", async(req, res) => {
    
    let id = req.params.workoutId

    let response = await Workout.findByIdAndDelete(id);
    console.log(response);
    res.send({data: `This workout has been deleted from the database..`})
})


//update users

app.put('/update_user/:userId',async(req, res) => {

    let id = req.params.userId // to test the route with thundercloud. id will be req.body.id from frontend

    let hashedPassword = await bcrypt.hash(req.body.password, 10);

    let newValues={
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword

    }
    let response = await User.findByIdAndUpdate(id, newValues, {new:true});
    console.log(response);
    res.send(response)
})

//update workout
app.put('/update_workout/:workoutId',async(req, res) => {
    let id = req.params.workoutId;
    

    let newValues={
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    }
    let response = await Workout.findByIdAndUpdate(id, newValues, {new:true});
    console.log(response);
    res.send(response)
})




app.listen(5000, () => {
    console.log(`Server is Listening on 5000...`)
})