import {Router} from 'express'
import {allUsers}from '../Controller/users.controller.js'
import responseFormat from '../../../utilerias/middleware/responseFormat.js'

const router = Router()

router.get("/allusers", allUsers, responseFormat)

export default router