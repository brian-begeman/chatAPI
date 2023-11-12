import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUsers = async () => {
  await prisma.user.create({
    data: {
      username: 'user1',
      email: 'user1@gmail.com'
    }
  })

  await prisma.user.create({
    data: {
      username: 'user2',
      email: 'user2@gmail.com'
    }
  })
}

export const createRandomMessages = async () => {
  const users = await prisma.user.findMany()

  if (users.length < 2) {
    throw new Error('Insufficient users for creating messages.')
  }

  const [user2, user1] = users

  for (let i = 0; i < 50; i++) {
    const random = Math.round(Math.random())
    const randomMessage = `${
      new Date().getMinutes() + random
    } -- Random message ${i + 1}`

    await prisma.message.create({
      data: {
        message: randomMessage,
        senderId: random == 0 ? user1.id : user2.id,
        receiverId: random == 0 ? user2.id : user1.id,
        createdAt: new Date()
      }
    })
  }
}

export const run = async () => {
  await createUsers()
  await createRandomMessages()
}

run()
