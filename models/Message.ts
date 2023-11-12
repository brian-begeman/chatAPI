import { iUser } from './User'

export interface iMessage {
  id?: number
  message: string
  sender?: iUser
  receiver: iUser
  senderId?: number
  receiverId: number
}
