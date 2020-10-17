import express from "express";
const router = express.Router();
import {
addOrderItems,getOrderById,updateOrderToPayed,getMyOrders
} from "../controllers/orderController.js";
import {protect} from '../middleware/authMiddleware.js'

router.route("/").post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPayed)

export default router;
