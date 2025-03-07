import express from "express";
import bodyParser from "body-parser";
import { protect } from "./modules/auth";
import cors from 'cors'
import morgan from 'morgan'
import router from "./routes";


const app = express();
const PORT = 5000;

app.use(cors())
app.use(morgan('dev'))

// Middleware to parse JSON requests
app.use(bodyParser.json())


// Create a To-Do (POST)


// home page

app.get("/", (req, res)=>{
    res.json({message: 'Hello, welcome to the app'})
})



app.use('/api', protect, router)

export default app