import express from 'express'
import { getUserMessages } from '../controllers/userController'

export const userRouter = express.Router()

userRouter.route('/messages').get(getUserMessages)
