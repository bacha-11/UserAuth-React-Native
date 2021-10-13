import apiClient from "./client";

const signIn = (username, password) => apiClient.post('/api/auth/signin', { username, password})
const signUp = (username, email, password, confirmPassword) => apiClient.post('/api/auth/signup', { username, email, password, confirmPassword})
// const login = (email, password) => apiClient.post('/users/login', { email, password })

export default {signIn, signUp};


