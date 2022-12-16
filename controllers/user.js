import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user'

export const signIn = async (req, res) => {
    const { email, password } = req.body

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
}

export const signUp = async (req, res) => {
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
        newUser.save((err, data) => {
            if (err) return console.error(err)
            res.json(data)
        })
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' })

        res.status(201).json({ newUser, token })
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}