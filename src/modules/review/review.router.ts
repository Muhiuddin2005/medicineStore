import { Router } from "express";
import { ReviewController } from "./review.controller.js";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { reviewValidation } from "./review.validation.js";

const reviewRouter = Router();

reviewRouter.post("/", auth("CUSTOMER"), validateRequest(reviewValidation.createReviewSchema), ReviewController.addReview);
reviewRouter.get("/:medicineId", ReviewController.getMedicineReviews);

export default reviewRouter;
