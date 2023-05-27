// controllers/hotelController.js

const Hotel = require('../models/hotel');
const multer = require("multer");

//Hotel Pic 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix); // Set the filename for the uploaded file
  }
});

//Create Hotel
const createHotel = async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    if (req.file) {
      hotel.profilePic = req.file.filename;
    }

    await hotel.save();
    res.status(201).json({message: "Hotel successfully Added"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const upload = multer({ storage: storage });


//Get all hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Get Hotels by id
const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Update hotels
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel) {
      hotel.set(req.body);

      // Check if a new profile picture was uploaded
      if (req.file) {
        hotel.profilePic = req.file.filename;
      }

      await hotel.save();
      res.json({message: "Hotel successfuliy upadated"});
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//Delete  Hotel
const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (hotel) {
      res.json({ message: 'Hotel deleted' });
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Exports all the functions
module.exports = {
  createHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,

};
