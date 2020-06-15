import * as mongoose from 'mongoose';

const PromotionDetailsSchema = new mongoose.Schema({
    applied: Boolean,
    promoCode: String,
    promoId: String,
}, { versionKey: false, _id: false });

const CancellationDetailsSchema = new mongoose.Schema({
    allowCancellation: Boolean,
    policy: String,
    reason: String,
    cancellationDate: String,
}, { versionKey: false, _id: false });

const AmountSchema = new mongoose.Schema({
    value: Number,
    unit: String,
}, { versionKey: false, _id: false });

const GuestDetailsSchema = new mongoose.Schema({
    noOfGuest: Number,
    noOfAdults: Number,
    noOfChilds: Number,
}, { versionKey: false, _id: false });

export const BookingSchema = new mongoose.Schema({
    bookingId: String,
    hotelId: String,
    roomId: String,
    customerId: String,
    bookingAmount: AmountSchema,
    guestDetails: GuestDetailsSchema,
    checkInDate: String,
    checkOutDate: String,
    bookingDate: String,
    transactionId: String,
    promotionDetails: PromotionDetailsSchema,
    cancellationDetails: CancellationDetailsSchema,
    status: String,
    paymentMode: String,
}, { versionKey: false });
