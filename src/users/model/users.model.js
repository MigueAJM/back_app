import db from '../../../config/db.config.js'

export const getAllUsers = async () => {
    let query = `SELECT * FROM "users"`
    return await db.any(query)
  }