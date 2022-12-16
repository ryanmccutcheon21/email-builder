// import { signUp } from "../../controllers/user"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../models/user'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { first, last, title, email, password, confirmPassword } = req.body.user

      try {
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: 'User already exists' })

        if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords do not match!' })
        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = new User({
          name: `${first} ${last}`,
          title,
          email,
          password: hashedPassword
        })
        newUser.save((err) => {
          if (err) return console.error(err)
        })
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' })

        res.status(201).json({ newUser, token })
      } catch (err) {
        res.status(500).json({ message: 'Something went wrong' })
      }
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