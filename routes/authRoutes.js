import Express from "express";
import AuthController from "../controllers/authController";
const router = Express.Router();

router.post("/login", AuthController.loginStudent);
router.post("/register", AuthController.register);


export default router