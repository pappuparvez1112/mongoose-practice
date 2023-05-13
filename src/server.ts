import app from './app'
import mongoose from 'mongoose'

const port:number = 5000

//database connection

async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');

    console.log('database connect');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
      })
    }catch(err){
        console.log(`connection failed`,err);
    }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  main();



