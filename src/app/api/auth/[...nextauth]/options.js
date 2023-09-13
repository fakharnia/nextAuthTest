import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: "Username and Password",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your username" },
                password: { label: "Username", type: "password", placeholder: "Enter your username" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const res = await fetch("http://localhost:5000/api/login", {
                    method: "POST",
                    body: JSON.stringify({ username: credentials.username, password: credentials.password }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                return res.json();
            }
        })
    ],
    session: {
        maxAge: 5 * 60,  // 5 minutes
        updateAge: 2.5 * 60, // 2.5 minutes
    },
    pages: {
        "signin": "/signin"
    },
    theme: {
        logo: "/logo.svg"
    }
};

export default NextAuthOptions;