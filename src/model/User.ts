export interface UserSchema {
    name: String,
    email: String,
    password: String,
    role: string // default: 'user', enum: ['user', 'admin']
}