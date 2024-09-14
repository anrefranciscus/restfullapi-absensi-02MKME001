import Express from "express";
import AbsenceController from "../controllers/absenceController";
import Middleware from "../middlewares/authMiddleware";
const router = Express.Router();

router.post("/absence", Middleware.authMiddleware, AbsenceController.absence);
router.get(
  "/absence/view",
  Middleware.authMiddleware,
  AbsenceController.viewAbsence
);
