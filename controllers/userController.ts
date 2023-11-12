import { getUserThread } from '../services/userServices'
import { iCursor, iMiddleWare } from '../types/userTypes'
import { NextFunction, Request, Response } from 'express'

const getUserMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const base64Cursor = req?.query?.cursor as string
    const decodedBuffer = Buffer.from(base64Cursor, 'base64')
    const decodedString = decodedBuffer.toString('utf-8')

    const cursor: iCursor = JSON.parse(decodedString)
    console.log({ cursor })
    const messages = await getUserThread(
      cursor.currentUserId,
      cursor.fromUserId,
      cursor.lastId,
      cursor.pageSize
    )

    res.status(200).json({
      status: 'success',
      data: messages
    })
  } catch (e) {
    next(e)
  }
}

export { getUserMessages }
