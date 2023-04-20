import exp from 'constants';
import express from 'express';
import { getAllUsers , getUserByID , postUserLogin, postUserRegister, getUserByCookie, getUserLogout} from './usersCtrl';

const router = express.Router();

router
.get("", getAllUsers)
.get("/by-cookie", getUserByCookie)
.get("/logout", getUserLogout)
.get("/:id", getUserByID)
.post("/login", postUserLogin)
.post("/register", postUserRegister)


export default router;