import app from './app'
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserByType } from './endpoints/getByType'
import { getUserByName } from './endpoints/getUserByName'
import { orderUser } from './endpoints/orderUser'
import { usersLimit } from './endpoints/userslimit'

app.get('/users', getAllUsers)
app.get('/users/limit', usersLimit)
app.get('/users/search', getUserByName)
app.get('/users/order', orderUser)
app.get('/users/limit', usersLimit)
app.get('/users/:type', getUserByType)