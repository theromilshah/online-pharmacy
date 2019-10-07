const express = require('express');
const router = express.Router();

const pharmacyController = require('../controllers/pharmacy');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/', pharmacyController.getHome);
router.get('/medicine-list',isLoggedIn, pharmacyController.getMedicineList);
router.get('/cart', isLoggedIn, pharmacyController.getCart);
router.post('/add-to-cart', isLoggedIn, pharmacyController.postAddToCart);
router.post('/delete-from-cart/:medicineId', isLoggedIn, pharmacyController.postDeleteFromCart);
router.get('/orders', isLoggedIn, pharmacyController.getOrders);
router.post('/order', isLoggedIn, pharmacyController.postOrder);
router.get('/clear-cart', isLoggedIn, pharmacyController.clearCart);

module.exports = router;