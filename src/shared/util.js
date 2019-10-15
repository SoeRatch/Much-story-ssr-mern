//a simple util to test if we are running in production mode or not.

// eslint-disable-next-line import/prefer-default-export
export const isProd = process.env.NODE_ENV === 'production';