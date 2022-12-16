import mongoose from 'mongoose'
import userSchema from '../schemas/userSchema'

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default mongoose.model('User', userSchema)