import app from "./app";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { singupUser } from "./endpoints/singup";

app.post('/user/create', createUser)

app.post('/user/singup', singupUser)
app.post('/user/login', login)