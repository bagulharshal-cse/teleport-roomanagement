import * as mongoose from 'mongoose';

export const RoomSchema = new mongoose.Schema({
    hotelId: String,
    roomNo: String,
    floorNo: Number,
    isBooked: Boolean,
    roomType: String,
    occupancyAdult: String,
    occupancyChild: String,
    roomDescription: String,
    photos: [],
    status: String,
}, { versionKey: false });