import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message:"Hello, World!"})
})


routes.use("/doces",docesRoutes)
routes.use("/filmes",filmesRoutes)


export default routes