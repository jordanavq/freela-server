const mongoose = require("mongoose");

//connection to database
const connect = async () => {
  const connection = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Database connected:${connection.connections[0].name}`);
};

connect();
