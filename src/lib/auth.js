import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("medicare");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowAccountLinking: true,
        },
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: true,
                defaultValue:"patient",
            },
            verificationStatus:{
                type:"string",
                defaultValue: "pending",
            }
        },
    },
     session: {
      cookieCache: {
        enabled: true,
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 5, // 5 days
      }
    },
    plugins: [
      jwt()
    ]
});