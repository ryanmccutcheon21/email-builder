import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../models/user'

export default async function handler(req, res) {
    const { email, password } = req.body.user

    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid Credentials' })
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' })

        res.status(200).json({ result: existingUser, token })

    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' })
    }
};