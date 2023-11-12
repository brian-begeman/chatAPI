import { PrismaClient } from '@prisma/client'
import { iUser } from '../models/User'

const prisma = new PrismaClient()

const getUserThread = async (
  currentUserId: number,
  fromUserId: number,
  lastId: number,
  pageSize: number
) => {
  const messages = await prisma.message.findMany({
    take: pageSize,
    where: {
      OR: [
        { senderId: currentUserId, receiverId: fromUserId },
        { senderId: fromUserId, receiverId: currentUserId }
      ],
      id: lastId
        ? {
            lt: lastId
          }
        : undefined
    },
    orderBy: { id: 'desc' }
  })

  return messages
}

// const createUser = async (userData: iUser): Promise<iUser> => {
//   const user = await prisma.user.create({
//     data: userData
//   })
//   return user
// }

// const getUserById = async (userId: number): Promise<iUser | null> => {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId
//     },
//     include: {
//       messagesReceived: true,
//       messagesSent: true
//     }
//   })

//   return user
// }

export { getUserThread }
