import { Errback, NextFunction, Request, Response } from 'express'

export interface iMiddleWare {
  req: Request
  res: Response
  next: NextFunction
}

export interface iErrorMiddleWare {
  err: Errback
  req: Request
  res: Response
  next: NextFunction
}

export interface iCursor {
  lastId: number
  pageSize: number
  currentUserId: number
  fromUserId: number
}
