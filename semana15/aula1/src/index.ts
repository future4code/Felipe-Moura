import app from './app'
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserByType } from './endpoints/getByType'
import { getUserByName } from './endpoints/getUserByName'

app.get('/users', getAllUsers)
app.get('/users/search', getUserByName)
app.get('/users/:type', getUserByType)