import express from 'express'
import { userRouter } from './routers/userRouter'
import { iErrorMiddleWare } from './types/userTypes'

const app = express()

app.use(express.json())

app.use('/api/v1/users', userRouter)

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'Route not found'
  })
})

app.use(({ err, req, res, next }: iErrorMiddleWare) => {
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong'
  })
})

export default app
