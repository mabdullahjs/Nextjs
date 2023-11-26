import middleware from "next-auth/middleware";

export default middleware

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    matcher: ['/contact/user']
  }