import * as mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    address: String,
    area: String,
    cityName: String,
    countryName: String,
    postalCode: Number,
}, { versionKey: false, _id: false });

export const HotelSchema = new mongoose.Schema({
    name: String,
    address: AddressSchema,
    amenities: [],
    totalNoOfRooms: Number,
    totalNoOfBookedRooms: Number,
    hotelDescription: String,
    rating: Number,
}, { versionKey: false });