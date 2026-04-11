import { createAuthClient } from "better-auth/react"
import { env } from "../../env"

const API_URL = env.API_URL

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: API_URL
})