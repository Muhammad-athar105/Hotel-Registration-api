// routes/hotelRoutes.js

const express = require('express');
const hotelController = require('../controllers/hotelController');
const multer = require('multer'); // Import multer for file uploads

const upload = multer(); // Create a multer instance

const router = express.Router();

router.post('/create', hotelController.createHotel);
router.get('/view', hotelController.getHotels);
router.get('/view/:id', hotelController.getHotelById);
router.put('/update/:id', hotelController.updateHotel);
router.delete('/delete/:id', hotelController.deleteHotel);

// Create a new hotel with file upload
router.post('/hotels', upload.single('profilePic'), hotelController.createHotel);

// Update an existing hotel with file upload
router.put('/hotels/:id', upload.single('profilePic'), hotelController.updateHotel);

module.exports = router;
