
import mongoose  from 'mongoose'


  export  const dbConecction =   mongoose.connect ("mongodb://localhost:27017/catsDb").then(() =>{
    console.log("Connect success!");
})
