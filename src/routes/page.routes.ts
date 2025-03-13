import {Router, Request, Response} from 'express'
import {title} from 'process'

const pageRouter = Router()

//Home
pageRouter.get("/", (req: Request, res: Response) => {
    res.status(200).render('home', {
        title: 'Kingdom of the Sun'//home
    })
})

//about
pageRouter.get("/about", (req: Request, res: Response) => {
    res.status(200).render('about', {
        title: 'About the sun'//about
    })
})

//contact
pageRouter.get('/constact', (req:Request, res:Response) => {
    res.status(200).render('contact', {
        title: 'contact Him'//contact
    })
})

export default pageRouter