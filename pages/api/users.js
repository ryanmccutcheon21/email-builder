import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('email-builder')
  const { user } = req.body

  if (req.method === 'POST') {
    try {
      //Check existing
      const checkExisting = await db
        .collection('users')
        .findOne({
          email: user.email
        })
      // Send error response if duplicate user is found
      if (checkExisting) {
        res.status(422).json({ message: 'User already exists' })
        client.close()
        return
      }
      const post = await db.collection('users').insertOne(user).then(result => {
        res.status(201).json(result.ops[0])
      })
      res.json(post)
    } catch (error) {
      console.error(error)
    }
  } else if (req.method === 'GET') {
    try {
      const users = await db
        .collection('users')
        .find({})
        .sort()
        .limit(10)
        .toArray()

      res.json(users)
    } catch (e) {
      console.error(e)
    }
  }
};