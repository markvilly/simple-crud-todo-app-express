import app from "./index";
import dotenv from 'dotenv'
dotenv.config()

app.listen(8000, ()=>{
    console.log('Server active: http://localhost:8000')
})