import NextAuth from 'next-auth';
import clientPromise from '../../../lib/mongodb'
import { compare } from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials'
// import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

export const authOptions = {
    // adapter: MongoDBAdapter(clientPromise),
    //Configure JWT
    session: {
        strategy: 'jwt'
    },
    //Specify Provider
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email'
                },
                password: {
                    type: 'password',
                    label: 'Password'
                }
            },
            async authorize(credentials) {
                //Connect to DB
                const client = await clientPromise;
                const db = client.db('email-builder');
                //Get all the users
                const users = await db.collection('users');
                //Find user with the email  
                const result = await users.findOne({
                    email: credentials.email,
                });
                //Not found - send error res
                if (!result) {
                    client.close();
                    throw new Error('No user found with the email');
                }
                //Check hashed password with DB password
                const checkPassword = await compare(credentials.passowrd, result.passowrd);
                //Incorrect password - send response
                if (!checkPassword) {
                    client.close();
                    throw new Error('Password doesnt match');
                }
                //Else send success response
                client.close();
                return { email: result.email };
            },
        }),
    ],
}

export default NextAuth(authOptions)