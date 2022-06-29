import {getAllUsers}  from '../Model/users.model.js'

export const allUsers = async (req, res, next) => {
    const data = await getAllUsers()
    let response = {
      data: data,
      code: 204,
      message: 'No content'
    }
    res.response = response
    next()
  }
