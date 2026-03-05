import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { authRouter } from './routes/auth'
import { userRouter } from './routes/users'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const PORT = process.env.PORT || 3000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }))

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))