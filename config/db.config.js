const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://jordanavq:hello12@cluster0.zjc9j.mongodb.net/freela?retryWrites=true&w=majority'

const connect = async() => {
    const connection = await mongoose.connect(MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true});
    console.log(`Database connected:${connection.connections[0].name}`);
};

connect();
