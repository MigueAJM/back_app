import dotenv from 'dotenv'
import pgPromise from 'pg-promise'
const pgp = pgPromise({})
dotenv.config()

const db = pgp(process.env.CONNECTION)
  db.one("SELECT $1 AS value", 0)
    .then((data) => {
      console.log("Base de datos conectada con exito!")
    })
    .catch((error) => {
      console.log("ERROR al conectar a la base de datos: ", error)
    })

export default db