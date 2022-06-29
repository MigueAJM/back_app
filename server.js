/* libraries */
import express from 'express'
import morgan from "morgan";

/* files */
import errorMiddleware from './utilerias/middleware/error.js'
import usersRoutes from './src/users/routes/users.route.js'

const app = express()

app.set("port", process.env.PORT || 4000)

app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => res.send("Server Express..."))
app.use("/users/", usersRoutes)

app.use(errorMiddleware);

app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"))
})