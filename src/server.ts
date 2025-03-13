// This is your server file :)

import express, {Request, Response} from 'express'
import pageRouter from './/routes/page.routes'
import path from 'path' 
import dotenv from 'dotenv'
dotenv.config()

const app = express()



//view engine set to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..src/views'))

//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))

//routes
app.use('/', pageRouter)

//404 Fallback
app.use((req: Request, res: Response) => {
    res.status(404).send('Page not found')
})


//Start server
const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})