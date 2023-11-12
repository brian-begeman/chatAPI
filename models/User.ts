import { iMessage } from './Message'

export interface iUser {
  id?: number
  username: string
  email: string
  messagesSent?: iMessage[]
  messagesReceived?: iMessage[]
}
