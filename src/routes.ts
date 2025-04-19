/**Array of routes that is accessible to public
 * This routes do not need authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
]


/**
 * Array of routes that is accessible to authenticated users 
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/signin",
    "/auth/signup",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
]

/**
 * Array of routes are used for api authentication purposes 
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after signin
 * @type {string}
 */
export const DEFAULT_SINGIN_REDIRECT = "/settings"